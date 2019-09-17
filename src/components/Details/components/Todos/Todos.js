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
      tripId: selectedTrip,
      id: uuid(),
      item,
      completed: false
    };
    
    handleAddTodo(newTodo);
    setItem('');
  }

  const removeTodo = (id) => {
    handleDeleteTodo(id);
  }

  const renderTodos = () => {
    const filteredTodos = todos.filter(todo => {
      return todo.tripId === selectedTrip;
    });

    return (
      <div className={styles.list}>
        {filteredTodos.map(todo => {
          const { id, completed, item } = todo;
          return (
            <label
              key={id}
              htmlFor={id}
              className={`${styles.todo} ${completed ? styles.line : null}`}
            >
              <input
                id={id}
                type='checkbox'
                checked={completed}
                onChange={() => removeTodo(id)}
              />
              {item}
            </label>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      Items Needed
      <form id={styles.form} onSubmit={(e) => addTodo(e)}>
        {renderTodos()}
        <input
          value={item}
          className={styles.input}
          onChange={(e) => setItem(e.target.value)}
          placeholder='Add item...'
        >
        </input>
        <button
          type='submit'
          className={styles.button}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Todos;
