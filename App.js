import React from 'react';
import { YellowBox, AsyncStorage } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  createSwitchNavigator,
  createAppContainer,
  SwitchActions,
} from 'react-navigation';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';
import { FetchApi } from './src/helpers/FetchApi';
import {
  generateReducers,
  generateActions,
  setStateAction,
} from './src/helpers/ReducersGenerator';
import NavigationService from './src/helpers/NavigationService';

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
        if (savedState.currentRoute) {
          NavigationService.navigate(savedState.currentRoute);
        }
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
  render() {
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
