import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';

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
  <StyledModal isVisible={dialogModalVisible}>
    <DialogContainer>
      <>
        {!!dialogAnswer && <AnswerText>{dialogAnswer}</AnswerText>}
        {dialogModalContent &&
          dialogModalContent.dialog &&
          !!dialogModalContent.dialog.length &&
          dialogModalContent.dialog.map(
            item =>
              !resolved.includes(item.hideOnResolved) && (
                <QuestionContainer key={item.s} onPress={() => setDialog(item)}>
                  <Text>{item.s}</Text>
                </QuestionContainer>
              ),
          )}
        <CloseDialogButton onPress={showDialog}>
          <Text>Ok, gotta go. We'll chat later.</Text>
        </CloseDialogButton>
      </>
    </DialogContainer>
  </StyledModal>
);

const DialogContainer = styled(View)`
  background-color: white;
  width: ${width}px;
  height: ${height / 2}px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AnswerText = styled(Text)`
  font-weight: bold;
  font-style: italic;
  font-size: 12px;
  color: blue;
  margin-bottom: 20px;
`;

const CloseDialogButton = styled(TouchableOpacity)`
  font-weight: bold;
  font-style: italic;
  color: black;
  font-size: 12px;
`;

const QuestionContainer = styled(TouchableOpacity)`
  font-weight: bold;
  font-style: italic;
  color: black;
  font-size: 12px;
`;

const StyledModal = styled(Modal)`
  align-items: center;
`;

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
