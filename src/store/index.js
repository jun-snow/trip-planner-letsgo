import { createStore } from 'redux';
import _ from 'lodash';
import rootReducer from '../reducers/index';
import { loadState, saveState } from './localStorage';

const savedState = loadState();
const store = createStore(rootReducer, savedState);

store.subscribe(_.throttle(() => {
  saveState({
    trips: store.getState().trips
  });
}, 1000));

export default store;
