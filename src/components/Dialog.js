import React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import styled from 'styled-components';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { DialogPropType } from '../proptypes/ObjectGridPropTypes';

const { height, width } = Dimensions.get('window');
const iphoneX = isIphoneX();
const gameWidth = Math.round((height * 16) / 9);
const left = (width - gameWidth) / 2 + 20;
const right = (width - gameWidth) / 2 + 10;

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
              bg={dialogModalContent.characterElement.bg}
            >
              <AnswerText color={dialogModalContent.characterElement.color}>
                {dialogAnswer}
              </AnswerText>
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
                    bg={item.heroElement.bg}
                  >
                    <QuestionText color={item.heroElement.color}>
                      {item.hero}
                    </QuestionText>
                  </DialogTouchableOpacity>
                ),
            )}
          {dialogModalContent && dialogModalContent.questionsShouldBeShown && (
            <DialogTouchableOpacity
              color={dialogModalContent.heroElement.color}
              onPress={showDialog}
              bg={dialogModalContent.heroElement.bg}
            >
              <ClosingDialogButton color={dialogModalContent.heroElement.color}>
                Ok, gotta go. We'll chat later.
              </ClosingDialogButton>
            </DialogTouchableOpacity>
          )}
        </>
      </DialogContainer>
      {dialogModalContent.heroElement &&
        dialogModalContent.heroElement.image &&
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
  ${p =>
    p.isLeft &&
    (iphoneX ? `margin-left: ${left + 40}px` : `margin-left: ${left + 20}px`)};
  ${p =>
    p.isRight &&
    (iphoneX
      ? `margin-right: ${right + 40}px`
      : `margin-right: ${right + 20}px`)};
  margin-bottom: ${iphoneX ? 35 : 20}px;
`;

const DialogTouchableOpacity = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${p => p.bg};
  padding: 10px 20px;
  border-radius: 13px;
  margin-bottom: 10px;
`;

const AnswerTextTouchableOpacity = styled(DialogTouchableOpacity)`
  width: ${p => (p.isLarge ? '80%' : '60%')};
  background-color: ${p => p.bg};
  margin-bottom: 10px;
`;

const AnswerText = styled(Text)`
  font-size: 14px;
  color: ${p => p.color};
`;

const QuestionText = styled(Text)`
  color: ${p => p.color};
  font-size: 14px;
`;

const ClosingDialogButton = styled(Text)`
  font-size: 14px;
  color: ${p => p.color};
`;

const StyledModal = styled(Modal)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  width: ${gameWidth}px;
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
