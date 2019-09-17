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
          return (
            <label
              key={todo.id}
              htmlFor={todo.item}
              className={styles.todo}
            >
              <input
                id={todo.item}
                type='checkbox'
                checked={todo.completed}
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
