import { SELECT_TRIP } from '../constants/action-types';

const selectReducer = (state = null, action) => {
  // display clicked trip data in details panel using id
  switch (action.type) {
    case SELECT_TRIP:
      return action.payload;
    default:
      return state;
  }
};

export default selectReducer;
