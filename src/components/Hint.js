import React from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { HINTS } from '../configs/hints';
import { PaperPropType } from '../proptypes/ObjectGridPropTypes';
import HintPaper from '../assets/images/hint-paper.png';

const { width, height } = Dimensions.get('window');

let top = 0;
let gameHeight = height;
if (isIphoneX()) {
  gameHeight -= 55;
  top = 55 / 2;
}
const gameWidth = Math.round((gameHeight * 16) / 9);
const left = width >= gameWidth ? (width - gameWidth) / 2 : 0;

export const Hint = ({ hintModalVisible, progress, showHintModal }) => {
  const hint = HINTS.find(item => item.progress === progress);
  return (
    <StyledModal isVisible={hintModalVisible} onBackdropPress={showHintModal}>
      <PaperBackground source={HintPaper}>
        <Text>{hint.text}</Text>
        <HintImage source={hint.image} resizeMode={'contain'} />
      </PaperBackground>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  flex: 1;
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  justify-content: center;
  margin-top: ${top + gameHeight * 0.05}px;
  margin-left: ${left + gameWidth * 0.15}px;
  width: ${gameWidth * 0.7}px;
  height: ${gameHeight * 0.7}px;
`;

const PaperBackground = styled(ImageBackground)`
  width: 100%;
  height: 87%;
  background-color: rgba(0, 0, 0, 0);
  padding: 20px;
`;

const HintImage = styled(Image)`
  width: 98%;
  height: 88%;
`;

const CloseHintButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background-color: #e2a33e;
  width: 70px;
  height: 30px;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

Hint.propTypes = {
  hintModalVisible: PaperPropType.isRequired,
  progress: PropTypes.string,
  showHintModal: PropTypes.func,
};

Hint.defaultProps = {
  progress: '',
  showHintModal: () => undefined,
};
