import _ from 'lodash';
import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  View,
  StatusBar,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { AdMobRewarded } from 'expo-ads-admob';

import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { pointX, pointY } from './StyleGenerator';
import { ObjectGrid } from './GridGenerator';
import { Inventory } from '../components/Inventory';
import { Dialog } from '../components/Dialog';
import { Paper } from '../components/Paper';
import { Hint } from '../components/Hint';
import { MainMenuModal } from '../components/MainMenuModal';
import { PlatformSpecificMeasurement } from './PlatformSpecificUtils';
import { setStateAction, findHelperFunction } from './ReducersGenerator';
import { SceneReducerPropTypes } from '../proptypes/ScenePropTypes';
import {
  ObjectPropTypes,
  PaperPropType,
  DialogPropType,
} from '../proptypes/ObjectGridPropTypes';
import { internationalizeScene } from '../localization';
import { arrayIncludesSorted, objCompare } from './Utils';

let { width, height } = Dimensions.get('window');
if (isIphoneX()) {
  width -= 65;
  height -= 55;
}
width = Math.round((height * 16) / 9);

function screenGenerator(scene, index) {
  class ScreenGenerator extends React.PureComponent {
    async componentDidMount() {
      const { setState } = this.props;
      const sceneCopy = _.cloneDeep(scene);
      internationalizeScene(`SCENES_${index}`, sceneCopy);

      setState(
        {
          scene: sceneCopy,
          originalScene: sceneCopy,
        },
        scene.name,
      );

      this.loadCollectedItems();
      // this.loadMultipleItems();
      // this.loadSequenceItems();
      this.loadResolved();
      this.setBgSound();
    }

    loadResolved = async () => {
      const { setState } = this.props;
      const SavedResolvedRaw = await AsyncStorage.getItem('resolved');
      if (SavedResolvedRaw) {
        const SavedResolved = JSON.parse(SavedResolvedRaw);
        setState({ resolved: SavedResolved });
      }
    };

    loadCollectedItems = async () => {
      const { setState } = this.props;
      const inventoryRaw = await AsyncStorage.getItem('inventory');
      if (inventoryRaw) {
        const inventory = JSON.parse(inventoryRaw);
        setState({ collectedItems: inventory, loading: false });
      } else {
        setState({ collectedItems: [], loading: false });
      }
    };

    loadSequenceItems = async () => {
      const {
        currentScene,
        currentScene: {
          scene: { objects },
        },
        setState,
      } = this.props;

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
            setState(
              {
                scene: {
                  ...currentScene.scene,
                  objects: {
                    ...objects,
                    describers: objectsCopy.describers,
                  },
                },
              },
              currentScene.scene.name,
            );
          }
        });
      }
    };

    loadMultipleItems = async () => {
      const {
        currentScene,
        currentScene: {
          scene: { objects },
        },
        setState,
      } = this.props;

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
          setState(
            {
              scene: {
                ...currentScene,
                itemsMap: objectsCopy.itemsMap,
              },
            },
            currentScene.scene.name,
          );
        });
      }
    };

    setBgSound = async () => {
      if (scene.bgSound) {
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(scene.bgSound);
          await soundObject.playAsync(scene.bgSound);
          await soundObject.setIsLoopingAsync(true);
          await soundObject.setStatusAsync({ volume: 0.2 });
        } catch (e) {
          console.error(e);
        }
      }
    };

    reset = async () => {
      const {
        currentScene: {
          scene: { objects, name: sceneName },
          originalScene,
        },
        setState,
      } = this.props;

      await AsyncStorage.removeItem('inventory');
      setState({ collectedItems: [] });
      if (objects.itemsMap) {
        const groups = objects.itemsMap.filter(el => el.type === 'multiple');
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          await AsyncStorage.removeItem(g);
        });
        await AsyncStorage.removeItem('resolved');
        setState({ scene: _.cloneDeep(originalScene) }, sceneName);
        setState({ resolved: [], dialogAnswer: '', loading: true });
        setState({ loading: false });
      }

      this.openMainMenu();
    };

    onRoutePress = (route, progress) => {
      const { navigation, setState } = this.props;
      if (progress) {
        setState({ progress });
      }
      navigation.navigate(route);
    };

    collect = async (item, progress) => {
      const { collectedItems, setState } = this.props;
      await AsyncStorage.setItem(
        'inventory',
        JSON.stringify([...collectedItems, item]),
      );
      if (progress) {
        setState({ progress });
      }
      setState({ collectedItems: [...collectedItems, item] });
    };

    receive = async (expectedValue, progress) => {
      const {
        resolved,
        currentScene: {
          scene: { objects },
        },
        collectedItems,
        setState,
      } = this.props;
      const receiveElement = objects.itemsMap.find(
        el => el.logical.expectedValue === expectedValue,
      );
      const selectedItemId = await AsyncStorage.getItem('selectedItem');
      if (expectedValue === selectedItemId) {
        await AsyncStorage.removeItem('selectedItem');

        const receiverResolved = objects.itemsMap.find(
          el => el.type === 'receiver',
        );
        if (receiverResolved) {
          setState({
            resolved: [...resolved, receiverResolved.id],
          });
          if (progress) {
            setState({ progress });
          }
          await AsyncStorage.setItem(
            'resolved',
            JSON.stringify([...resolved, receiverResolved.id]),
          );

          let collectedItemsCopy = [...collectedItems];

          const index = collectedItemsCopy.findIndex(
            item => item.id === selectedItemId,
          );
          if (index !== -1 && collectedItemsCopy[index].logical) {
            if (collectedItemsCopy[index].logical.countOfUse === 1) {
              collectedItemsCopy.splice(index, 1);
            } else {
              collectedItemsCopy[index] = {
                logical: {
                  countOfUse: collectedItemsCopy[index].logical.countOfUse - 1,
                },
              };
            }
          }

          setState({ collectedItems: collectedItemsCopy });

          await AsyncStorage.setItem(
            'inventory',
            JSON.stringify(collectedItemsCopy),
          );
        }
      }
    };

    handleSequence = async (group, id, progress) => {
      const {
        currentScene: {
          scene: {
            objects: { itemsMap },
          },
        },
        tmp,
        resolved,
        setState,
      } = this.props;
      const findFunction = scene => {
        return scene.objects.itemsMap.find(
          item => item.group === group && item.main,
        );
      };
      const mainSequence = findHelperFunction(findFunction);
      const scenario =
        mainSequence && mainSequence.logical && mainSequence.logical.scenario;
      if (!scenario) return false;

      if (!tmp[mainSequence.group]) {
        setState({
          tmp: {
            ...tmp,
            [mainSequence.group]: [],
          },
        });
      }

      const currentSequence = tmp[mainSequence.group]
        ? [...tmp[mainSequence.group], id]
        : [id];

      if (arrayIncludesSorted(scenario, currentSequence)) {
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, group]),
        );
        if (progress) {
          setState({ progress });
        }
        return setState({
          resolved: [...resolved, group],
        });
      }

      setState({
        tmp: {
          ...tmp,
          [mainSequence.group]: currentSequence,
        },
      });
    };

    handleSlot = async (group, id, progress) => {
      const {
        currentScene: {
          scene: oldScene,
          scene: {
            name: sceneName,
            objects,
            objects: { itemsMap },
          },
        },
        tmp,
        resolved,
        setState,
      } = this.props;

      const findFunction = scene => {
        return scene.objects.itemsMap.find(
          item => item.group === group && item.main,
        );
      };
      const slotSequence = findHelperFunction(findFunction);
      const slotScenario =
        slotSequence && slotSequence.logical && slotSequence.logical.scenario;
      if (!slotScenario) return false;
      if (!tmp[slotSequence.group]) {
        setState({
          tmp: {
            ...tmp,
            [slotSequence.group]: {},
          },
        });
      }

      const itemsMapCopy = _.cloneDeep(itemsMap);

      const allSlots = itemsMapCopy.filter(item => item.group === group);
      const currentSlot = itemsMapCopy.findIndex(item => item.id === id);

      const currentPosition = {};

      allSlots.forEach(item => {
        currentPosition[item.id] = item.logical.selected;
      });

      let { selected } = itemsMapCopy[currentSlot].logical;
      const { options } = itemsMapCopy[currentSlot].logical;

      if (selected === options[options.length - 1].id) {
        selected = options[0].id;
      } else {
        const currentOption = options.findIndex(item => item.id === selected);
        selected = options[currentOption + 1].id;
      }

      const selectedOption = itemsMapCopy[currentSlot].logical.options.find(
        item => item.id === selected,
      );
      itemsMapCopy[currentSlot].element = selectedOption.element;
      itemsMapCopy[currentSlot].logical.selected = selected;

      setState(
        {
          scene: {
            ...oldScene,
            objects: {
              ...objects,
              itemsMap: itemsMapCopy,
            },
          },
        },
        sceneName,
      );

      if (objCompare(slotScenario, currentPosition)) {
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, group]),
        );
        if (progress) {
          setState({ progress });
        }
        return setState({
          resolved: [...resolved, group],
        });
      }

      setState({
        tmp: {
          ...tmp,
          [slotSequence.group]: currentPosition,
        },
      });
    };

    openMainMenu = () => {
      const { setState, mainMenuVisible } = this.props;
      setState({ mainMenuVisible: !mainMenuVisible });
    };

    openInventory = () => {
      const { setState, inventoryOpen } = this.props;
      setState({ inventoryOpen: !inventoryOpen });
    };

    openPaper = (paperModalContent = null, progress) => {
      const { setState, paperModalVisible } = this.props;
      if (progress) {
        setState({ progress });
      }
      setState({
        paperModalVisible: !paperModalVisible,
        paperModalContent,
      });
    };

    onDragRelease = async (evt, g, id, group, progress) => {
      const {
        currentScene: {
          scene: { objects },
        },
        resolved,
        setState,
      } = this.props;
      if (resolved.includes(group)) {
        const groupResolvedItems = objects.itemsMap.filter(
          item => item.group === group,
        );
      }
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
        const resolvedWithId = [...resolved, id];
        const groupItems = objects.itemsMap
          .filter(item => item.group === group)
          .map(item => item.id);

        const groupIsResolved = groupItems.every(item =>
          resolvedWithId.includes(item),
        );

        if (groupIsResolved) {
          resolvedWithId.push(group);
        }

        setState({ resolved: resolvedWithId });
        await AsyncStorage.setItem('resolved', JSON.stringify(resolvedWithId));
      } else if (resolved.includes(id)) {
        const resolvedCopy = [...resolved];
        resolvedCopy.splice(
          resolvedCopy.findIndex(item => item.id === id),
          1,
        );
        if (progress) {
          setState({ progress });
        }
        setState({ resolved: resolvedCopy });
        await AsyncStorage.setItem('resolved', JSON.stringify(resolvedCopy));
      }
    };

    showDialog = (item = null, progress) => {
      const { dialogModalVisible, setState } = this.props;
      if (progress) {
        setState({ progress });
      }
      setState({
        dialogModalVisible: !dialogModalVisible,
        dialogModalContent: item,
        originalDialogContent: item,
        dialogAnswer: item.character,
      });
    };

    showDialogAnswer = item => {
      const { setState } = this.props;
      setState({
        dialogModalContent: { ...item, questionsShouldBeShown: true },
      });
    };

    setDialog = async item => {
      const { resolved, originalDialogContent, setState } = this.props;
      if (item.resolve) {
        setState({ resolved: [...resolved, item.resolve] });
        await AsyncStorage.setItem(
          'resolved',
          JSON.stringify([...resolved, item.resolve]),
        );
      }
      setState({
        dialogModalContent: item.dialog ? item : originalDialogContent,
        dialogAnswer: item.character,
      });
    };

    showHint = async () => {
      const { resolved } = this.props;
      if (Platform.OS === 'ios') {
        AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/3552369374');
      } else {
        AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/5683229761');
      }
      AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
        this.openMainMenu();
        this.showHintModal(resolved);
      });
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    }

    showHintModal = () => {
      const { hintModalVisible, setState, currentScene } = this.props;
      setState({
        hintModalVisible: !hintModalVisible
      });
    }

    render() {
      const {
        collectedItems,
        inventoryOpen,
        loading,
        mainMenuVisible,
        paperModalVisible,
        dialogModalVisible,
        paperModalContent,
        dialogModalContent,
        dialogAnswer,
        hintModalVisible,
        resolved,
        progress,
        currentScene: {
          scene: { objects, bg, hints },
        },
      } = this.props;
      return (
        <Container>
          <StatusBar hidden={true} />
          <SceneBackground style={{ aspectRatio: 16 / 9 }} source={bg}>
            {!loading && (
              <ObjectGrid
                objects={objects}
                collectedItems={collectedItems}
                onRoutePress={this.onRoutePress}
                collect={this.collect}
                receive={this.receive}
                handleSequence={this.handleSequence}
                handleSlot={this.handleSlot}
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
              showHint={this.showHint}
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
                showDialogAnswer={this.showDialogAnswer}
              />
            )}
            {hintModalVisible && (
              <Hint
                hintModalVisible={hintModalVisible}
                progress={progress}
                hints={hints}
                showHintModal={this.showHintModal}
              />
            )}
          </SceneBackground>
        </Container>
      );
    }
  }

  ScreenGenerator.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    setState: PropTypes.func.isRequired,
    currentScene: SceneReducerPropTypes.isRequired,
    resolved: PropTypes.arrayOf(PropTypes.string).isRequired,
    collectedItems: PropTypes.arrayOf(ObjectPropTypes).isRequired,
    inventoryOpen: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    mainMenuVisible: PropTypes.bool.isRequired,
    paperModalVisible: PropTypes.bool.isRequired,
    dialogModalVisible: PropTypes.bool.isRequired,
    paperModalContent: PaperPropType.isRequired,
    dialogModalContent: DialogPropType.isRequired,
    originalDialogContent: DialogPropType.isRequired,
    dialogAnswer: PropTypes.string.isRequired,
    hintModalVisible: PropTypes.bool.isRequired,
    tmp: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    progress: PropTypes.string,
  };

  const mapStateToProps = ({ app, [scene.name]: currentScene }) => ({
    currentScene,
    resolved: app.resolved,
    collectedItems: app.collectedItems,
    inventoryOpen: app.inventoryOpen,
    loading: app.loading,
    mainMenuVisible: app.mainMenuVisible,
    paperModalVisible: app.paperModalVisible,
    dialogModalVisible: app.dialogModalVisible,
    paperModalContent: app.paperModalContent,
    dialogModalContent: app.dialogModalContent,
    originalDialogContent: app.originalDialogContent,
    hintModalVisible: app.hintModalVisible,
    dialogAnswer: app.dialogAnswer,
    tmp: app.tmp,
    progress: app.progress,
  });

  const mapDispatchToProps = {
    setState: setStateAction,
  };

  return connect(mapStateToProps, mapDispatchToProps)(ScreenGenerator);
}

const Container = styled(View)`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

const SceneBackground = styled(ImageBackground)`
  width: ${width}px;
  height: ${height}px;
`;

const MainMenuButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${PlatformSpecificMeasurement(20)};
  left: 20px;
`;

const generateAllScreens = () =>
  Object.values(SCENES).reduce(
    (obj, scene, i) => ({ ...obj, [scene.name]: screenGenerator(scene, i) }),
    {},
  );
const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
export default screenGenerator;
