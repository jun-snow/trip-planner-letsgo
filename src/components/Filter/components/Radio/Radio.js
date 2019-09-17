import React from 'react';
import { connect } from 'react-redux';
import { filterTrips } from '../../../../actions';
import styles from './Radio.module.scss';

const Radio = ({ children, handleFilterTrips }) => {
  
  const filterValue = children === 'None' ? '' : children;

  return (
    <div className={styles.container}>
      <input
        type='radio'
        id={children}
        name='filter'
        value={filterValue}
        className={styles.radio}
        onChange={() => handleFilterTrips(filterValue)}
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

const mapDispatchToProps = (dispatch) => ({
  handleFilterTrips: (payload) => {
    dispatch(filterTrips(payload));
  }
});

export default connect(null, mapDispatchToProps)(Radio);
