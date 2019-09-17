import React from 'react';
import { connect } from 'react-redux';
import { showDetails } from '../../../../actions';
import styles from './AddTrip.module.scss';

const AddTrip = ({ handleShowDetails }) => {
  return (
    <div className={styles.container}>
      <button
        type='button'
        className={styles.button}
        onClick={() => handleShowDetails()}
      >
      </button>
      <div className={styles.text}>
        Add a Trip
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  handleShowDetails: () => {
    dispatch(showDetails());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTrip);
