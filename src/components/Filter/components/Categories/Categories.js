import React from 'react';
import Radio from '../Radio';
import styles from './Categories.module.scss';

const Categories = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Filter
        <p>
          Filter results by category
        </p>
      </div>
      <div className={styles.body}>
        <Radio>
          None
        </Radio>
        <Radio >
          Vacation
        </Radio>
        <Radio>
          Business
        </Radio>
      </div>
    </div>
  );
}

export default Categories;
