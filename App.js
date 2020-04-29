import React from 'react';
import { YellowBox, AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Notifications, AppLoading } from 'expo';
import * as Permissions from 'expo-permissions';
import * as Font from 'expo-font';
import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';
import { FetchApi } from './src/helpers/FetchApi';
import {
  generateReducers,
  generateActions,
  setStateAction,
} from './src/helpers/ReducersGenerator';
import NavigationService from './src/helpers/NavigationService';
import AcmeFont from './src/assets/fonts/Acme-Regular.ttf';

async function registerForPushNotificationsAsync() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();

  if (token) {
    FetchApi.post('/expo', { token });
  }
}

const fetchFonts = () =>
  Font.loadAsync({
    acme: AcmeFont,
  });

registerForPushNotificationsAsync();

YellowBox.ignoreWarnings(['Warning:']);

const store = createStore(generateReducers());

store.subscribe(() => {
  const state = store.getState();
  Object.keys(state).forEach(scene => {
    if (scene === 'app') {
      const appState = {
        resolved: state.app.resolved,
        collectedItems: state.app.collectedItems,
        tmp: state.app.tmp,
        progress: state.app.progress,
        currentRoute: state.app.currentRoute,
      };
      AsyncStorage.setItem(`store_${scene}`, JSON.stringify(appState));
    } else {
      AsyncStorage.setItem(`store_${scene}`, JSON.stringify(state[scene]));
    }
  });
});

generateActions();

Object.keys(store.getState()).forEach(scene => {
  AsyncStorage.getItem(`store_${scene}`).then(savedStateRaw => {
    if (savedStateRaw) {
      const savedState = JSON.parse(savedStateRaw);
      if (scene === 'app') {
        store.dispatch(setStateAction(savedState));
        store.dispatch(setStateAction({ loading: false }));
      } else {
        store.dispatch(setStateAction(savedState, scene));
      }
    }
  });
});

const SwitchNavigator = createSwitchNavigator(Screens(), {
  initialRouteName: store.getState().app.currentRoute || InitialScreen,
});

const AppContainer = createAppContainer(SwitchNavigator);

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
      </Provider>
    );
  }
}
