import { SHOW_DETAILS } from '../constants/action-types';

const showDetailsReducer = (state = false, action) => {
  // hide details panel until a Grid item is clicked OR AddTrip button is clicked
  // also close details panel on cancel
  switch (action.type) {
    case SHOW_DETAILS:
      return action.payload || false;
    default:
      return state;
  }
};

export default showDetailsReducer;
