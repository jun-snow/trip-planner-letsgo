import { createStore } from 'redux';
import _ from 'lodash';
import rootReducer from '../reducers/index';
import { loadState, saveState } from './localStorage';

const savedState = loadState();

// Date object is serialized in the store as string, but needs to be converted to a date object
// is there a better way to do this...?
if (savedState) {
  savedState.trips.forEach(trip => {
    if (trip.reminder) {
      trip.reminder = new Date(trip.reminder);
    }
  });
}

const store = createStore(rootReducer, savedState);

store.subscribe(_.throttle(() => {
  saveState({
    trips: store.getState().trips,
    todos: store.getState().todos
  });
}, 1000));

export default store;
