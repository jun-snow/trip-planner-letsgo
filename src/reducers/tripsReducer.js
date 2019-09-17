import { ADD_TRIP, UPDATE_TRIP } from '../constants/action-types';
import { getId } from '../utils/helpers';

const tripsReducer = (state = [], action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_TRIP:

      const tripDetails = {
        id: payload.id,
        title: payload.title,
        destination: payload.destination,
        description: payload.description,
        start: payload.start,
        end: payload.end,
        category: payload.category,
        reminder: payload.reminder,
        todos: payload.todos
      };
      return [...state, tripDetails] || [];
    case UPDATE_TRIP:
      // get index of the trip to be updated
      // overwrite object at that index with new trip
      const findId = getId(state, payload.id);
      const newState = [...state];
      newState[findId] = payload;
      console.log(state, payload.id);
      return newState || state;
    default:
      return state;
  }
};

export default tripsReducer;
