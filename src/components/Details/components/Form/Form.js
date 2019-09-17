import React, { useState } from 'react';
import FormButtons from '../FormButtons';
import { useSelectedTrip } from './useSelectedTrip';
import { currentDate } from '../../../../utils/helpers';
import uuid from 'uuid/v4';
import styles from './Form.module.scss';

const Form = ({
  trips,
  addNewTripDetails,
  todos,
  selectedTrip,
  handleSelectTrip,
  updateTripDetails,
  handleShowDetails
}) => {

  const initialState = {
    id: null,
    title: '',
    destination: '',
    description: '',
    start: currentDate(),
    end: currentDate(),
    category: 'None',
    reminder: false
  }

  const [tripDetails, setTripDetails] = useState(initialState);
  const {
    title,
    destination,
    description,
    start,
    end,
    category,
    reminder
  } = tripDetails;

  // if a trip is selected, populate form with that trip by matching id
  useSelectedTrip(trips, selectedTrip, setTripDetails);

  const submitForm = (e) => {
    e.preventDefault();

    const payload = {
      id: uuid(),
      title,
      destination,
      description,
      start,
      end,
      category,
      reminder,
      todos
      };
    
    // if a trip has been selected, update existing trip
    // if not, create new trip
    if (selectedTrip) {
      updateTripDetails({
        ...payload,
        id: selectedTrip
      });
    } else {
      addNewTripDetails(payload);
    }

    // initialize form and clear selected id after submission
    handleSelectTrip(null);
    setTripDetails(initialState);
  };

  return (
    <form id={styles.form} onSubmit={(e) => submitForm(e)}>
      <div className={styles.title}>
        Trip Details
      </div>
      <input
        placeholder='Title'
        value={title}
        onChange={(e) => setTripDetails({
          ...tripDetails, title: e.target.value
        })}
        required
      />

      <input
        placeholder='Destination'
        value={destination}
        onChange={(e) => setTripDetails({
          ...tripDetails, destination: e.target.value
        })}
        required
      />

      <input
        placeholder='Description'
        value={description}
        onChange={(e) => setTripDetails({
          ...tripDetails, description: e.target.value
        })}
      />

      <label htmlFor='startDate'>
        Start Date:
        <input
          type='date'
          id='startDate'
          min={currentDate()}
          value={start}
          onChange={(e) => setTripDetails({
            ...tripDetails, start: e.target.value
          })}
        />
      </label>

      <label htmlFor='endDate'>
        End Date:
        <input
          type='date'
          id='endDate'
          min={start}
          value={end}
          onChange={(e) => setTripDetails({
            ...tripDetails, end: e.target.value
          })}
        />
      </label>

      <select
        onChange={(e) => setTripDetails({
          ...tripDetails, category: e.target.value
        })}
        value={category}
      >
        <option value='None'>
          None
        </option>
        <option value='Vacation'>
          Vacation
        </option>
        <option value='Business'>
          Business
        </option>
      </select>

      <label htmlFor='reminder'>
        <input
          type='checkbox'
          id='reminder'
          checked={reminder}
          onChange={() => setTripDetails({
            ...tripDetails, reminder: !reminder
          })}
        />
        Reminder
      </label>

      <FormButtons
        selectedTrip={selectedTrip}
        handleSelectTrip={handleSelectTrip}
        handleShowDetails={handleShowDetails}
      />
    </form>
  );
}

export default Form;
