import { combineReducers } from 'redux';
import showDetailsReducer from './showDetailsReducer';
import tripsReducer from './tripsReducer';
import selectReducer from './selectReducer';

const rootReducer = combineReducers({
  showDetails: showDetailsReducer,
  trips: tripsReducer,
  selectedTrip: selectReducer
});

export default rootReducer;
