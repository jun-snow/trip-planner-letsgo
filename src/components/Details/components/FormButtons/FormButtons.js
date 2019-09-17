import React from 'react';

const FormButtons = ({
  selectedTrip,
  handleSelectTrip,
  handleShowDetails
}) => {

  const handleCancel = () => {
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
      {selectedTrip && <button type='button'>Delete</button>}
    </div>
  );
}

export default FormButtons;
