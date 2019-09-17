import React from 'react';
import styles from './FormButtons.module.scss';

const FormButtons = ({
  selectedTrip,
  handleSelectTrip,
  handleShowDetails,
  handleDeleteTrip
}) => {

  const handleCancel = () => {
    handleShowDetails(false);
    handleSelectTrip(null);
  }

  const handleDelete = () => {
    handleDeleteTrip(selectedTrip);
    handleShowDetails(false);
    handleSelectTrip(null);
  }

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
      <button
        type='submit'
        className={styles.button}
      >
        Save
      </button>
      <button
        type='button'
        className={styles.button}
        onClick={() => handleCancel()}
      >
        Cancel
      </button>
      {
        selectedTrip &&
        <button
          type='button'
          className={styles.button}
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      }
      </div>
      
    </div>
  );
}

export default FormButtons;
