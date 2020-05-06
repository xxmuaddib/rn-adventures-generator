import React, { useState, useCallback } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Image,
} from 'react-native';
import Draggable from 'react-native-draggable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { pointX, pointY } from '../helpers/StyleGenerator';
import { Element } from '../helpers/ElementGenerator';
import {
  ObjectPropTypes,
  ObjectsPropTypes,
} from '../proptypes/ObjectGridPropTypes';
import InventoryIcon from '../assets/icons/inventory.png';
import InventoryArrowDown from '../assets/icons/inventory-arrow-down.png';
import InventoryArrowUp from '../assets/icons/inventory-arrow-up.png';

const { width, height } = Dimensions.get('window');
let top = 0;
let gameHeight = height;
if (isIphoneX()) {
  gameHeight -= 55;
  top = 55 / 2;
}
const gameWidth = Math.round((gameHeight * 16) / 9);
const left = width >= gameWidth ? (width - gameWidth) / 2 : 0;

export const Inventory = ({
  collectedItems,
  open,
  onPress,
  receive,
  objects,
  resolved,
}) => {
  const [currentOffset, setCurrentOffset] = useState(0);

  const onDragRelease = async (_, g) => {
    const moveX = (g.moveX - left) / pointX;
    const moveY = (g.moveY - top) / pointY;
    const itemId = await AsyncStorage.getItem('selectedItem');
    const receiver = objects.itemsMap.find(
      ({ logical }) =>
        logical &&
        logical.expectedValue &&
        !!logical.expectedValue.length &&
        logical.expectedValue.includes(itemId),
    );

    if (
      receiver &&
      !!Object.keys(receiver).length &&
      (!receiver.logical.showOnResolved ||
        (!!receiver.logical.showOnResolved.length &&
          receiver.logical.showOnResolved.every(i => resolved.includes(i)))) &&
      moveX > receiver.position.x &&
      moveX < receiver.position.x + receiver.position.width &&
      moveY > receiver.position.y &&
      moveY < receiver.position.y + receiver.position.height
    ) {
      receive(receiver);
    }
  };

  const onDrag = itemId => {
    AsyncStorage.setItem('selectedItem', itemId);
  };

  const changePage = useCallback(
    a => {
      if (a === 'next') {
        setCurrentOffset(currentOffset + 4);
      } else {
        setCurrentOffset(currentOffset - 4);
      }
    },
    [currentOffset, setCurrentOffset],
  );

  const filteredCollectedItems = collectedItems.filter(
    el => el.logical && !!el.logical.countOfUse,
  );

  if (open) {
    return (
      <InventoryContainer>
        <InventoryCloseIcon onPress={onPress}>
          <Icon source={InventoryIcon} />
        </InventoryCloseIcon>
        {[0, 1, 2, 3].map(i => (
          <InventorySpace first={i === 0} key={`InventorySpace${i}`} />
        ))}
        {currentOffset > 0 && (
          <InventoryArrowContainer
            onPress={() => changePage('prev')}
            smallMargin={filteredCollectedItems.length > currentOffset + 4}
          >
            <InventoryArrowImage source={InventoryArrowUp} />
          </InventoryArrowContainer>
        )}
        {filteredCollectedItems.length > currentOffset + 4 && (
          <InventoryArrowContainer
            onPress={() => changePage('next')}
            both={currentOffset > 0}
          >
            <InventoryArrowImage source={InventoryArrowDown} />
          </InventoryArrowContainer>
        )}

        {filteredCollectedItems
          .filter(
            (_, index) => index >= currentOffset && index < currentOffset + 4,
          )
          .map(
            (item, index) =>
              item.logical &&
              !!item.logical.countOfUse && (
                <Draggable
                  onDragRelease={onDragRelease}
                  shouldReverse
                  y={
                    index === 0
                      ? 0.242 * gameHeight
                      : 0.242 * gameHeight +
                        (index * 0.169 * gameHeight +
                          0.03 * gameHeight * (index - 1))
                  }
                  z={140}
                  onDrag={() => onDrag(item.id)}
                >
                  <InventoryItem key={item.id}>
                    <Element
                      element={item.element}
                      position={{ ...item.position, width: 30, height: 25 }}
                      isInventoryItem
                    />
                  </InventoryItem>
                </Draggable>
              ),
          )}
      </InventoryContainer>
    );
  }
  return (
    <InventoryClosed onPress={onPress}>
      <Icon source={InventoryIcon} />
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
  height: 25%;
  margin-horizontal: 10px;
  justify-content: center;
  align-items: center;
`;

const InventoryContainer = styled(View)`
  display: flex;
  align-items: center;
  position: absolute;
  height: ${gameHeight}px;
  width: 80px;
  top: 0;
  right: 0;
  background-color: rgba(45, 51, 36, 0.5);
`;

const InventorySpace = styled(View)`
  background-color: rgba(45, 51, 36, 0.5);
  border-radius: 5px;
  margin-top: ${p => (p.first ? '38%' : '10%')};
  width: 60px;
  height: 15%;
`;

const InventoryCloseIcon = styled(TouchableOpacity)`
  top: 20px;
`;

const InventoryArrowContainer = styled(TouchableOpacity)`
  margin-top: ${p => (p.smallMargin ? '10px' : !p.both ? '10px' : 0)};
`;

const InventoryArrowImage = styled(Image)`
  width: 25px;
  height: 15px;
  resize-mode: contain;
`;

const Icon = styled(Image)`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;

const InventoryClosed = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(45, 51, 36, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-right: 15px;
  padding-top: 15px;
  width: 70px;
  height: 70px;
  border-bottom-left-radius: 60px;
`;
