import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        placeholder='Search'
      />
      <button
      className={styles.searchButton}
      >
        Go
      </button>
    </div>
  );
}

export default Search;
