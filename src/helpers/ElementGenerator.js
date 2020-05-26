import React from 'react';
import { Image, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pointX, pointY } from './StyleGenerator';

import { ELEMENT_VARIANTS } from '../constants/elements';
import { ElementPropType } from '../proptypes/ElementPropTypes';
import { PositionPropType } from '../proptypes/ObjectGridPropTypes';

const Element = ({
  element: { type, image, name, animation },
  position,
  animationRef,
  isInventoryItem,
}) => {
  switch (type) {
    case ELEMENT_VARIANTS.IMAGE:
      return (
        <StyledImage
          source={
            isInventoryItem ? image.inventoryImage || image.src : image.src
          }
          resizeMode={isInventoryItem ? 'contain' : 'stretch'}
          imagePosition={position}
        />
      );
    case ELEMENT_VARIANTS.TRIGGER:
      return <StyledTrigger />;
    case ELEMENT_VARIANTS.TEXT:
      return <Text>{name}</Text>;
    case ELEMENT_VARIANTS.ANIMATABLE:
      if (isInventoryItem) {
        return (
          <StyledImage
            source={animation.inventoryImage}
            resizeMode="contain"
            imagePosition={position}
          />
        );
      }
      return (
        <View>
          <StyledLottieView
            ref={animationRef || null}
            source={animation.src}
            autoPlay={animation.autoPlay}
            loop={animation.loop}
            imagePosition={position}
          />
        </View>
      );
    default:
      return <Text>{name}</Text>;
  }
};

Element.propTypes = {
  element: ElementPropType.isRequired,
  position: PositionPropType.isRequired,
  animationRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  isInventoryItem: PropTypes.bool,
};

Element.defaultProps = {
  animationRef: null,
  isInventoryItem: false,
};

const StyledTrigger = styled(View)`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled(Image)`
  width: ${p => p.imagePosition.width * pointX}px;
  height: ${p => p.imagePosition.height * pointY}px;
`;

const StyledLottieView = styled(LottieView)`
  resize-mode: cover;
  width: ${p => p.imagePosition.width * pointX}px;
  height: ${p => p.imagePosition.height * pointY}px;
`;

export { Element };
