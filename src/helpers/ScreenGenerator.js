import _ from 'lodash';
import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { generateObjectGrid } from './GridGenerator';
import Inventory from '../components/Inventory';

const { width, height } = Dimensions.get('window');

function screenGenerator(scene) {
  const originalScene = _.cloneDeep(scene);
  return class ScreenGenerator extends React.Component {
    constructor(props) {
      super();
      this.state = {
        name: scene.name,
        bg: scene.bg,
        collectedItems: [],
        inventoryOpen: false,
        loading: true,
        scene: _.cloneDeep(scene),
      };

      this.getCollectedItems();
      this.setMultipleItems();
      this.setSequenceItems();
    }

    getCollectedItems = async () => {
      const inventoryRaw = await AsyncStorage.getItem('inventory');
      if (inventoryRaw) {
        const inventory = JSON.parse(inventoryRaw);
        this.setState({ collectedItems: inventory, loading: false });
      } else {
        this.setState({ collectedItems: [], loading: false });
      }
    }

    reset = async () => {
      const {
        scene: {
          objects,
        },
      } = this.state;

      await AsyncStorage.removeItem('inventory');
      this.setState({ collectedItems: [] });
      if (objects.itemsMap) {
        const groups = objects.itemsMap.filter(el => el.type === 'multiple');
        const unique = [...new Set(groups.map(item => item.group))];
        unique.forEach(async g => {
          await AsyncStorage.removeItem(g);
          this.setState({ scene: _.cloneDeep(originalScene) });
        });
      }
    }

    setSequenceItems = async () => {
      const {
        scene: {
          objects,
        },
      } = this.state;

      const objectsCopy = { ...objects };

      if (objectsCopy.describers) {
        objectsCopy.describers.forEach(async d => {
          const describerRaw = await AsyncStorage.getItem(d.group);
          const describer = JSON.parse(describerRaw);
          if (describer) {
            const i = objectsCopy.describers.findIndex(el => el.group === describer.group);
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
    }

    setMultipleItems = async () => {
      const {
        scene: {
          objects,
        },
      } = this.state;

      const objectsCopy = { ...objects };

      if (objectsCopy.itemsMap) {
        const groups = objectsCopy.itemsMap.filter(el => el.type === 'multiple');
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
            this.setState(s => ({
              scene: {
                ...s.scene,
                itemsMap: objectsCopy.itemsMap,
              },
            }));
          }
        });
      }
    }

    onPress = route => {
      const { navigation } = this.props;
      navigation.navigate(route);
    };

    collect = async item => {
      const { collectedItems } = this.state;
      await AsyncStorage.setItem('inventory', JSON.stringify([...collectedItems, item]));
      this.setState({ collectedItems: [...collectedItems, item] });
    };

    recieve = async expectedValue => {
      const selectedItemId = await AsyncStorage.getItem('selectedItem');
      let alertMsg = '';
      if (expectedValue === selectedItemId) {
        try {
          await AsyncStorage.removeItem('selectedItem');
          /* const successComboRoutes = await AsyncStorage.getItem('successComboRoutes');
          const changedObj = {
            ...successComboRoutes,
            [expectedValue]: true,
          };

          console.log('changedObj', changedObj)
          await AsyncStorage.setItem('successComboRoutes', changedObj);
          console.log('changed', AsyncStorage.getItem('successComboRoutes')); */
          alertMsg = 'Success!';
        } catch (e) {
          console.error('Something went wrong', e.message);
        }
      } else {
        alertMsg = 'Fail!';
      }
      this.generateAlertMsg(alertMsg);
    }

    sequence = async item => {
      const {
        scene: {
          objects,
        },
      } = this.state;

      const objectsModified = { ...objects };
      const storageDescriber = await AsyncStorage.getItem(item.group);

      let describer;
      if (storageDescriber) {
        describer = JSON.parse(storageDescriber);
      }

      const describerIndex = objectsModified.describers.findIndex(elem => elem.group === item.group && elem);
      if (describerIndex > -1) {
        describer = objectsModified.describers[describerIndex];
      }
      const { expectedValue, currentValue } = describer;
      if (expectedValue[currentValue.length] === item.name) {
        currentValue.push(item.name);
        objectsModified.describers[describerIndex] = { ...describer, currentValue };
        if (expectedValue.length === currentValue.length) {
          this.generateAlertMsg('Success!!!!');
          return;
        }
      } else {
        this.generateAlertMsg('Fail!!!!');
        objectsModified.describers[describerIndex] = { ...describer, currentValue: [] };
      }
      await AsyncStorage.setItem(item.group, JSON.stringify(objectsModified.describers[describerIndex]));
      this.setState({ scene: { ...scene, objects: objectsModified } });
    }

    generateAlertMsg = message => {
      Alert.alert(
        message,
        /* 'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false}, */
      );
    }

    toggleMultiple = async item => {
      const {
        scene: {
          objects,
        },
      } = this.state;

      const objectsModified = { ...objects };

      const match = item.multiple.findIndex(el => el.id === item.selected);
      let newSelected;
      if (match + 1 < item.multiple.length) {
        newSelected = item.multiple[match + 1];
      } else {
        newSelected = item.multiple[0];
      }

      const group = await AsyncStorage.getItem(item.group);
      const parts = objectsModified.itemsMap.filter(object => object.group === item.group && object);
      const groups = parts.map(el => {
        if (el.selected === el.correct) return true;
        return false;
      });

      const groupCorrect = groups.every(el => el === true);

      if (groupCorrect) return;

      let groupParsed = [];
      if (group) {
        groupParsed = JSON.parse(group);
      }

      const groupMatch = groupParsed.findIndex(elem => elem.id === item.id && elem);

      if (groupMatch > -1) {
        groupParsed[groupMatch] = { ...item, selected: newSelected.id };
      } else {
        groupParsed.push({ ...item, selected: newSelected.id });
      }

      await AsyncStorage.setItem(item.group, JSON.stringify(groupParsed));

      const itemMatch = objectsModified.itemsMap.findIndex(elem => elem.id === item.id && elem);

      if (itemMatch > -1) {
        objectsModified.itemsMap[itemMatch] = { ...item, selected: newSelected.id };
      }

      this.setState({ scene: { ...scene, objects: objectsModified } });
    };

    render() {
      const {
        bg,
        collectedItems,
        inventoryOpen,
        loading,
      } = this.state;
      const { objects } = this.state.scene;

      return (
        <ImageBackground
          source={{ uri: bg }}
          style={{
            height,
            width,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!loading && generateObjectGrid({
            objects,
            collectedItems,
            onPress: this.onPress,
            collect: this.collect,
            recieve: this.recieve,
            sequence: this.sequence,
            toggleMultiple: this.toggleMultiple,
          })}
          <Inventory
            open={inventoryOpen}
            collectedItems={collectedItems}
            onPress={() => this.setState({ inventoryOpen: !inventoryOpen })}
          />
          <TouchableOpacity
            style={{ position: 'absolute', top: 80, right: 30 }}
            onPress={this.reset}
          >
            <Text style={{ color: 'purple' }}>C</Text>
          </TouchableOpacity>
        </ImageBackground>
      );
    }
  };
}

const generateAllScreens = () => Object.values(SCENES).reduce((obj, scene) => ({ ...obj, [scene.name]: screenGenerator(scene) }), {});
const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
