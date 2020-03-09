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
}) => {
  switch (type) {
    case ELEMENT_VARIANTS.IMAGE:
      return (
        <StyledImage
          source={image.src}
          resizeMode="stretch"
          position={position}
        />
      );
    case ELEMENT_VARIANTS.BLANK_AREA:
      return <StyledBlankArea />;
    case ELEMENT_VARIANTS.TEXT:
      return <Text>{name}</Text>;
    case ELEMENT_VARIANTS.ANIMATABLE:
      return (
        <View>
          <StyledLottieView
            ref={animationRef || null}
            source={animation.src}
            autoPlay={animation.autoPlay}
            loop={animation.loop}
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
};

Element.defaultProps = {
  animationRef: null,
};

const StyledBlankArea = styled(View)`
  height: 100%;
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: ${p => p.position.width * pointX}px;
  height: ${p => p.position.height * pointY}px;
`;

const StyledLottieView = styled(LottieView)`
  width: 100px;
  height: 100px;
`;

export { Element };
