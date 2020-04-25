import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import * as Font from 'expo-font';

export const MainMenuModal = ({
  mainMenuVisible,
  openMainMenu,
  reset,
  showHint,
}) => (
  <StyledModal isVisible={mainMenuVisible} onBackdropPress={openMainMenu}>
    <MainMenuContainer>
      <MainMenuButton onPress={showHint}>
        <StyledText isLoaded={Font.isLoaded('acme')}>Show hint</StyledText>
      </MainMenuButton>
      <MainMenuButton onPress={reset}>
        <StyledText isLoaded={Font.isLoaded('acme')}>Reset the game</StyledText>
      </MainMenuButton>
      <MainMenuButton onPress={openMainMenu}>
        <StyledText isLoaded={Font.isLoaded('acme')}>Close</StyledText>
      </MainMenuButton>
    </MainMenuContainer>
  </StyledModal>
);

const StyledModal = styled(Modal).attrs({
  backdropOpacity: 0.2,
})`
  align-items: center;
`;

const MainMenuContainer = styled(View)`
  background-color: rgb(45, 51, 36);
  width: 300px;
  padding: 40px 60px;
  display: flex;
  align-items: center;
`;

const StyledText = styled(Text)`
  font-family: 'acme';
  color: white;
`;

const MainMenuButton = styled(TouchableOpacity)`
  margin-top: 10px;
`;

MainMenuModal.propTypes = {
  mainMenuVisible: PropTypes.bool,
  showHint: PropTypes.func,
  openMainMenu: PropTypes.func,
  reset: PropTypes.func,
};

MainMenuModal.defaultProps = {
  mainMenuVisible: false,
  showHint: () => undefined,
  openMainMenu: () => undefined,
  reset: () => undefined,
};
