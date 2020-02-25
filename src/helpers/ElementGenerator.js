import React, { useRef } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { ELEMENTS, ELEMENT_VARIANTS } from "../constants/elements";
import LottieView from "lottie-react-native";

const Element = ({
  item: {
    element,
    imgSrc,
    text,
    name,
    width,
    height,
    selected,
    multiple,
    animation,
    autoPlay,
    loop
  },
  type = ELEMENTS.NORMAL
}) => {
  const animationRef = useRef(null);
  if (type === ELEMENTS.NORMAL) {
    switch (element) {
      case ELEMENT_VARIANTS.IMAGE: {
        return <Image source={{ uri: imgSrc }} style={{ width, height }} />;
      }
      case ELEMENT_VARIANTS.TEXT:
        return <Text>{name}</Text>;
      case ELEMENT_VARIANTS.ANIMATABLE: {
        return (
          <TouchableOpacity
            onPress={() => {
              if (!autoPlay) {
                animationRef.current.play();
              }
            }}
          >
            <LottieView
              ref={animationRef}
              style={{
                width: 100,
                height: 100,
                zIndex: 10
              }}
              source={animation}
              autoPlay={autoPlay}
              loop={false}
            />
          </TouchableOpacity>
        );
      }
      default:
        return <Text>{name}</Text>;
    }
  } else if (type === ELEMENTS.MULTIPLE) {
    const match = multiple.find(el => selected === el.id);
    if (match) {
      switch (match.element) {
        case ELEMENT_VARIANTS.IMAGE: {
          return (
            <Image source={{ uri: match.imgSrc }} style={{ width, height }} />
          );
        }
        case ELEMENT_VARIANTS.ANIMATABLE:
          return (
            <LottieView
              style={{
                width: 100,
                height: 100,
                zIndex: 10
              }}
              autoPlay
              loop
              source={animation}
            />
          );
        case ELEMENT_VARIANTS.TEXT:
          return <Text>{match.name}</Text>;
        default:
          return <Text>{match.name}</Text>;
      }
    }
  }
};

export { Element };
