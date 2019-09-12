import React from 'react';
import styles from './Filter.module.scss';
import AddTrip from './components/AddTrip';
import Search from './components/Search';
import Categories from './components/Categories';

const Filter = () => {
  return (
    <section className={styles.container}>
      <AddTrip />
      <Search />
      <Categories />
    </section>
  );
}

export default Filter;
