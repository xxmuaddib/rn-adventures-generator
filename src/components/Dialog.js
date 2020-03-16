import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { DialogPropType } from '../proptypes/ObjectGridPropTypes';

const { height } = Dimensions.get('window');
const iphoneX = isIphoneX();

export const Dialog = ({
  dialogModalVisible,
  dialogAnswer,
  dialogModalContent,
  resolved,
  setDialog,
  showDialog,
  showDialogAnswer,
}) => (
  <StyledModal isVisible={dialogModalVisible} hasBackdrop={false}>
    <Container
      shouldBeJustified={
        dialogModalContent.characterElement &&
        dialogModalContent.heroElement &&
        dialogModalContent.questionsShouldBeShown
      }
    >
      {dialogModalContent.characterElement && (
        <CharacterAvatar
          source={dialogModalContent.characterElement.image.src}
          isLeft
        />
      )}
      <DialogContainer>
        <>
          {!!dialogAnswer && (
            <AnswerTextTouchableOpacity
              isLarge={
                dialogModalContent && dialogModalContent.questionsShouldBeShown
              }
              disabled={dialogModalContent.questionsShouldBeShown}
              activeOpacity={0.6}
              onPress={() => showDialogAnswer(dialogModalContent)}
            >
              <AnswerText>{dialogAnswer}</AnswerText>
            </AnswerTextTouchableOpacity>
          )}
          {dialogModalContent &&
            dialogModalContent.questionsShouldBeShown &&
            dialogModalContent.dialog &&
            !!dialogModalContent.dialog.length &&
            dialogModalContent.dialog.map(
              item =>
                !resolved.includes(item.hideOnResolved) && (
                  <DialogTouchableOpacity
                    key={item.hero}
                    onPress={() => setDialog(item)}
                    activeOpacity={0.6}
                  >
                    <QuestionText>{item.hero}</QuestionText>
                  </DialogTouchableOpacity>
                ),
            )}
          {dialogModalContent && dialogModalContent.questionsShouldBeShown && (
            <DialogTouchableOpacity onPress={showDialog}>
              <ClosingDialogButton>
                Ok, gotta go. We'll chat later.
              </ClosingDialogButton>
            </DialogTouchableOpacity>
          )}
        </>
      </DialogContainer>
      {dialogModalContent.heroElement &&
        dialogModalContent.questionsShouldBeShown && (
          <CharacterAvatar
            source={dialogModalContent.heroElement.image.src}
            isRight
          />
        )}
    </Container>
  </StyledModal>
);

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: ${p =>
    p.shouldBeJustified ? 'space-between' : 'flex-start'};
  width: 100%;
`;
const DialogContainer = styled(View)`
  width: 60%;
  height: ${height}px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: ${iphoneX ? 16 : 0}px;
`;

const CharacterAvatar = styled(Image)`
  height: 100px;
  ${p => (p.isLeft && iphoneX ? 'margin-left: 40px' : 'margin-left: 20px')};
  ${p => (p.isRight && iphoneX ? 'margin-right: 40px' : 'margin-right: 20px')};
  margin-bottom: ${iphoneX ? 35 : 20}px;
`;

const DialogTouchableOpacity = styled(TouchableOpacity)`
  width: 100%;
  background-color: white;
  padding: 10px 20px;
  border-radius: 13px;
  margin-bottom: 10px;
`;

const AnswerTextTouchableOpacity = styled(DialogTouchableOpacity)`
  width: ${p => (p.isLarge ? '80%' : '60%')};
  background-color: rgba(122, 27, 56, 0.85);
  margin-bottom: 10px;
`;

const AnswerText = styled(Text)`
  font-size: 14px;
  color: white;
`;

const QuestionText = styled(Text)`
  color: rgb(139, 49, 73);
  font-size: 14px;
`;

const ClosingDialogButton = styled(Text)`
  font-size: 14px;
  color: rgb(139, 49, 73);
`;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
`;

Dialog.propTypes = {
  dialogModalVisible: PropTypes.bool,
  dialogAnswer: PropTypes.string,
  dialogModalContent: DialogPropType.isRequired,
  resolved: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDialog: PropTypes.func.isRequired,
  showDialog: PropTypes.func.isRequired,
  showDialogAnswer: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  dialogModalVisible: false,
  dialogAnswer: '',
};
