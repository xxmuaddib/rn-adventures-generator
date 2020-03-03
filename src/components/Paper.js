import React from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';

import { PaperPropType } from '../proptypes/ObjectGridPropTypes';

const { width, height } = Dimensions.get('window');

export const Paper = ({ paperModalVisible, paperModalContent, openPaper }) => (
  <StyledModal isVisible={paperModalVisible}>
    <PaperBackground source={paperModalContent.bg}>
      <PaperText>{paperModalContent.text}</PaperText>
      <ClosePaperButton onPress={openPaper}>
        <Text>Got it!</Text>
      </ClosePaperButton>
    </PaperBackground>
  </StyledModal>
);

const StyledModal = styled(Modal)`
  align-items: center;
`;

const PaperBackground = styled(ImageBackground)`
  background-color: white;
  width: ${width}px;
  height: ${height}px;
  padding: 10px;
`;

const PaperText = styled(Text)`
  font-weight: bold;
  font-style: italic;
  font-size: 10px;
  width: 400px;
  height: 300px;
  position: absolute;
  left: 70px;
  top: 70px;
  z-index: 10px;
`;

const ClosePaperButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 50px;
  right: 50;
  background-color: #e2a33e;
  width: 70px;
  height: 30px;
  justify-content: center;
  align-items: center;
  z-index: 10px;
`;

Paper.propTypes = {
  paperModalContent: PaperPropType.isRequired,
  paperModalVisible: PropTypes.bool,
  openPaper: PropTypes.func,
};

Paper.defaultProps = {
  paperModalVisible: false,
  openPaper: () => undefined,
};
