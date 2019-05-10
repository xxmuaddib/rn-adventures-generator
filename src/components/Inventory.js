import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { generateElement } from '../helpers/ElementGenerator';

const { width, height } = Dimensions.get('window');

const Inventory = ({ collectedItems, open, onPress }) => {
  const handleInvetoryItemPress = async itemId => {
    await AsyncStorage.setItem('selectedItem', itemId);
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
