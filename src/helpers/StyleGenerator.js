import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const pointX = width / 300;
const pointY = height / 200;

const generateStyle = (style, position) => {
  const stylesheet = StyleSheet.create({
    result: {
      ...style,
      left: pointX * position.x,
      top: pointY * position.y,
      width: pointX * position.width,
      height: pointY * position.height,
    },
  });
  return stylesheet.result;
};

export { generateStyle, pointX, pointY };
