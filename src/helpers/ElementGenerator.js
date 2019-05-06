import React from 'react';
import {
  Image,
  Text,
} from 'react-native';

const generateElement = ({
  item: {
    element,
    imgSrc,
    text,
    name,
    width,
    height,
    selected,
    multiple,
  },
  type = 'normal',
}) => {
  if (type === 'normal') {
    switch (element) {
      case 'image': {
        return <Image source={{ uri: imgSrc }} style={{ width, height }} />;
      }
      case 'text':
        return <Text>{name}</Text>;
      default:
        return <Text>{name}</Text>;
    }
  } else if (type === 'multiple') {
    const match = multiple.find(el => selected === el.id);
    if (match) {
      switch (match.element) {
        case 'image': {
          return <Image source={{ uri: match.imgSrc }} style={{ width, height }} />;
        }
        case 'text':
          return <Text>{match.name}</Text>;
        default:
          return <Text>{match.name}</Text>;
      }
    }
  }
};

export { generateElement };
