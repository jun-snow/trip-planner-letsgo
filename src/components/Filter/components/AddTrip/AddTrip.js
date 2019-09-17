import React from 'react';
import { connect } from 'react-redux';
import { showDetails, selectTrip } from '../../../../actions';
import styles from './AddTrip.module.scss';

const AddTrip = ({ handleShowDetails, handleSelectTrip }) => {

  const handleAddTrip = () => {
    handleSelectTrip(null);
    handleShowDetails(true);
  }
  return (
    <div className={styles.container}>
      <button
        type='button'
        className={styles.button}
        onClick={() => handleAddTrip()}
      >
      </button>
      <div className={styles.text}>
        Add a Trip
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleShowDetails: (payload) => {
    dispatch(showDetails(payload));
  },
  handleSelectTrip: (payload) => {
    dispatch(selectTrip(payload));
  }
});

export default connect(null, mapDispatchToProps)(AddTrip);
