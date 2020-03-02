import React from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import Draggable from 'react-native-draggable';
import PropTypes from 'prop-types';

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
  sequence,
  showModal,
  onDragRelease,
  showDialog,
  resolved,
}) => (
  <View style={{ width, height }}>
    {objects.navMap.map(item => {
      const isResolved =
        !item.showOnResolved ||
        !item.showOnResolved.length ||
        item.showOnResolved.some(id => resolved.includes(id));
      const hideResolved =
        !item.hideOnResolved || !item.hideOnResolved.length
          ? false
          : item.hideOnResolved.every(id => resolved.includes(id));
      if (isResolved && !hideResolved) {
        return (
          <TouchableOpacity
            key={item.route}
            style={generateStyle(styles.itemStyle, item)}
            onPress={() => onRoutePress(item.route)}
          >
            <Element item={item} />
          </TouchableOpacity>
        );
      }
      return null;
    })}
    {objects.itemsMap.map(({ type, id, element, position, logical }) => {
      const isResolved =
        !logical.showOnResolved ||
        !logical.showOnResolved.length ||
        logical.showOnResolved.some(item => resolved.includes(item));
      const hideResolved =
        !logical.hideOnResolved || !logical.hideOnResolved.length
          ? false
          : logical.hideOnResolved.every(item => resolved.includes(item));
      const collectableShouldHide =
        type === ITEMS.COLLECTABLE &&
        !!collectedItems.find(collectedItem => collectedItem.id === id);

      return (
        <View key={id}>
          {isResolved && !hideResolved && !collectableShouldHide && (
            <TouchableOpacity
              style={generateStyle(styles.itemStyle, position)}
              activeOpacity={0.9}
              onPress={() => {
                switch (type) {
                  case ITEMS.SEQUENCE:
                    return sequence(logical);
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
                    return onPress(logical);
                }
              }}
            >
              <Element element={element} />
            </TouchableOpacity>
          )}
          {type === ITEMS.DRAGGABLE && isResolved && !hideResolved && (
            <Draggable
              x={position.x}
              y={position.y}
              onDragRelease={onDragRelease}
            >
              <Element element={element} />
            </Draggable>
          )}
        </View>
      );
    })}
  </View>
);

ObjectGrid.propTypes = {
  objects: ObjectsPropTypes.isRequired,
  collectedItems: PropTypes.arrayOf(ObjectPropTypes).isRequired,
  onRoutePress: PropTypes.func,
  collect: PropTypes.func,
  toggleMultiple: PropTypes.func,
  receive: PropTypes.func,
  sequence: PropTypes.func,
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
  sequence: () => undefined,
  showModal: () => undefined,
  onDragRelease: () => undefined,
  showDialog: () => undefined,
};

const styles = StyleSheet.create({
  itemStyle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { ObjectGrid };
