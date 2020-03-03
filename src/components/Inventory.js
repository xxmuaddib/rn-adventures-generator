import React from 'react';
import { View, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import Draggable from 'react-native-draggable';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components';

import { pointX, pointY } from '../helpers/StyleGenerator';
import { Element } from '../helpers/ElementGenerator';
import {
  ObjectPropTypes,
  ObjectsPropTypes,
} from '../proptypes/ObjectGridPropTypes';
import { PlatformSpecificMeasurement } from '../helpers/PlatformSpecificUtils';

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
      // TODO: Fix hardcode
    }
  };

  const onDrag = item => {
    AsyncStorage.setItem('selectedItem', item.id);
  };

  if (open) {
    return (
      <InventoryOpen>
        <View>
          {collectedItems.map(
            item =>
              !!item.logical.countOfUse && (
                <Draggable
                  onDragRelease={onDragRelease}
                  shouldReverse
                  onDrag={() => onDrag(item)}
                >
                  <InventoryItem
                    key={item.id}
                    onPress={() => handleInvetoryItemPress(item.id)}
                  >
                    <Element element={item.element} />
                  </InventoryItem>
                </Draggable>
              ),
          )}
        </View>
        <InventoryCloseIcon onPress={() => onPress()}>
          <FontAwesome name="chevron-right" size={30} color="#E4CDBA" />
        </InventoryCloseIcon>
      </InventoryOpen>
    );
  }
  return (
    <InventoryClosed onPress={() => onPress()}>
      <FontAwesome name="briefcase" size={20} color="#664422" />
    </InventoryClosed>
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

const InventoryItem = styled(TouchableOpacity)`
  margin-top: 20px;
  width: 60px;
  height: 60px;
  padding-right: 10px;
  justify-content: center;
  align-items: center;
`;

const InventoryOpen = styled(View)`
  position: absolute;
  z-index: 999;
  elevation: 1;
  background-color: #fff1e6;
  top: 0;
  right: 0;
  width: 60px;
  border-left-color: #e4cdba;
  border-left-width: 5px;
  height: ${height}px;
  justify-content: space-between;
`;

const InventoryCloseIcon = styled(TouchableOpacity)`
  position: absolute;
  top: ${height / 2 - 10}px;
  left: -4px;
`;

const InventoryClosed = styled(TouchableOpacity)`
  position: absolute;
  top: ${PlatformSpecificMeasurement(20)};
  right: 20px;
`;
