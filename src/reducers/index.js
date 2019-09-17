import { combineReducers } from 'redux';
import showDetailsReducer from './showDetailsReducer';
import tripsReducer from './tripsReducer';
import selectReducer from './selectReducer';
import searchReducer from './searchReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  showDetails: showDetailsReducer,
  trips: tripsReducer,
  selectedTrip: selectReducer,
  searchTrips: searchReducer,
  filterTrips: filterReducer
});

export default rootReducer;
