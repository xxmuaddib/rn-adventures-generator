import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from 'react-native';

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
            <TouchableOpacity style={styles.inventoryItem} onPress={() => handleInvetoryItemPress(item.id)}>
              <Text style={{ color: 'black' }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => onPress()}>
          <Text style={{ color: 'black' }}>C</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.inventoryClosed} onPress={() => onPress()}>
      <Text style={{ color: 'yellow' }}>O</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inventoryOpen: {
    position: 'absolute',
    zIndex: 999,
    elevation: 1,
    backgroundColor: 'white',
    top: 0,
    right: 0,
    width: 60,
    height,
    justifyContent: 'space-between',
  },
  inventoryItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inventoryClosed: {
    position: 'absolute',
    top: height / 2 - 15 - 30,
    right: 30,
  },
});

export default Inventory;
