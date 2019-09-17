import { ADD_TODO, DELETE_TODO } from '../constants/action-types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload] || [];
    case DELETE_TODO:
      const filtered = state.filter(todo => {
        return todo.id !== action.payload;
      })
      return filtered || state;
    default:
      return state;
  }
};

export default todoReducer;
