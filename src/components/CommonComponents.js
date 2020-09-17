import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdMobRewarded } from 'expo-ads-admob';

import { setStateAction } from '../helpers/ReducersGenerator';
import { MainMenuModal } from './MainMenuModal';
import { Hint } from './Hint';
import { AboutModal } from './AboutModal';

const UnwrappedCommonComponents = ({
  hintModalVisible,
  progress,
  aboutModalVisible,
  mainMenuVisible,
  adIsLoading,
  setState,
}) => {
  useEffect(() => {
    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
      setTimeout(() => {
        setState({
          hintModalVisible: true,
        });
      }, 1000);
    });

    return () => {
      AdMobRewarded.removeAllListeners();
    };
  }, []);

  const requestHint = useCallback(async () => {
    try {
      setState({
        mainMenuVisible: false,
      });
      await AdMobRewarded.requestAdAsync();
      await AdMobRewarded.showAdAsync();
    } catch (e) {
      setState({
        mainMenuVisible: false,
      });
      setTimeout(() => {
        setState({
          hintModalVisible: true,
        });
      }, 500);
    }
  }, [setState, hintModalVisible]);

  const closeHintModal = useCallback(() => {
    setState({
      hintModalVisible: false,
    });
  }, [hintModalVisible]);

  const openAboutModal = useCallback(() => {
    setState({
      mainMenuVisible: false,
    });
    setTimeout(() => {
      setState({
        aboutModalVisible: !aboutModalVisible,
      });
    }, 500);
  }, [setState, aboutModalVisible]);

  const openMainMenu = useCallback(() => {
    setState({ mainMenuVisible: !mainMenuVisible });
  }, [setState, mainMenuVisible]);

  return (
    <>
      <MainMenuModal
        mainMenuVisible={mainMenuVisible}
        adIsLoading={adIsLoading}
        openMainMenu={openMainMenu}
        openAboutModal={openAboutModal}
        showHint={requestHint}
      />
      <Hint
        hintModalVisible={hintModalVisible}
        progress={progress}
        showHintModal={closeHintModal}
      />
      <AboutModal
        aboutModalVisible={aboutModalVisible}
        openAboutModal={openAboutModal}
      />
    </>
  );
};

const mapStateToProps = ({ app }) => ({
  hintModalVisible: app.hintModalVisible,
  aboutModalVisible: app.aboutModalVisible,
  mainMenuVisible: app.mainMenuVisible,
  adIsLoading: app.adIsLoading,
  progress: app.progress,
});

const mapDispatchToProps = {
  setState: setStateAction,
};

export const CommonComponents = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnwrappedCommonComponents);

UnwrappedCommonComponents.propTypes = {
  setState: PropTypes.func.isRequired,
  progress: PropTypes.string.isRequired,
  hintModalVisible: PropTypes.bool.isRequired,
  aboutModalVisible: PropTypes.bool.isRequired,
  mainMenuVisible: PropTypes.bool.isRequired,
  adIsLoading: PropTypes.bool.isRequired,
};
