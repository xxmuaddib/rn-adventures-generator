import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const pointX = width / 300;
const pointY = height / 200;

const generateStyle = (style, dim) => {
  const stylesheet = StyleSheet.create({
    result: {
      ...style,
      left: pointX * dim.x,
      top: pointY * dim.y,
      width: dim.width * pointX,
      height: dim.height * pointY,
    },
  });
  return stylesheet.result;
};

export { generateStyle };
