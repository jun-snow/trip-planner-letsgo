import React from 'react';
import styles from './Radio.module.scss';

const Radio = ({ children }) => {
  return (
    <div>
      <input
        type='radio'
        id={children}
        value={children}
      /> 
      <label htmlFor={children}>{children}</label>
    </div>
  );
}

export default Radio;
