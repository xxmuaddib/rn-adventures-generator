import React, { useRef } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

import { ELEMENT_VARIANTS } from '../constants/elements';
import { ElementPropType } from '../proptypes/ElementPropTypes';

const Element = ({ element: { type, image, name, animation } }) => {
  const animationRef = useRef(null);
  switch (type) {
    case ELEMENT_VARIANTS.IMAGE: {
      return (
        <Image
          source={image.src}
          style={{ height: '100%' }}
          resizeMode="contain"
        />
      );
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
          <LottieView
            ref={animationRef}
            style={{
              width: 100,
              height: 100,
              zIndex: 10,
            }}
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

export { Element };
