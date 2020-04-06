import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import { HINTS } from '../configs/hints';
import { PaperPropType } from '../proptypes/ObjectGridPropTypes';

const { width, height } = Dimensions.get('window');

export const Hint = ({ hintModalVisible, progress, showHintModal }) => {
  const hint = HINTS.find(item => item.progress === progress);
  return (
    <StyledModal isVisible={hintModalVisible}>
      <PaperBackground>
        <Text>{hint.text}</Text>
        <CloseHintButton onPress={showHintModal}>
          <Text>Close</Text>
        </CloseHintButton>
      </PaperBackground>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  align-items: center;
`;

const PaperBackground = styled(View)`
  background-color: white;
  width: ${width}px;
  height: ${height}px;
  padding: 10px;
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
