import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesome } from '@expo/vector-icons';

import { generateElement } from '../helpers/ElementGenerator';

const { width, height } = Dimensions.get('window');

const Inventory = ({ collectedItems, open, onPress, modalIsOpen, changeModalVisibility, getCollectedItems }) => {
  const handleInvetoryItemPress = async itemId => {
    await AsyncStorage.setItem('selectedItem', itemId);
  };
  const dropItemFromInventory = async () => {
    const itemId = await AsyncStorage.getItem('selectedItem');
    if (itemId) {
      const indexRow = collectedItems.find(el => el.id === itemId)
        if (indexRow) {
          const index = collectedItems.indexOf(indexRow);
          if (index > -1) {
            collectedItems.splice(index, 1);
            await AsyncStorage.setItem('inventory', JSON.stringify(collectedItems));
            await getCollectedItems();
          }
        }
    }      
  };
  if (open) {
    return (
      <View style={styles.inventoryOpen} onPress>
        <View>
          {collectedItems.map(item => (
            <TouchableOpacity style={styles.inventoryItem} key={item.id} onPress={() => handleInvetoryItemPress(item.id)}>
              {generateElement({ item })}
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onPress()} style={styles.inventoryCloseIcon}>
          <FontAwesome name="chevron-right" size={30} color="#E4CDBA" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeModalVisibility()}>
          <Text>
            Drop
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={modalIsOpen}
          onBackdropPress={changeModalVisibility}
          style={{justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={{width: 400, height: height/3, backgroundColor: 'white'}}>
            <Text>Are you sure?</Text>
            <View style={{position: 'absolute', bottom: 0}}>
              <TouchableOpacity onPress={() => {
                changeModalVisibility();
                dropItemFromInventory();
                }}>
                <Text style>
                  Drop
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => changeModalVisibility()}>
                <Text>
                  Cancel
                </Text>              
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.inventoryClosed} onPress={() => onPress()}>
      <FontAwesome name="briefcase" size={20} color="#664422" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inventoryOpen: {
    position: 'absolute',
    zIndex: 999,
    elevation: 1,
    backgroundColor: '#FFF1E6',
    top: 0,
    right: 0,
    width: 60,
    borderLeftColor: '#E4CDBA',
    borderLeftWidth: 5,
    height,
    justifyContent: 'space-between',
  },
  inventoryItem: {
    marginTop: 20,
    width: 60,
    height: 60,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inventoryCloseIcon: {
    position: 'absolute',
    top: (height / 2 - 10),
    left: -4,
  },
  inventoryClosed: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});

export default Inventory;
