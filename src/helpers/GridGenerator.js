import React, { useRef } from 'react';
import {
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Audio } from 'expo-av';
import Draggable from 'react-native-draggable';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { generateStyle, pointX, pointY } from './StyleGenerator';
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
  handleSlot,
  receive,
  handleSequence,
  handleDecorative,
  showModal,
  onDragRelease,
  showDialog,
  resolved,
}) => {
  const playAudio = async sound => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(sound);
      await soundObject.playAsync(sound);
      await soundObject.setStatusAsync({ volume: 1 });
    } catch (e) {
      console.error(e);
    }
  };
  const animationRef = useRef(null);
  const itemsMapCopy = [...objects.itemsMap];
  itemsMapCopy.sort((a, b) => a.position.zIndex - b.position.zIndex);
  return (
    <ObjectGridContainer>
      {itemsMapCopy.map(
        ({ type, id, element, position, logical, group, sound, route }) => {
          const isResolved =
            !logical ||
            !logical.showOnResolved ||
            !logical.showOnResolved.length ||
            logical.showOnResolved.every(item => resolved.includes(item));
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
              {type !== ITEMS.DRAGGABLE &&
                type !== ITEMS.NAV &&
                type !== ITEMS.BLANK &&
                type !== ITEMS.RECEIVER &&
                isResolved &&
                !hideResolved &&
                !collectableShouldHide && (
                  <View key={id} style={generateStyle(position)}>
                    <StyledTouchableOpacity
                      activeOpacity={isDeactive ? 1 : 0.9}
                      disabled={
                        isDeactive ||
                        !isResolved ||
                        hideResolved ||
                        collectableShouldHide
                      }
                      onPress={() => {
                        if (sound) {
                          playAudio(sound);
                        }
                        switch (type) {
                          case ITEMS.SEQUENCE:
                            return handleSequence(
                              group,
                              id,
                              logical && logical.setProgressOnResolved,
                            );
                          case ITEMS.SLOT:
                            return handleSlot(
                              group,
                              id,
                              logical && logical.setProgressOnResolved,
                            );
                          case ITEMS.PAPER:
                            return showModal(
                              logical,
                              logical && logical.setProgressOnResolved,
                            );
                          case ITEMS.DIALOG:
                            return showDialog(
                              logical.dialogProperties,
                              logical && logical.setProgressOnResolved,
                            );
                          case ITEMS.COLLECTABLE:
                            return collect(
                              objects.itemsMap.find(item => item.id === id),
                              logical && logical.setProgressOnResolved,
                            );
                          case ITEMS.DECORATIVE:
                            return handleDecorative(
                              id,
                              logical && logical.setProgressOnResolved,
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
                    </StyledTouchableOpacity>
                  </View>
                )}
              {(type === ITEMS.NAV || type === ITEMS.BLANK) &&
                isResolved &&
                !hideResolved && (
                  <View style={generateStyle(position)}>
                    <StyledTouchableWithoutFeedback
                      onPress={() => {
                        if (sound) {
                          playAudio(sound);
                        }
                        if (type === ITEMS.NAV) {
                          onRoutePress(
                            route,
                            logical && logical.setProgressOnResolved,
                          );
                        }
                      }}
                    >
                      <StyledView>
                        <Element element={element} position={position} />
                      </StyledView>
                    </StyledTouchableWithoutFeedback>
                  </View>
                )}
              {type === ITEMS.RECEIVER && isResolved && !hideResolved && (
                <View style={generateStyle(position)}>
                  <StyledView>
                    <Element element={element} position={position} />
                  </StyledView>
                </View>
              )}
              {type === ITEMS.DRAGGABLE && isResolved && !hideResolved && (
                <Draggable
                  style={generateStyle(position)}
                  x={position.x * pointX}
                  y={position.y * pointY}
                  z={position.zIndex}
                  disabled={isDeactive || !isActive}
                  onDragRelease={(evt, g) => {
                    if (sound) {
                      playAudio(sound);
                    }
                    onDragRelease(
                      evt,
                      g,
                      id,
                      group,
                      logical && logical.setProgressOnResolved,
                    );
                  }}
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
  handleSlot: PropTypes.func,
  receive: PropTypes.func,
  handleSequence: PropTypes.func,
  showModal: PropTypes.func,
  onDragRelease: PropTypes.func,
  handleDecorative: PropTypes.func,
  showDialog: PropTypes.func,
  resolved: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ObjectGrid.defaultProps = {
  onRoutePress: () => undefined,
  collect: () => undefined,
  handleSlot: () => undefined,
  receive: () => undefined,
  handleSequence: () => undefined,
  showModal: () => undefined,
  onDragRelease: () => undefined,
  handleDecorative: () => undefined,
  showDialog: () => undefined,
};

const ObjectGridContainer = styled(View)`
  width: ${width}px;
  height: ${height}px;
`;

const StyledTouchableOpacity = styled(TouchableOpacity)`
  width: 100%;
  height: 100%;
`;

const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback)`
  width: 100%;
  height: 100%;
`;

const StyledView = styled(View)`
  width: 100%;
  height: 100%;
`;

export { ObjectGrid };
