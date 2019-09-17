import { SEARCH_TRIPS } from '../constants/action-types';

// return search string to filter trips by title or description
const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_TRIPS:
      return action.payload.toLowerCase() || '';
    default:
      return state;
  }
};

export default searchReducer;
