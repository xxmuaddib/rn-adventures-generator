import React, { useRef } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { generateStyle } from './StyleGenerator';
import {
  ObjectPropTypes,
  ObjectsPropTypes,
} from '../proptypes/ObjectGridPropTypes';
import { Element } from './ElementGenerator';
import { ITEMS } from '../constants/items';

const { width, height } = Dimensions.get('window');

const ObjectGrid = ({
  objects,
  collectedItems,
  onRoutePress,
  collect,
  toggleMultiple,
  receive,
  handleSequence,
  showModal,
  onDragRelease,
  showDialog,
  resolved,
}) => {
  const animationRef = useRef(null);
  return (
    <ObjectGridContainer>
      {objects.navMap.map(item => {
        const isResolved =
          !item ||
          !item.showOnResolved ||
          !item.showOnResolved.length ||
          item.showOnResolved.some(id => resolved.includes(id));
        const hideResolved =
          !item || !item.hideOnResolved || !item.hideOnResolved.length
            ? false
            : item.hideOnResolved.every(id => resolved.includes(id));
        if (isResolved && !hideResolved) {
          return (
            <TouchableOpacity
              key={item.route}
              style={generateStyle(item)}
              onPress={() => onRoutePress(item.route)}
            >
              >
              <Element item={item} />
            </TouchableOpacity>
          );
        }
        return null;
      })}
      {objects.itemsMap.map(
        ({ type, id, element, position, logical, group }) => {
          const isResolved =
            !logical ||
            !logical.showOnResolved ||
            !logical.showOnResolved.length ||
            logical.showOnResolved.some(item => resolved.includes(item));
          const hideResolved =
            !logical ||
            !logical.hideOnResolved ||
            !logical.hideOnResolved.length
              ? false
              : logical.hideOnResolved.every(item => resolved.includes(item));
          const collectableShouldHide =
            type === ITEMS.COLLECTABLE &&
            !!collectedItems.find(collectedItem => collectedItem.id === id);
          const isDeactive =
            !logical ||
            !logical.deactivateOnResolved ||
            !logical.deactivateOnResolved.length
              ? false
              : logical.deactivateOnResolved.every(item =>
                  resolved.includes(item),
                );
          const isActive =
            !logical ||
            !logical.activateOnResolved ||
            !logical.activateOnResolved.length
              ? true
              : logical.activateOnResolved.every(item =>
                  resolved.includes(item),
                );
          return (
            <>
              <View key={id} style={generateStyle(position)}>
                {type !== ITEMS.DRAGGABLE &&
                  isResolved &&
                  !hideResolved &&
                  !collectableShouldHide && (
                    <TouchableOpacity
                      activeOpacity={isDeactive ? 1 : 0.9}
                      disabled={isDeactive}
                      onPress={() => {
                        switch (type) {
                          case ITEMS.SEQUENCE:
                            return handleSequence(group, id);
                          case ITEMS.RECEIVER:
                            return receive(logical.expectedValue);
                          case ITEMS.MULTIPLE:
                            return toggleMultiple(logical);
                          case ITEMS.PAPER:
                            return showModal(logical);
                          case ITEMS.DIALOG:
                            return showDialog(logical.dialogProperties);
                          case ITEMS.COLLECTABLE:
                            return collect(
                              objects.itemsMap.find(item => item.id === id),
                            );
                          default:
                            return () => undefined;
                        }
                      }}
                    >
                      <Element
                        element={element}
                        position={position}
                        animationRef={animationRef}
                      />
                    </TouchableOpacity>
                  )}
              </View>
              {type === ITEMS.DRAGGABLE && isResolved && !hideResolved && (
                <Draggable
                  style={generateStyle(position)}
                  x={position.x}
                  y={position.y}
                  z={position.zIndex}
                  disabled={isDeactive || !isActive}
                  onDragRelease={(evt, g) => onDragRelease(evt, g, id)}
                >
                  <Element element={element} position={position} />
                </Draggable>
              )}
            </>
          );
        },
      )}
    </ObjectGridContainer>
  );
};

ObjectGrid.propTypes = {
  objects: ObjectsPropTypes.isRequired,
  collectedItems: PropTypes.arrayOf(ObjectPropTypes).isRequired,
  onRoutePress: PropTypes.func,
  collect: PropTypes.func,
  toggleMultiple: PropTypes.func,
  receive: PropTypes.func,
  handleSequence: PropTypes.func,
  showModal: PropTypes.func,
  onDragRelease: PropTypes.func,
  showDialog: PropTypes.func,
  resolved: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ObjectGrid.defaultProps = {
  onRoutePress: () => undefined,
  collect: () => undefined,
  toggleMultiple: () => undefined,
  receive: () => undefined,
  handleSequence: () => undefined,
  showModal: () => undefined,
  onDragRelease: () => undefined,
  showDialog: () => undefined,
};

const ObjectGridContainer = styled(View)`
  width: ${width}px;
  height: ${height}px;
`;

export { ObjectGrid };
