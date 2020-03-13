import React from 'react';
import { YellowBox } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { Screens, InitialScreen } from './src/helpers/ScreenGenerator';
import {
  generateReducers,
  generateActions,
} from './src/helpers/ReducersGenerator';

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
