import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import * as Font from 'expo-font';
import { pointX, pointY } from '../helpers/StyleGenerator';

import MainMenuLoader from '../assets/animations/main-menu-loader.json';

export const MainMenuModal = ({
  mainMenuVisible,
  openMainMenu,
  openAboutModal,
  reset,
  showHint,
  adIsLoading,
}) => (
  <StyledModal isVisible={mainMenuVisible} onBackdropPress={openMainMenu}>
    <MainMenuContainer>
      {adIsLoading ? (
        <StyledLottieView
          source={MainMenuLoader}
          autoPlay
          loop
          style={{ aspectRatio: 16 / 9 }}
        />
      ) : (
        <Cointainer>
          <MainMenuButton onPress={showHint}>
            <StyledText isLoaded={Font.isLoaded('acme')}>Show hint</StyledText>
          </MainMenuButton>
          <MainMenuButton onPress={reset}>
            <StyledText isLoaded={Font.isLoaded('acme')}>Reset</StyledText>
          </MainMenuButton>
          <MainMenuButton onPress={openAboutModal}>
            <StyledText isLoaded={Font.isLoaded('acme')}>About us</StyledText>
          </MainMenuButton>
          <MainMenuButton onPress={openMainMenu}>
            <StyledText isLoaded={Font.isLoaded('acme')}>Close</StyledText>
          </MainMenuButton>
        </Cointainer>
      )}
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

const Cointainer = styled(View)`
  display: flex;
  align-items: center;
`;

const StyledLottieView = styled(LottieView)`
  width: 50px;
  height: 50px;
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
  openAboutModal: PropTypes.func,
  openMainMenu: PropTypes.func,
  reset: PropTypes.func,
};

MainMenuModal.defaultProps = {
  mainMenuVisible: false,
  showHint: () => undefined,
  openAboutModal: () => undefined,
  openMainMenu: () => undefined,
  reset: () => undefined,
};
