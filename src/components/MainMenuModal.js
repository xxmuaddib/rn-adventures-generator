import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-native-modal';

export const MainMenuModal = ({ mainMenuVisible, openMainMenu, reset }) => (
  <StyledModal isVisible={mainMenuVisible} onBackdropPress={openMainMenu}>
    <MainMenuContainer>
      <TouchableOpacity onPress={reset}>
        <Text>Reset the game</Text>
      </TouchableOpacity>
      <CloseButton onPress={openMainMenu}>
        <Text>Close</Text>
      </CloseButton>
    </MainMenuContainer>
  </StyledModal>
);

const StyledModal = styled(Modal)`
  align-items: center;
`;

const MainMenuContainer = styled(View)`
  background-color: white;
  width: 300px;
  padding: 60px;
`;

const CloseButton = styled(TouchableOpacity)`
  top: 10px;
`;

MainMenuModal.propTypes = {
  mainMenuVisible: PropTypes.bool,
  openMainMenu: PropTypes.func,
  reset: PropTypes.func,
};

MainMenuModal.defaultProps = {
  mainMenuVisible: false,
  openMainMenu: () => undefined,
  reset: () => undefined,
};
