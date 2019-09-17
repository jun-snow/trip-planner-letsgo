import React, { useState } from 'react';
import uuid from 'uuid/v4';
import styles from './Todos.module.scss';

const Todos = ({
  todos,
  handleAddTodo,
  selectedTrip,
  handleDeleteTodo
}) => {
  const [item, setItem] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      selectedTrip: selectedTrip,
      id: uuid(),
      item
    };
    
    handleAddTodo(newTodo);
    setItem('');
  }

  const removeTodo = (id) => {
    handleDeleteTodo(id);
  }

  const renderTodos = () => {
    const filteredTodos = todos.filter(todo => {
      return todo.selectedTrip === selectedTrip;
    });

    return (
      <div className={styles.list}>
        {filteredTodos.map(todo => {
          return (
            <label
              key={todo.id}
              htmlFor={todo.item}
              className={styles.todo}
            >
              <input
                id={todo.item}
                type='checkbox'
                onChange={() => removeTodo(todo.id)}
              />
              {todo.item}
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      Items Needed
      {/* List of todos - use checkbox and gray/disabled coloring for completed items */}
      <form id={styles.form} onSubmit={(e) => addTodo(e)}>
        {renderTodos()}
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
        >
        </input>
        <button
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Todos;
