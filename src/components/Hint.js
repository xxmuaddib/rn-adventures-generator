import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import { PaperPropType } from '../proptypes/ObjectGridPropTypes';

export const Hint = ({ hintModalVisible, progress, hints, showHintModal }) => {
  const hint = hints.find(item => item.name === progress);
  return (
    <StyledModal isVisible={hintModalVisible}>
      <Text>Test</Text>
      <CloseHintButton onPress={showHintModal}>
        <Text>{hint.text}</Text>
      </CloseHintButton>
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  align-items: center;
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
  hints: PropTypes.arrayOf(PropTypes.any),
  showHintModal: PropTypes.func,
};

Hint.defaultProps = {
  progress: '',
  hints: [],
  showHintModal: () => undefined,
};
