import { combineReducers } from 'redux';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import { SCENES } from '../configs/scenes-combiner';

const appInitialState = {
  resolved: [],
  collectedItems: [],
  inventoryOpen: false,
  loading: true,
  mainMenuVisible: false,
  paperModalVisible: false,
  dialogModalVisible: false,
  paperModalContent: null,
  dialogModalContent: null,
  originalDialogContent: null,
  dialogAnswer: '',
  dialogShouldBeDropped: false,
  hintModalVisible: false,
  tmp: {},
  progress: '',
  currentRoute: '',
};

const appReducer = createReducer(appInitialState, {
  SET_STATE: (state, action) => {
    const filteredAction = { ...action };
    delete filteredAction.type;
    return {
      ...state,
      ...filteredAction,
    };
  },
  RESET: (state, action) => {
    const filteredAction = { ...action };
    delete filteredAction.type;
    return appInitialState;
  },
});

export const generateReducers = () => {
  const sceneReducers = {};
  SCENES.forEach(scene => {
    const initialState = {
      scene: cloneDeep(scene),
      originalScene: cloneDeep(scene),
    };
    sceneReducers[scene.name] = createReducer(initialState, {
      [`${scene.name}_SET_STATE`]: (state, action) => {
        const filteredAction = { ...action };
        delete filteredAction.type;
        return {
          ...state,
          ...filteredAction,
        };
      },
      RESET: (state, action) => {
        const filteredAction = { ...action };
        delete filteredAction.type;
        return initialState;
      },
    });
  });
  return combineReducers({ ...sceneReducers, app: appReducer });
};

export const generateActions = () => {
  createAction('SET_STATE');
  createAction('RESET');
  SCENES.forEach(scene => {
    createAction(`${scene.name}_SET_STATE`);
  });
};

export const setStateAction = (obj, sceneName) => {
  const type = sceneName ? `${sceneName}_SET_STATE` : 'SET_STATE';
  return { ...obj, type };
};

export const resetAction = () => {
  const type = 'RESET';
  return { type };
};

export const findHelperFunction = findFunction => {
  let findedItem;
  for (let scene of SCENES) {
    findedItem = findFunction(scene);
    if (findedItem) {
      return findedItem;
    }
  }
};
