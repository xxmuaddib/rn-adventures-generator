import React from 'react';
import { YellowBox, AsyncStorage, Platform } from 'react-native';
import { AdMobRewarded } from 'expo-ads-admob';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import * as Sentry from 'sentry-expo';

import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';
import {
  generateReducers,
  generateActions,
  setStateAction,
} from './src/helpers/ReducersGenerator';
import NavigationService from './src/helpers/NavigationService';
import { CommonComponents } from './src/components/CommonComponents';
import AcmeFont from './src/assets/fonts/Acme-Regular.ttf';
import { SCENES } from './src/configs/scenes-combiner';

const fetchFonts = () =>
  Font.loadAsync({
    acme: AcmeFont,
  });

Sentry.init({
  dsn:
    'https://44fe9fe97f3746239348e3083ef0d142@o397798.ingest.sentry.io/5252668',
  enableInExpoDevelopment: true,
  debug: true,
});

YellowBox.ignoreWarnings(['Warning:']);

const store = createStore(generateReducers());

generateActions();

Object.keys(store.getState()).forEach(scene => {
  AsyncStorage.getItem(`store_${scene}`).then(savedStateRaw => {
    if (savedStateRaw) {
      const savedState = JSON.parse(savedStateRaw);
      if (scene === 'app') {
        store.dispatch(setStateAction(savedState));
        store.dispatch(setStateAction({ loading: false }));
        store.subscribe(() => {
          const state = store.getState();
          Object.keys(state).forEach(sc => {
            if (sc === 'app') {
              const appState = {
                resolved: state.app.resolved,
                collectedItems: state.app.collectedItems,
                tmp: state.app.tmp,
                progress: state.app.progress,
                currentRoute: state.app.currentRoute,
              };
              AsyncStorage.setItem(`store_${sc}`, JSON.stringify(appState));
            } else {
              AsyncStorage.setItem(`store_${sc}`, JSON.stringify(state[sc]));
            }
          });
        });
      } else {
        store.dispatch(setStateAction(savedState, scene));
      }
    } else if (scene === 'app') {
      store.subscribe(() => {
        const state = store.getState();
        Object.keys(state).forEach(sc => {
          if (sc === 'app') {
            const appState = {
              resolved: state.app.resolved,
              collectedItems: state.app.collectedItems,
              tmp: state.app.tmp,
              progress: state.app.progress,
              currentRoute: state.app.currentRoute,
            };
            AsyncStorage.setItem(`store_${sc}`, JSON.stringify(appState));
          } else {
            AsyncStorage.setItem(`store_${sc}`, JSON.stringify(state[sc]));
          }
        });
      });
      store.dispatch(setStateAction({ loading: false }));
    } else {
      const sceneMatch = SCENES.find(s => s.name === scene);
      if (sceneMatch) {
        store.dispatch(setStateAction(sceneMatch, sceneMatch.name));
      }
    }
  });
});

const SplashScreenMatch = SCENES.find(s => s.type === 'splash');

const SwitchNavigator = createSwitchNavigator(Screens(), {
  initialRouteName: SplashScreenMatch
    ? SplashScreenMatch.name
    : store.getState().app.currentRoute || InitialScreen,
});

const AppContainer = createAppContainer(SwitchNavigator);

if (Platform.OS === 'ios') {
  AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/3552369374');
} else {
  AdMobRewarded.setAdUnitID('ca-app-pub-2994481870952435/5683229761');
}

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  render() {
    const { fontsLoaded } = this.state;
    if (!fontsLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => this.setState({ fontsLoaded: true })}
        />
      );
    }
    return (
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        <CommonComponents />
      </Provider>
    );
  }
}
