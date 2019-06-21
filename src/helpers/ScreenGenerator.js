import _ from 'lodash';
import React from 'react';
import {
  View,
  ImageBackground,
  Image,
  AsyncStorage,
  TouchableOpacity,
  Text,
  Dimensions,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';

import { SCENES, INITIAL_SCREEN } from '../configs/scenes';
import { generateObjectGrid } from './GridGenerator';
import Inventory from '../components/Inventory';

const { width, height } = Dimensions.get('window');

function screenGenerator(scene) {
  const originalScene = _.cloneDeep(scene);
  return class ScreenGenerator extends React.Component {
    state = {
      name: scene.name,
      bg: scene.bg,
      collectedItems: [],
      inventoryOpen: false,
      loading: true,
      mainMenuVisible: false,
      resolved: [],
      paperModalVisible: false,
      scene: _.cloneDeep(scene),
    };

    componentWillMount() {
      this.getCollectedItems();
      this.setMultipleItems();
      this.setSequenceItems();
      this.setResolved();
    }

    setResolved = async () => {
      const SavedResolvedRaw = await AsyncStorage.getItem('resolved');
      if (SavedResolvedRaw) {
        const SavedResolved = JSON.parse(SavedResolvedRaw);
        this.setState({resolved: SavedResolved });
      }
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
          await AsyncStorage.removeItem('resolved');
          this.setState({ scene: _.cloneDeep(originalScene), resolved: [] });
        });
      }
      this.openMainMenu();
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
            })};
            this.setState(s => ({
              scene: {
                ...s.scene,
                itemsMap: objectsCopy.itemsMap,
              },
            }));
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
          const {
            scene: {
              objects,
            },
          } = this.state;
          const recieverResolved = objects.itemsMap.find(el => el.type === 'reciever');
          if (recieverResolved) {
            this.setState(p => ({resolved: [...p.resolved, recieverResolved.type]}));
            await AsyncStorage.setItem('resolved', JSON.stringify(this.state.resolved));
          }
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
          this.state.resolved.map(el => {
          })
          this.setState({resolved: [...this.state.resolved, objectsModified.describers[describerIndex].group]})
          await AsyncStorage.setItem('resolved', JSON.stringify(this.state.resolved));
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
      let parts = objectsModified.itemsMap.filter(object => object.group === item.group && object);
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

      parts = objectsModified.itemsMap.filter(object => object.group === item.group && object);
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
        this.setState({resolved: [...this.state.resolved, objectsModified.itemsMap[itemMatch].group]});
        await AsyncStorage.setItem('resolved', JSON.stringify(this.state.resolved));
      }
    };

    openMainMenu = () => {
      this.setState(p => ({ mainMenuVisible: !p.mainMenuVisible }));
    }

    openPaper = () => {
      this.setState({paperModalVisible: !this.state.paperModalVisible});
    }

    render() {
      const {
        bg,
        collectedItems,
        inventoryOpen,
        loading,
        mainMenuVisible,
        paperModalVisible,
        scene: {
          objects,
        },
      } = this.state;
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
            state: this.state
          })}
          <TouchableOpacity
            style={{ position: 'absolute', top: 40, left: 20 }}
            onPress={this.openMainMenu}
          >
            <FontAwesome name="gear" size={20} color="#664422" />
          </TouchableOpacity>
          <Inventory
            open={inventoryOpen}
            collectedItems={collectedItems}
            onPress={() => this.setState({ inventoryOpen: !inventoryOpen })}
          />
          <Modal
            isVisible={mainMenuVisible}
            onBackdropPress={this.openMainMenu}
            style={{ alignItems: 'center' }}
          >
            <View style={{ backgroundColor: 'white', width: 300, padding: 60 }}>
              <TouchableOpacity
                onPress={this.reset}
              >
                <Text>Reset the game</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{top: 10}}
                onPress={this.openMainMenu}
              >
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <TouchableOpacity
            style={{ position: 'absolute', bottom: 40, left: 20 }}
            onPress={this.openPaper}
          >
            <Image
              source={require('../photos/scroll.png')}
              style={{width: 20, height: 20}}
             />
          </TouchableOpacity>
           <Modal
            isVisible={paperModalVisible}
            style={{ alignItems: 'center',  }}
            >
              <ImageBackground
                source={require('../photos/old-paper.jpg')}
                style={{ backgroundColor: 'white', width, height, padding: 10,}}
                >
                  <Text style={{fontWeight: 'bold', fontStyle: 'italic', fontSize: 10, width: 400, height: 300, position: 'absolute', left: 70,}}>text txt text text text text text text txt text text text 
                    text texttext txt text text text text text
                  </Text>
                  <TouchableOpacity style={{position: 'absolute', bottom: 10, right: 50, backgroundColor: '#e2a33e', width: 70, height: 30, justifyContent: 'center', alignItems: 'center'}}
                    onPress={this.openPaper}
                  >
                    <Text style={{}}>Got it!</Text>
                  </TouchableOpacity>
              </ImageBackground>
          </Modal>
        </ImageBackground>
      );
    }
  };
}

const generateAllScreens = () => Object.values(SCENES).reduce((obj, scene) => ({ ...obj, [scene.name]: screenGenerator(scene) }), {});
const Screens = () => generateAllScreens();
const InitialScreen = INITIAL_SCREEN;

export { Screens, InitialScreen };
export default screenGenerator;
