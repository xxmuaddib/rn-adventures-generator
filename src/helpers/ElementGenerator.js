import React, { useRef } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import styled from 'styled-components';

import { ELEMENT_VARIANTS } from '../constants/elements';
import { ElementPropType } from '../proptypes/ElementPropTypes';

const Element = ({ element: { type, image, name, animation } }) => {
  const animationRef = useRef(null);
  switch (type) {
    case ELEMENT_VARIANTS.IMAGE: {
      return <StyledImage source={image.src} resizeMode="contain" />;
    }
    case ELEMENT_VARIANTS.TEXT:
      return <Text>{name}</Text>;
    case ELEMENT_VARIANTS.ANIMATABLE: {
      return (
        <TouchableOpacity
          onPress={() => {
            if (!animation.autoPlay) {
              animationRef.current.play();
            }
          }}
        >
          <StyledLottieView
            ref={animationRef}
            source={animation.src}
            autoPlay={animation.autoPlay}
            loop={animation.loop}
          />
        </TouchableOpacity>
      );
    }
    default:
      return <Text>{name}</Text>;
  }
};

Element.propTypes = {
  element: ElementPropType.isRequired,
};

const StyledImage = styled(Image)`
  height: 100%;
`;

const StyledLottieView = styled(LottieView)`
  width: 100px;
  height: 100px;
`;

export { Element };
