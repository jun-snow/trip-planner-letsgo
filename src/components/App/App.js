import React from 'react';
import Header from '../Header';
import Filter from '../Filter';
import Grid from '../Grid';
import Details from '../Details';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.dashboard}>
        <Filter />
        <Grid />
        <Details />
      </main>
    </div>
  );
}

export default App;
