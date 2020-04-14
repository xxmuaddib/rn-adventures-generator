import React from 'react';
import { ScrollView, View, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
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

const { width, height } = Dimensions.get('window');

const gameWidth = Math.round((height * 16) / 9);
const left =
  width >= gameWidth ? (width - gameWidth) / 2 : 0;

export const Inventory = ({
  collectedItems,
  open,
  onPress,
  receive,
  objects,
}) => {
  const onDragRelease = async (_, g) => {
    const moveX = (g.moveX - left) / pointX;
    const moveY = g.moveY / pointY;
    const itemId = await AsyncStorage.getItem('selectedItem');
    const receiver = objects.itemsMap.find(
      ({ logical }) => logical && logical.expectedValue.includes(itemId),
    );
    if (
      !!Object.keys(receiver).length &&
      moveX > receiver.position.x &&
      moveX < receiver.position.x + receiver.position.width &&
      moveY > receiver.position.y &&
      moveY < receiver.position.y + receiver.position.height
    ) {
      receive(itemId);
    }
  };

  const onDrag = itemId => {
    AsyncStorage.setItem('selectedItem', itemId);
  };

  if (open) {
    return (
      <InventoryContainer>
        <InventoryOpen persistentScrollbar height={collectedItems.length * 80} />
        {collectedItems.filter(el => !!el.logical.countOfUse).map(
          (item, index) =>
            !!item.logical.countOfUse && (
              <Draggable
                onDragRelease={onDragRelease}
                shouldReverse
                y={index * 60 + 20}
                z={140}
                onDrag={() => onDrag(item.id)}
              >
                <InventoryItem
                  key={item.id}
                  index={index}
                >
                  <Element element={item.element} position={item.position} />
                </InventoryItem>
              </Draggable>
            ),
        )}
        <InventoryCloseIcon onPress={onPress}>
          <FontAwesome name="chevron-right" size={30} color="#E4CDBA" />
        </InventoryCloseIcon>
      </InventoryContainer>
    );
  }
  return (
    <InventoryClosed onPress={onPress}>
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


const InventoryItem = styled(View)`
  width: 60px;
  height: 60px;
  padding-left: 15px;
  padding-right: 5px;
  justify-content: center;
  align-items: center;
`;

const InventoryContainer = styled(View)`
  position: absolute;
  height: ${height}px;
  width: 80px;
  top: 0;
  right: 0;
  
`;

const InventoryOpen = styled(ScrollView).attrs(p => ({
  contentContainerStyle: ({
    height: p.height > height ? p.height : height,
    flexGrow: 1,
  }),
}))`
  width: 80px;
  border-left-color: #e4cdba;
  border-left-width: 5px;
  background-color: #fff1e6;
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
