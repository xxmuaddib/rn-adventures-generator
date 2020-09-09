import React, { useCallback, useEffect } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AdMobRewarded } from 'expo-ads-admob';

import { setStateAction } from '../helpers/ReducersGenerator';
import { Hint } from './Hint';
import { AboutModal } from './AboutModal';

const UnwrappedCommonComponents = ({ hintModalVisible, progress, aboutModalVisible, setState }) => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/3552369374');
    } else {
      AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/5683229761');
    }

    AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', () => {
      setState({
        hintModalVisible: true,
      });
    });
  }, []);

  const showHintModal = useCallback(() => {
    setState({
      hintModalVisible: !hintModalVisible,
    });
  }, [hintModalVisible]);

  const openAboutModal = useCallback(() => {
    setState({
      aboutModalVisible: !aboutModalVisible,
    });
  }, [aboutModalVisible]);

  return (
    <>
      {hintModalVisible && (
        <Hint
          hintModalVisible={hintModalVisible}
          progress={progress}
          showHintModal={showHintModal}
        />
      )}
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
  progress: app.progress,
});

const mapDispatchToProps = {
  setState: setStateAction,
};

export const CommonComponents = connect(mapStateToProps, mapDispatchToProps)(UnwrappedCommonComponents);

UnwrappedCommonComponents.propTypes = {
  setState: PropTypes.func.isRequired,
  progress: PropTypes.string.isRequired,
  hintModalVisible: PropTypes.bool.isRequired,
  aboutModalVisible: PropTypes.bool.isRequired,
};