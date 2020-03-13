import { StyleSheet, Dimensions } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

let { width, height } = Dimensions.get('window');
if (isIphoneX()) {
  height -= 55;
  width -= 65;
}

const pointX = width / 300;
const pointY = height / 200;

const generateStyle = position => {
  const stylesheet = StyleSheet.create({
    result: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      left: pointX * position.x,
      top: pointY * position.y,
      width: pointX * position.width,
      height: pointY * position.height,
      elevation: position.zIndex,
      zIndex: position.zIndex,
    },
  });
  return stylesheet.result;
};

export { generateStyle, pointX, pointY };
