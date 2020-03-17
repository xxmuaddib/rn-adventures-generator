import { combineReducers } from 'redux';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { SCENES } from '../configs/scenes';

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
  tmp: {},
  mainObjects: [],
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
  GET_MAIN_OBJECTS: (state, action) => {
    const filteredAction = { ...action };
    delete filteredAction.type;
    return {
      ...state,
      mainObjects: filteredAction.mainObjects,
    };
  },
});

export const generateReducers = () => {
  const sceneReducers = {};
  SCENES.forEach(scene => {
    const initialState = {
      scene: { ...scene },
      originalScene: { ...scene },
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
    });
  });
  return combineReducers({ ...sceneReducers, app: appReducer });
};

export const generateActions = () => {
  createAction('SET_STATE');
  createAction('GET_MAIN_OBJECTS');
  SCENES.forEach(scene => {
    createAction(`${scene.name}_SET_STATE`);
  });
};

export const setStateAction = (obj, sceneName) => {
  const type = sceneName ? `${sceneName}_SET_STATE` : 'SET_STATE';
  return { ...obj, type };
};

export const getMainObjectsAction = () => {
  const type = 'GET_MAIN_OBJECTS';
  let mainObjects = [];
  SCENES.forEach(scene => {
    let sceneMainObjects = scene.objects.itemsMap.filter(item => item.main);
    mainObjects = [...mainObjects, ...sceneMainObjects];
  });
  return { mainObjects, type };
};
