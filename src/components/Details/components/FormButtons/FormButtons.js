import React from 'react';

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
    <div>
      <button type='submit'>Save</button>
      <button
        type='button'
        onClick={() => handleCancel()}
      >Cancel</button>
      {selectedTrip &&
      <button
        type='button'
        onClick={() => handleDelete()}
      >
        Delete
      </button>}
    </div>
  );
}

export default FormButtons;
