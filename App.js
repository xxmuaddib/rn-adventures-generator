import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';

const SwitchNavigator = createSwitchNavigator(
  Screens(),
  { initialRouteName: InitialScreen }
);

const AppContainer = createAppContainer(SwitchNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}