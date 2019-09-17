import { SEARCH_TRIPS } from '../constants/action-types';

// return search string to filter trips
const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_TRIPS:
      return action.payload || '';
    default:
      return state;
  }
};

export default searchReducer;
