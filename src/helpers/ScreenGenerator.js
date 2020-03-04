import _ from 'lodash';
import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';

import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { pointX, pointY } from './StyleGenerator';
import { ObjectGrid } from './GridGenerator';
import { Inventory } from '../components/Inventory';
import { Dialog } from '../components/Dialog';
import { Paper } from '../components/Paper';
import { MainMenuModal } from '../components/MainMenuModal';
import { PlatformSpecificMeasurement } from './PlatformSpecificUtils';

const { width, height } = Dimensions.get('window');

function screenGenerator(scene) {
  const originalScene = _.cloneDeep(scene);
  class ScreenGenerator extends React.PureComponent {
    state = {
      bg: scene.bg,
      collectedItems: [],
      inventoryOpen: false,
      loading: true,
      mainMenuVisible: false,
      resolved: [],
      paperModalVisible: false,
      dialogModalVisible: false,
      paperModalContent: null,
      dialogModalContent: null,
      originalDialogContent: null,
      dialogAnswer: '',
      scene: _.cloneDeep(scene),
    };

    componentDidMount() {
      this.loadCollectedItems();
      this.loadMultipleItems();
      this.loadSequenceItems();
      this.loadResolved();
    }

    loadResolved = async () => {
      const SavedResolvedRaw = await AsyncStorage.getItem('resolved');
      if (SavedResolvedRaw) {
        const SavedResolved = JSON.parse(SavedResolvedRaw);
        this.setState({ resolved: SavedResolved });
      }
    };

    loadCollectedItems = async () => {
      const inventoryRaw = await AsyncStorage.getItem('inventory');
      if (inventoryRaw) {
        const inventory = JSON.parse(inventoryRaw);
        this.setState({ collectedItems: inventory, loading: false });
      } else {
        this.setState({ collectedItems: [], loading: false });
      }
    };

    loadSequenceItems = async () => {
      const {
        scene: { objects },
      } = this.state;

      const objectsCopy = { ...objects };

      if (objectsCopy.describers) {
        objectsCopy.describers.forEach(async d => {
          const describerRaw = await AsyncStorage.getItem(d.group);
          const describer = JSON.parse(describerRaw);
          if (describer) {
            const i = objectsCopy.describers.findIndex(
              el => el.group === describer.group,
            );
            if (i > -1) {
              objectsCopy.describers[i] = describer;
            }
            this.setState(prevState => ({
              scene: {
                ...prevState.scene,
                objects: {
                  ...prevState.scene.objects,
                  describers: objectsCopy.describers,
                },
              },
            }));
          }
        });
      }
    };

    loadMultipleItems = async () => {
      const {
        scene: { objects },
      } = this.state;

      const objectsCopy = { ...objects };

      if (objectsCopy.itemsMap) {
        const groups = objectsCopy.itemsMap.filter(
          el => el.type === 'multiple',
        );
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          const groupRaw = await AsyncStorage.getItem(g);
          const group = JSON.parse(groupRaw);
          if (group) {
            group.forEach(item => {
              const i = objectsCopy.itemsMap.findIndex(el => el.id === item.id);
              if (i > -1) {
                objectsCopy.itemsMap[i] = item;
              }
            });
          }
          this.setState(s => ({
            scene: {
              ...s.scene,
              itemsMap: objectsCopy.itemsMap,
            },
          }));
        });
      }
    };

    reset = async () => {
      const {
        scene: { objects },
      } = this.state;

      await AsyncStorage.removeItem('inventory');
      this.setState({ collectedItems: [] });
      if (objects.itemsMap) {
        const groups = objects.itemsMap.filter(el => el.type === 'multiple');
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          await AsyncStorage.removeItem(g);
        });
        await AsyncStorage.removeItem('resolved');
        this.setState({ scene: _.cloneDeep(originalScene), resolved: [] });
      }
      this.openMainMenu();
    };

    onRoutePress = route => {
      const { navigation } = this.props;
      navigation.navigate(route);
    };

    collect = async item => {
      const { collectedItems } = this.state;
      await AsyncStorage.setItem(
        'inventory',
        JSON.stringify([...collectedItems, item]),
      );
      this.setState({ collectedItems: [...collectedItems, item] });
    };

    receive = async expectedValue => {
      const {
        resolved,
        scene: { objects },
        collectedItems,
      } = this.state;
      const selectedItemId = await AsyncStorage.getItem('selectedItem');
      if (expectedValue === selectedItemId) {
        await AsyncStorage.removeItem('selectedItem');

        const receiverResolved = objects.itemsMap.find(
          el => el.type === 'receiver',
        );
        if (receiverResolved) {
          this.setState(p => ({
            resolved: [...p.resolved, receiverResolved.id],
          }));
          await AsyncStorage.setItem(
            'resolved',
            JSON.stringify([...resolved, receiverResolved.id]),
          );

          const collectedItemsCopy = [...collectedItems];

          const index = collectedItemsCopy.findIndex(
            item => item.id === selectedItemId,
          );

          if (index !== -1 && collectedItemsCopy[index].logical) {
            collectedItemsCopy[index].logical.countOfUse -= 1;
          }

          this.setState({ collectedItems: collectedItemsCopy });

          await AsyncStorage.setItem(
            'inventory',
            JSON.stringify(collectedItemsCopy),
          );
        }
      }
    };

    sequence = async item => {
      const {
        scene: { objects },
        resolved,
      } = this.state;

      const objectsModified = { ...objects };
      const storageDescriber = await AsyncStorage.getItem(item.group);

      let describer;
      if (storageDescriber) {
        describer = JSON.parse(storageDescriber);
      }

      const describerIndex = objectsModified.describers.findIndex(
        elem => elem.group === item.group && elem,
      );
      if (describerIndex > -1) {
        describer = objectsModified.describers[describerIndex];
      }
      const { expectedValue, currentValue } = describer;
      if (expectedValue[currentValue.length] === item.name) {
        currentValue.push(item.name);
        objectsModified.describers[describerIndex] = {
          ...describer,
          currentValue,
        };
        if (expectedValue.length === currentValue.length) {
          resolved.map(el => el);
          this.setState({
            resolved: [
              ...resolved,
              objectsModified.describers[describerIndex].group,
            ],
          });
          await AsyncStorage.setItem(
            'resolved',
            JSON.stringify([
              ...resolved,
              objectsModified.describers[describerIndex].group,
            ]),
          );
          return;
        }
      } else {
        objectsModified.describers[describerIndex] = {
          ...describer,
          currentValue: [],
        };
      }
      await AsyncStorage.setItem(
        item.group,
        JSON.stringify(objectsModified.describers[describerIndex]),
      );
      this.setState({ scene: { ...scene, objects: objectsModified } });
    };

    toggleMultiple = async item => {
      const {
        scene: { objects },
        resolved,
      } = this.state;

      const objectsModified = { ...objects };

      const match = item.multiple.findIndex(el => el.id === item.selected);

      const index = match + 1 < item.multiple.length ? match + 1 : 0;
      const newSelected = item.multiple[index];

      const group = await AsyncStorage.getItem(item.group);
      let parts = objectsModified.itemsMap.filter(
        object => object.group === item.group && object,
      );
      let groups = parts.map(el => {
        if (el.selected === el.correct) return true;
        return false;
      });

      let groupCorrect = groups.every(el => el === true);
      let groupParsed = [];
      if (group) {
        groupParsed = JSON.parse(group);
      }

      if (groupCorrect) {
        return;
      }

      const groupMatch = groupParsed.findIndex(
        elem => elem.id === item.id && elem,
      );

      if (groupMatch > -1) {
        groupParsed[groupMatch] = { ...item, selected: newSelected.id };
      } else {
        groupParsed.push({ ...item, selected: newSelected.id });
      }

      await AsyncStorage.setItem(item.group, JSON.stringify(groupParsed));

      const itemMatch = objectsModified.itemsMap.findIndex(
        elem => elem.id === item.id && elem,
      );

      if (itemMatch > -1) {
        objectsModified.itemsMap[itemMatch] = {
          ...item,
          selected: newSelected.id,
        };
      }

      parts = objectsModified.itemsMap.filter(
        object => object.group === item.group && object,
      );
      groups = parts.map(el => {
        if (el.selected === el.correct) return true;
        return false;
      });

      groupCorrect = groups.every(el => el === true);
      groupParsed = [];
      if (group) {
        groupParsed = JSON.parse(group);
      }

      this.setState({ scene: { ...scene, objects: objectsModified } });

      if (groupCorrect) {
        this.setState({
          resolved: [...resolved, objectsModified.itemsMap[itemMatch].group],
        });
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([
            ...resolved,
            objectsModified.itemsMap[itemMatch].group,
          ]),
        );
      }
    };

    openMainMenu = () => {
      this.setState(s => ({ mainMenuVisible: !s.mainMenuVisible }));
    };

    openInventory = () => {
      this.setState(s => ({ inventoryOpen: !s.inventoryOpen }));
    };

    openPaper = (paperModalContent = null) => {
      this.setState(s => ({
        paperModalVisible: !s.paperModalVisible,
        paperModalContent,
      }));
    };

    onDragRelease = async (evt, g, id) => {
      const {
        scene: { objects },
        resolved,
      } = this.state;
      const moveX = g.moveX / pointX;
      const moveY = g.moveY / pointY;
      const receiver = objects.itemsMap.find(
        item => item.logical && item.logical.expectedValue === id,
      );
      if (
        moveX > receiver.position.x &&
        moveX < receiver.position.x + receiver.position.width &&
        moveY > receiver.position.y &&
        moveY < receiver.position.y + receiver.position.height
      ) {
        this.setState(s => ({ resolved: [...s.resolved, id] }));
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, id]),
        );
      }
    };

    showDialog = (item = null) => {
      this.setState(s => ({
        dialogModalVisible: !s.dialogModalVisible,
        dialogModalContent: item,
        originalDialogContent: item,
      }));
    };

    setDialog = async item => {
      const { resolved, originalDialogContent } = this.state;
      if (item.resolve) {
        this.setState(s => ({ resolved: [...s.resolved, item.resolve] }));
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, item.resolve]),
        );
      }
      this.setState({
        dialogModalContent: item.dialog ? item : originalDialogContent,
        dialogAnswer: item.a,
      });
    };

    render() {
      const {
        bg,
        collectedItems,
        inventoryOpen,
        loading,
        mainMenuVisible,
        paperModalVisible,
        dialogModalVisible,
        paperModalContent,
        dialogModalContent,
        dialogAnswer,
        resolved,
        scene: { objects },
      } = this.state;
      return (
        <SceneBackground source={bg}>
          {!loading && (
            <ObjectGrid
              objects={objects}
              collectedItems={collectedItems}
              onRoutePress={this.onRoutePress}
              collect={this.collect}
              receive={this.receive}
              sequence={this.sequence}
              toggleMultiple={this.toggleMultiple}
              showModal={this.openPaper}
              onDragRelease={this.onDragRelease}
              showDialog={this.showDialog}
              resolved={resolved}
            />
          )}
          <MainMenuButton onPress={this.openMainMenu}>
            <FontAwesome name="gear" size={20} color="#664422" />
          </MainMenuButton>
          <Inventory
            open={inventoryOpen}
            collectedItems={collectedItems}
            onPress={this.openInventory}
            receive={this.receive}
            objects={objects}
          />
          <MainMenuModal
            mainMenuVisible={mainMenuVisible}
            openMainMenu={this.openMainMenu}
            reset={this.reset}
          />
          {paperModalContent && (
            <Paper
              paperModalVisible={paperModalVisible}
              paperModalContent={paperModalContent}
              openPaper={this.openPaper}
            />
          )}
          {dialogModalContent && (
            <Dialog
              dialogModalVisible={dialogModalVisible}
              dialogModalContent={dialogModalContent}
              dialogAnswer={dialogAnswer}
              resolved={resolved}
              setDialog={this.setDialog}
              showDialog={this.showDialog}
            />
          )}
        </SceneBackground>
      );
    }
  }
  ScreenGenerator.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  return ScreenGenerator;
}

const SceneBackground = styled(ImageBackground)`
  height: ${height}px;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

const MainMenuButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${PlatformSpecificMeasurement(20)};
  left: 20px;
`;

const generateAllScreens = () =>
  Object.values(SCENES).reduce(
    (obj, scene) => ({ ...obj, [scene.name]: screenGenerator(scene) }),
    {},
  );
const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
export default screenGenerator;
