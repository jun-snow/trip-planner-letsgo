import { combineReducers } from 'redux';
import showDetailsReducer from './showDetailsReducer';
import tripsReducer from './tripsReducer';
import selectReducer from './selectReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  showDetails: showDetailsReducer,
  trips: tripsReducer,
  selectedTrip: selectReducer,
  filterTrips: filterReducer
});

export default rootReducer;
