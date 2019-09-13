import React from 'react';
import styles from './AddTrip.module.scss';

const AddTrip = () => {
  return (
    <div className={styles.container}>
      <button
        type='button'
        className={styles.button}
      >
        +
      </button>
      <div className={styles.addTripText}>
        Add a Trip
      </div>
    </div>
  );
}

export default AddTrip;
