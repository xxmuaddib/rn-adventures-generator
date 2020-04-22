import _ from 'lodash';
import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Audio } from 'expo-av';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { AdMobRewarded } from 'expo-ads-admob';

import { SCENES, INITIAL_SCREEN } from '../configs/scenes-combiner';
import { pointX, pointY } from './StyleGenerator';
import { ObjectGrid } from './GridGenerator';
import { Inventory } from '../components/Inventory';
import { Dialog } from '../components/Dialog';
import { Paper } from '../components/Paper';
import { Hint } from '../components/Hint';
import { MainMenuModal } from '../components/MainMenuModal';
import { PlatformSpecificMeasurement } from './PlatformSpecificUtils';
import {
  setStateAction,
  findHelperFunction,
  resetAction,
} from './ReducersGenerator';
import { SceneReducerPropTypes } from '../proptypes/ScenePropTypes';
import { ITEMS } from '../constants/items';
import {
  ObjectPropTypes,
  PaperPropType,
  DialogPropType,
} from '../proptypes/ObjectGridPropTypes';
import { internationalizeScene } from '../localization';
import { arrayIncludesSorted, objCompare } from './Utils';

let { width, height } = Dimensions.get('window');
let top;
if (isIphoneX()) {
  height -= 55;
  top = 55 / 2;
}
const gameWidth = Math.round((height * 16) / 9);
const left = width >= gameWidth ? (width - gameWidth) / 2 : 0;

