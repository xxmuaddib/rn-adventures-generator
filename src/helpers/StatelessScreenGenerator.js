import _ from 'lodash';
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';

import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { pointX, pointY } from './StyleGenerator';
import { ObjectGrid } from './GridGenerator';
import { Inventory } from '../components/Inventory';
import { Dialog } from '../components/Dialog';
import { Paper } from '../components/Paper';

const { width, height } = Dimensions.get('window');

function screenGenerator(rawScene) {
  const originalScene = _.cloneDeep(rawScene);
  const Scene = ({ navigation }) => {
    const [bg] = useState(rawScene.bg);
    const [collectedItems, setCollectedItems] = useState([]);
    const [inventoryOpen, setInventoryOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [mainMenuVisible, setMainMenuVisible] = useState(false);
    const [resolved, setResolved] = useState([]);
    const [paperModalVisible, setPaperModalVisible] = useState(false);
    const [dialogModalVisible, setDialogModalVisible] = useState(false);
    const [paperModalContent, setPaperModalContent] = useState(null);
    const [dialogModalContent, setDialogModalContent] = useState(null);
    const [originalDialogContent, setOriginalDialogContent] = useState(null);
    const [dialogAnswer, setDialogAnswer] = useState('');
    const [scene, setScene] = useState(_.cloneDeep(rawScene));

    useEffect(() => {
      loadCollectedItems();
      setMultipleItems();
      setSequenceItems();
      loadResolved();
    });

    useEffect(() => {
      const fn = async () => {
        await AsyncStorage.setItem('resolved', JSON.stringify(resolved));
      };
      fn();
    }, [resolved]);

    useEffect(() => {
      const fn = async () => {
        await AsyncStorage.setItem('inventory', JSON.stringify(collectedItems));
      };
      fn();
    }, [collectedItems]);

    const loadResolved = useCallback(async () => {
      const savedResolvedRaw = await AsyncStorage.getItem('resolved');
      if (savedResolvedRaw) {
        const savedResolved = JSON.parse(savedResolvedRaw);
        setResolved(savedResolved);
      }
    });

    const loadCollectedItems = useCallback(async () => {
      const inventoryRaw = await AsyncStorage.getItem('inventory');
      if (inventoryRaw) {
        const inventory = JSON.parse(inventoryRaw);
        setCollectedItems(inventory);
        setLoading(false);
      } else {
        setLoading(false);
      }
    }, [setCollectedItems, setLoading]);

    const reset = useCallback(async () => {
      const { objects } = scene;

      setCollectedItems([]);
      if (objects.itemsMap) {
        const groups = objects.itemsMap.filter(el => el.type === 'multiple');
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          await AsyncStorage.removeItem(g);
        });
        setScene(_.cloneDeep(originalScene));
        setResolved([]);
      }
      openMainMenu();
    }, [scene, setCollectedItems, setScene, setResolved]);

    const setSequenceItems = useCallback(async () => {
      const { objects } = scene;
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

            setScene({
              ...scene,
              objects: {
                ...scene.objects,
                describers: objectsCopy.describers,
              },
            });
          }
        });
      }
    }, [scene, setScene]);

    const setMultipleItems = useCallback(async () => {
      const { objects } = scene;

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
          setScene({
            ...scene,
            itemsMap: objectsCopy.itemsMap,
          });
        });
      }
    }, [scene, setScene]);

    const onPress = useCallback(
      route => {
        navigation.navigate(route);
      },
      [navigation],
    );

    const collect = useCallback(
      async item => {
        setCollectedItems([...collectedItems, item]);
      },
      [collectedItems, setCollectedItems],
    );

    const receive = useCallback(
      async expectedValue => {
        const selectedItemId = await AsyncStorage.getItem('selectedItem');
        if (expectedValue === selectedItemId) {
          await AsyncStorage.removeItem('selectedItem');
          const { objects } = scene;

          const receiverResolved = objects.itemsMap.find(
            el => el.type === 'receiver',
          );
          if (receiverResolved) {
            setResolved([...resolved, receiverResolved.id]);
          }
        }
      },
      [scene, setResolved],
    );

    // TODO: TOTAL REFACTOR
    const sequence = useCallback(
      async item => {
        const { objects } = scene;

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
            resolved.map(r => r);
            setResolved([
              ...resolved,
              objectsModified.describers[describerIndex].group,
            ]);
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
        setScene({ ...scene, objects: objectsModified });
      },
      [scene, setResolved, setScene],
    );

    // TODO: TOTAL REFACTOR
    const toggleMultiple = useCallback(
      async item => {
        const { objects } = scene;

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

        setScene({ ...scene, objects: objectsModified });

        if (groupCorrect) {
          setResolved([...resolved, objectsModified.itemsMap[itemMatch].group]);
        }
      },
      [scene, setScene, setResolved],
    );

    const openMainMenu = useCallback(() => {
      setMainMenuVisible(!mainMenuVisible);
    });

    const openPaper = useCallback(
      (content = null) => {
        setPaperModalContent(content);
        setPaperModalVisible(!paperModalVisible);
      },
      [setPaperModalContent, setPaperModalVisible, paperModalVisible],
    );

    const onDragRelease = useCallback((event, g) => {
      const moveX = g.moveX / pointX;
      const moveY = g.moveY / pointY;
      if (moveX > 100 && moveX < 200 && moveY > 50 && moveY < 150) {
        // TODO: Add logics
      }
    });

    const showDialog = useCallback(
      (content = null) => {
        setDialogModalVisible(!dialogModalVisible);
        setDialogModalContent(content);
        setOriginalDialogContent(content);
      },
      [
        setDialogModalVisible,
        dialogModalVisible,
        setDialogModalContent,
        setOriginalDialogContent,
      ],
    );

    const setDialog = useCallback(
      async item => {
        if (item.resolve) {
          setResolved([...resolved, item.resolve]);
        }
        setDialogModalContent(item.dialog ? item : originalDialogContent);

        setDialogAnswer(item.a);
      },
      [
        setResolved,
        resolved,
        setDialogModalContent,
        originalDialogContent,
        setDialogAnswer,
      ],
    );

    return (
      <ImageBackground
        source={bg}
        style={{
          height,
          width,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {!loading && (
          <ObjectGrid
            objects={scene.objects}
            collectedItems={collectedItems}
            onPress={onPress}
            collect={collect}
            receive={receive}
            sequence={sequence}
            toggleMultiple={toggleMultiple}
            showModal={openPaper}
            onDragRelease={onDragRelease}
            showDialog={showDialog}
            resolved={resolved}
          />
        )}
        <TouchableOpacity
          style={{ position: 'absolute', top: 40, left: 20 }}
          onPress={openMainMenu}
        >
          <FontAwesome name="gear" size={20} color="#664422" />
        </TouchableOpacity>
        <Inventory
          open={inventoryOpen}
          objects={scene.objects}
          collectedItems={collectedItems}
          receive={receive}
          onPress={() => setInventoryOpen(!inventoryOpen)}
        />
        <Modal
          isVisible={mainMenuVisible}
          onBackdropPress={openMainMenu}
          style={{ alignItems: 'center' }}
        >
          <View style={{ backgroundColor: 'white', width: 300, padding: 60 }}>
            <TouchableOpacity onPress={reset}>
              <Text>Reset the game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ top: 10 }} onPress={openMainMenu}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        {paperModalContent && (
          <Paper
            paperModalVisible={paperModalVisible}
            paperModalContent={paperModalContent}
            openPaper={openPaper}
          />
        )}
        {dialogModalContent && (
          <Dialog
            dialogModalVisible={dialogModalVisible}
            dialogModalContent={dialogModalContent}
            dialogAnswer={dialogAnswer}
            resolved={resolved}
            setDialog={setDialog}
            showDialog={showDialog}
          />
        )}
      </ImageBackground>
    );
  };
  Scene.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };
  return Scene;
}

const generateAllScreens = () =>
  Object.values(SCENES).reduce(
    (obj, scene) => ({
      ...obj,
      [scene.name]: React.memo(screenGenerator(scene)),
    }),
    {},
  );

const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
export default screenGenerator;
