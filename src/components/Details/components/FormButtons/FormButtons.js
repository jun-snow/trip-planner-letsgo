import React from 'react';

const FormButtons = ({ selectedTrip }) => {
  return (
    <div>
      <button type='submit'>Save</button>
      <button type='button'>Cancel</button>
      {selectedTrip && <button type='button'>Delete</button>}
    </div>
  );
}

export default FormButtons;
