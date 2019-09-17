import { FILTER_TRIPS } from '../constants/action-types';

// return search string to filter trips by category
const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_TRIPS:
      return action.payload || '';
    default:
      return state;
  }
};

export default filterReducer;
