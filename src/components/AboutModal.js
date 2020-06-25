import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'react-native-modal';

import * as Font from 'expo-font';

export const AboutModal = ({ aboutModalVisible, openAboutModal }) => (
  <StyledModal isVisible={aboutModalVisible} onBackdropPress={openAboutModal}>
    <MainMenuContainer>
      <Title>
        <StyledText isLoaded={Font.isLoaded('acme')}>
          Rise Of The Virus v. 1.1.0
        </StyledText>
      </Title>
      <Container>
        <View>
          <Body>
            <StyledText isLoaded={Font.isLoaded('acme')}>
              Game was created by:
            </StyledText>
            <FirstChild isLoaded={Font.isLoaded('acme')}>
              Mikayel Saghyan
            </FirstChild>
            <StyledText isLoaded={Font.isLoaded('acme')}>
              Arthur Hakobyan
            </StyledText>
          </Body>
          <Body>
            <StyledText isLoaded={Font.isLoaded('acme')}>
              Designed by:
            </StyledText>
            <FirstChild isLoaded={Font.isLoaded('acme')}>
              Lida Gasparyan
            </FirstChild>
          </Body>
        </View>
        <Body>
          <StyledText isLoaded={Font.isLoaded('acme')}>Credits</StyledText>
          <FirstChild isLoaded={Font.isLoaded('acme')}>bensound.com</FirstChild>
          <StyledText isLoaded={Font.isLoaded('acme')}>Allan Hack</StyledText>
          <StyledText isLoaded={Font.isLoaded('acme')}>
            Abdulla Al Muhairi
          </StyledText>
          <StyledText isLoaded={Font.isLoaded('acme')}>Tiomax80</StyledText>
          <StyledText isLoaded={Font.isLoaded('acme')}>Joy Ng</StyledText>
        </Body>
      </Container>
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
  width: 350px;
  padding: 30px 30px;
`;

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled(View)`
  display: flex;
  align-items: center;
`;

const Body = styled(View)`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 9px;
`;

const StyledText = styled(Text)`
  font-family: 'acme';
  color: white;
`;

const FirstChild = styled(StyledText)`
  margin-top: 9px;
`;

AboutModal.propTypes = {
  aboutModalVisible: PropTypes.bool,
  openAboutModal: PropTypes.func,
};

AboutModal.defaultProps = {
  aboutModalVisible: false,
  openAboutModal: () => undefined,
};
