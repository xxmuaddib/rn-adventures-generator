import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';

import { DialogPropType } from '../proptypes/ObjectGridPropTypes';

const { width, height } = Dimensions.get('window');

export const Dialog = ({
  dialogModalVisible,
  dialogAnswer,
  dialogModalContent,
  resolved,
  setDialog,
  showDialog,
}) => (
  <Modal isVisible={dialogModalVisible} style={{ alignItems: 'center' }}>
    <View
      style={{
        backgroundColor: 'white',
        width,
        height: height / 2,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <>
        {!!dialogAnswer && (
          <Text
            style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontSize: 12,
              color: 'blue',
              marginBottom: 20,
            }}
          >
            {dialogAnswer}
          </Text>
        )}
        {dialogModalContent &&
          dialogModalContent.dialog &&
          !!dialogModalContent.dialog.length &&
          dialogModalContent.dialog.map(
            item =>
              !resolved.includes(item.hideOnResolved) && (
                <TouchableOpacity key={item.s} onPress={() => setDialog(item)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontStyle: 'italic',
                      color: 'black',
                      fontSize: 12,
                    }}
                  >
                    {item.s}
                  </Text>
                </TouchableOpacity>
              ),
          )}
        <TouchableOpacity onPress={showDialog}>
          <Text
            style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: 'black',
              fontSize: 12,
            }}
          >
            Ok, gotta go. We'll chat later.
          </Text>
        </TouchableOpacity>
      </>
    </View>
  </Modal>
);

Dialog.propTypes = {
  dialogModalVisible: PropTypes.bool,
  dialogAnswer: PropTypes.string,
  dialogModalContent: DialogPropType.isRequired,
  resolved: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDialog: PropTypes.func.isRequired,
  showDialog: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  dialogModalVisible: false,
  dialogAnswer: '',
};
