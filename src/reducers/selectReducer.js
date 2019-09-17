import { SELECT_TRIP } from '../constants/action-types';

// return unique id of selected trip
// return null if "Add a Trip" button is clicked
const selectReducer = (state = null, action) => {
  switch (action.type) {
    case SELECT_TRIP:
      return action.payload || null;
    default:
      return state;
  }
};

export default selectReducer;