function screenGenerator(scene, index) {
  class ScreenGenerator extends React.PureComponent {
    async componentDidMount() {
      const { setState, resolved } = this.props;
      const sceneCopy = _.cloneDeep(scene);
      internationalizeScene(`SCENES_${index}`, sceneCopy);

      setState(
        {
          scene: sceneCopy,
          originalScene: sceneCopy,
        },
        scene.name,
      );
      this.setBgSound();
    }

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

    resetFunction = async () => {
      const {
        currentScene: {
          scene: { objects, name: sceneName },
          originalScene,
        },
        setState,
        reset,
        navigation,
      } = this.props;
      reset();
      navigation.navigate(INITIAL_SCREEN);
      const sceneCopy = _.cloneDeep(scene);
      internationalizeScene(`SCENES_${index}`, sceneCopy);
      setState(
        {
          scene: sceneCopy,
          originalScene: sceneCopy,
          currentRoute: INITIAL_SCREEN,
        },
        scene.name,
      );
      this.setBgSound();
      setState({ loading: false });
    };

    saveProgress = async progress => {
      const { setState } = this.props;
      setState({ progress });
    };

    onRoutePress = (route, progress) => {
      const { navigation, setState } = this.props;
      if (progress) {
        this.saveProgress(progress);
      }
      setState({ currentRoute: route });
      navigation.navigate(route);
    };

    collect = async (item, progress) => {
      const {
        currentScene: {
          scene: { objects },
        },
        collectedItems,
        resolved,
        setState,
      } = this.props;
      if (progress) {
        this.saveProgress(progress);
      }
      let newResolved = [];
      if (
        item.logical &&
        item.logical.resolveOnCollect &&
        !!item.logical.resolveOnCollect.length
      ) {
        item.logical.resolveOnCollect.forEach(el => {
          newResolved = [...newResolved, el];
        });
      }
      newResolved = [...resolved, ...newResolved, `collected-${item.id}`];
      setState({
        collectedItems: [...collectedItems, item],
        resolved: [...newResolved],
      });
    };

    receive = async (receiver, progress) => {
      const {
        resolved,
        currentScene: {
          scene: { objects },
        },
        collectedItems,
        setState,
      } = this.props;
      const selectedItemId = await AsyncStorage.getItem('selectedItem');
      if (receiver.logical.expectedValue.includes(selectedItemId)) {
        await AsyncStorage.removeItem('selectedItem');

        const newResolved = [...resolved, `${receiver.id}-${selectedItemId}`];
        setState({
          resolved: newResolved,
        });

        if (
          receiver.logical.expectedValue.every(val =>
            newResolved.includes(`${receiver.id}-${val}`),
          )
        ) {
          setState({
            resolved: [...newResolved, receiver.id],
          });
        }

        if (progress) {
          this.saveProgress(progress);
        }

        const collectedItemsCopy = [...collectedItems];

        const i = collectedItemsCopy.findIndex(
          item => item.id === selectedItemId,
        );
        if (i !== -1 && collectedItemsCopy[i].logical) {
          collectedItemsCopy[i] = {
            ...collectedItemsCopy[i],
            logical: {
              ...collectedItemsCopy[i].logical,
              countOfUse: collectedItemsCopy[i].logical.countOfUse - 1,
            },
          };
        }

        setState({ collectedItems: collectedItemsCopy });
      }
    };

    handleSequence = async (group, id, progress) => {
      const { tmp, resolved, setState } = this.props;
      const findFunction = s =>
        s.objects.itemsMap.find(item => item.group === group && item.main);
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
        if (progress) {
          this.saveProgress(progress);
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

      const findFunction = s =>
        s.objects.itemsMap.find(item => item.group === group && item.main);
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
      const currentPosition = {};

      allSlots.forEach(item => {
        currentPosition[item.id] = item.logical.selected;
      });
      if (objCompare(slotScenario, currentPosition)) {
        if (progress) {
          this.saveProgress(progress);
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

    handleDecorative = async (id, progress) => {
      const { setState, resolved } = this.props;
      if (id) {
        if (progress) {
          this.saveProgress(progress);
        }
        return setState({ resolved: [...resolved, id] });
      }
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
        this.saveProgress(progress);
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
      const moveX = (g.moveX - evt.nativeEvent.locationX - left) / pointX;
      const moveY = (g.moveY - evt.nativeEvent.locationY - top) / pointY;

      const receiver = objects.itemsMap.find(
        item =>
          item.type === ITEMS.RECEIVER &&
          item.logical &&
          item.logical.expectedValue &&
          !!item.logical.expectedValue.length &&
          item.logical.expectedValue.includes(id),
      );

      if (
        receiver &&
        !!Object.keys(receiver).length &&
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
      } else if (resolved.includes(id)) {
        const resolvedCopy = [...resolved];
        resolvedCopy.splice(
          resolvedCopy.findIndex(item => item.id === id),
          1,
        );
        if (progress) {
          this.saveProgress(progress);
        }
        setState({ resolved: resolvedCopy });
      }
    };

    showDialog = (item = null) => {
      const { dialogModalVisible, setState } = this.props;
      setState({
        dialogModalVisible: !dialogModalVisible,
        dialogModalContent: item,
        originalDialogContent: item,
        dialogAnswer: item.character,
      });
    };

    showDialogAnswer = item => {
      const { setState, dialogShouldBeDropped } = this.props;

      if (dialogShouldBeDropped) {
        return setState({
          dialogModalVisible: false,
          dialogModalContent: null,
          dialogShouldBeDropped: false,
          dialogAnswer: '',
        });
      }

      setState({
        dialogModalContent: { ...item, questionsShouldBeShown: true },
      });
    };

    setDialog = async item => {
      const { resolved, originalDialogContent, setState } = this.props;
      if (item.resolve) {
        setState({ resolved: [...resolved, item.resolve] });
        if (item.setProgressOnResolved) {
          this.saveProgress(item.setProgressOnResolved);
        }
      }

      setState({
        dialogModalContent: item.dialog ? item : originalDialogContent,
        dialogShouldBeDropped: !!item.drop,
        dialogAnswer: item.character,
      });
    };

    showHint = async () => {
      if (Platform.OS === 'ios') {
        AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/3552369374');
      } else {
        AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/5683229761');
      }
      AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
        setTimeout(() => {
          this.openMainMenu();
          this.showHintModal();
          AdMobRewarded.removeAllListeners();
        }, 100);
      });
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    };

    showHintModal = () => {
      const { hintModalVisible, setState } = this.props;
      setState({
        hintModalVisible: !hintModalVisible,
      });
    };

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
          scene: { objects, bg },
        },
      } = this.props;
      return (
        <Container>
          <StatusBar hidden />
          <SceneBackground source={bg}>
            {!loading && (
              <ObjectGrid
                objects={objects}
                collectedItems={collectedItems}
                onRoutePress={this.onRoutePress}
                collect={this.collect}
                receive={this.receive}
                handleSequence={this.handleSequence}
                handleSlot={this.handleSlot}
                handleDecorative={this.handleDecorative}
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
              reset={this.resetFunction}
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
    dialogShouldBeDropped: PropTypes.bool.isRequired,
    hintModalVisible: PropTypes.bool.isRequired,
    tmp: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    progress: PropTypes.string.isRequired,
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
    dialogShouldBeDropped: app.dialogShouldBeDropped,
    hintModalVisible: app.hintModalVisible,
    dialogAnswer: app.dialogAnswer,
    tmp: app.tmp,
    progress: app.progress,
  });

  const mapDispatchToProps = {
    setState: setStateAction,
    reset: resetAction,
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
  width: ${gameWidth}px;
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
