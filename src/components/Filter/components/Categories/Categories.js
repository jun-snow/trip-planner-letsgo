import React, { useState } from 'react';
import Radio from '../Radio';
import styles from './Categories.module.scss';

const Categories = () => {
  const [check, setCheck] = useState('');

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Filter
        <p>
          Filter results by category
        </p>
      </div>
      <div className={styles.body}>
        <Radio
          check={check}
          setCheck={setCheck}
        >
          None
        </Radio>
        <Radio
          check={check}
          setCheck={setCheck}
        >
          Vacation
        </Radio>
        <Radio
          check={check}
          setCheck={setCheck}
        >
          Business
        </Radio>
      </div>
    </div>
  );
}

export default Categories;
