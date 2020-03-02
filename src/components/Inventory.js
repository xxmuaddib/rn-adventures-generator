import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import Draggable from 'react-native-draggable';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import { pointX, pointY } from '../helpers/StyleGenerator';
import { Element } from '../helpers/ElementGenerator';
import {
  ObjectPropTypes,
  ObjectsPropTypes,
} from '../proptypes/ObjectGridPropTypes';

const { height } = Dimensions.get('window');

export const Inventory = ({
  collectedItems,
  open,
  onPress,
  receive,
  objects,
}) => {
  const handleInvetoryItemPress = async itemId => {
    await AsyncStorage.setItem('selectedItem', itemId);
  };

  const onDragRelease = (_, g) => {
    const moveX = g.moveX / pointX;
    const moveY = g.moveY / pointY;
    const receiver = objects.itemsMap.find(
      ({ logical }) => logical.expectedValue === 'collectable1',
    );
    if (
      moveX > receiver.position.x &&
      moveX < receiver.position.x + receiver.position.width &&
      moveY > receiver.position.y &&
      moveY < receiver.position.y + receiver.position.height
    ) {
      receive('collectable1');
    }
  };

  const onDrag = item => {
    AsyncStorage.setItem('selectedItem', item.id);
  };

  if (open) {
    return (
      <View style={styles.inventoryOpen} onPress>
        <View>
          {collectedItems.map(item => (
            <Draggable
              onDragRelease={onDragRelease}
              shouldReverse
              onDrag={() => onDrag(item)}
            >
              <TouchableOpacity
                style={styles.inventoryItem}
                key={item.id}
                onPress={() => handleInvetoryItemPress(item.id)}
              >
                <Element element={item.element} />
              </TouchableOpacity>
            </Draggable>
          ))}
        </View>
        <TouchableOpacity
          onPress={() => onPress()}
          style={styles.inventoryCloseIcon}
        >
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

Inventory.propTypes = {
  collectedItems: PropTypes.arrayOf(ObjectPropTypes).isRequired,
  open: PropTypes.bool,
  onPress: PropTypes.func,
  receive: PropTypes.func,
  objects: ObjectsPropTypes.isRequired,
};

Inventory.defaultProps = {
  open: false,
  onPress: () => undefined,
  receive: () => undefined,
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
    top: height / 2 - 10,
    left: -4,
  },
  inventoryClosed: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});
