import _ from 'lodash';
import React from 'react';
import {
  ImageBackground,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { generateObjectGrid } from './GridGenerator';
import Inventory from '../components/Inventory';

const { width, height } = Dimensions.get('window');

function screenGenerator(scene) {
  const originalScene = _.cloneDeep(scene);
  return class ScreenGenerator extends React.Component {
    constructor(props) {
      super(props);
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
    }

    collect = async item => {
      const { collectedItems } = this.state;
      await AsyncStorage.setItem('inventory', JSON.stringify([...collectedItems, item]));
      this.setState({ collectedItems: [...collectedItems, item] });
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
    }

    render() {
      const {
        bg,
        collectedItems,
        inventoryOpen,
        loading,
      } = this.state;
      const { objects } = this.state.scene;
      return (
        <ImageBackground source={{ uri: bg }}
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
            toggleMultiple: this.toggleMultiple,
          })}
          <Inventory open={inventoryOpen} collectedItems={collectedItems} onPress={() => this.setState({inventoryOpen: !inventoryOpen })} />
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
