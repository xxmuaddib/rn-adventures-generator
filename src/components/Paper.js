import React from 'react';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export const Paper = ({ paperModalVisible, paperModalContent, openPaper }) => (
  <Modal isVisible={paperModalVisible} style={{ alignItems: 'center' }}>
    <ImageBackground
      source={{ uri: paperModalContent.bg }}
      style={{ backgroundColor: 'white', width, height, padding: 10 }}
    >
      <Text
        style={{
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: 10,
          width: 400,
          height: 300,
          position: 'absolute',
          left: 70,
          top: 70,
          zIndex: 10,
        }}
      >
        {paperModalContent.text}
      </Text>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 50,
          right: 50,
          backgroundColor: '#e2a33e',
          width: 70,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
        onPress={openPaper}
      >
        <Text>Got it!</Text>
      </TouchableOpacity>
    </ImageBackground>
  </Modal>
);
