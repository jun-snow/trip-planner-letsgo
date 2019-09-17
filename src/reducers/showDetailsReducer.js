import { SHOW_DETAILS } from '../constants/action-types';

const showDetailsReducer = (state = false, action) => {
  // hide details section until a Grid item is clicked OR AddTrip button is clicked
  switch (action.type) {
    case SHOW_DETAILS:
      return true;
    default:
      return state;
  }
};

export default showDetailsReducer;
