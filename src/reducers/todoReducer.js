import { ADD_TODO, DELETE_TODO } from '../constants/action-types';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload] || [];
    case DELETE_TODO:
      const newState = [...state];
      newState.forEach(todo => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed
        }
      });

      return newState || state;
    default:
      return state;
  }
};

export default todoReducer;
