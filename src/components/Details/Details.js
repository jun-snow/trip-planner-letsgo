import React from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import styles from './Details.module.scss';

const Details = () => {
  return (
    <section className={styles.container}>
      <Form />
      <div className={styles.divider}></div>
      <Todos />
    </section>
  );
}

export default Details;
