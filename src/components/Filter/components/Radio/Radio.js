import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ children }) => {

  return (
    <div className={styles.container}>
      <input
        type='radio'
        id={children}
        name='filter'
        value={children}
        className={styles.radio}
      /> 
      <label
        htmlFor={children}
        className={styles.radioLabel}
      >
        {children}
      </label>
    </div>
  );
}

export default Radio;
