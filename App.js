import React from 'react';
import { YellowBox } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';
import { FetchApi } from './src/helpers/FetchApi';
import {
  generateReducers,
  generateActions,
} from './src/helpers/ReducersGenerator';

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

const SwitchNavigator = createSwitchNavigator(Screens(), {
  initialRouteName: InitialScreen,
});

const store = createStore(generateReducers());
generateActions();

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
