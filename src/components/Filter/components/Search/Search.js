import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        placeholder='Search...'
      />
      <button
        className={styles.button}
      >
        Go
      </button>
    </div>
  );
}

export default Search;
