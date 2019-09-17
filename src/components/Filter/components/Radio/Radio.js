import React from 'react';
import { connect } from 'react-redux';
import { filterTrips } from '../../../../actions';
import styles from './Radio.module.scss';

const Radio = ({
  children,
  handleFilterTrips,
  check,
  setCheck
}) => {
  // convert 'None' children prop to empty string for filtering purposes
  const filterValue = children === 'None' ? '' : children;

  // assign input value to check to initialize checked status while keeping it dynamic
  // send category filter to reducer
  const handleSelect = (val) => {
    setCheck(val);
    handleFilterTrips(filterValue);
  }

  return (
    <div className={styles.container}>
      <input
        type='radio'
        id={children}
        name='filter'
        checked={check === filterValue}
        value={filterValue}
        className={styles.radio}
        onChange={(e) => handleSelect(e.target.value)}
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
