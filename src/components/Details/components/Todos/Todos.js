import React from 'react';
import styles from './Todos.module.scss';

const Todos = () => {
  return (
    <div className={styles.container}>
      Items Needed
      {/* List of todos - use checkbox and gray/disabled coloring for completed items */}
      <div className={styles.list}>
        <div>item 1</div>
        <div>item 2</div>
      </div>
    </div>
  );
}

export default Todos;
