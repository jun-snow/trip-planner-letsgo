import React, { useState } from 'react';
import FormButtons from '../FormButtons';
import { useSelectedTrip, useStatusUpdate } from './hooks';
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
  handleShowDetails,
  handleDeleteTrip
}) => {

  const initialState = {
    id: null,
    title: '',
    destination: '',
    description: '',
    start: currentDate(),
    end: currentDate(),
    category: '',
    reminder: false,
    status: 'Created'
  }

  const [tripDetails, setTripDetails] = useState(initialState);
  const {
    title,
    destination,
    description,
    start,
    end,
    category,
    reminder,
    status
  } = tripDetails;

  // if a trip is selected, populate form with that trip by matching id
  useSelectedTrip(trips, selectedTrip, setTripDetails);
  // update trip status based on item completion
  useStatusUpdate(trips, selectedTrip, todos, setTripDetails);

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
      status
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
        <span>Trip Details</span>
        <span>{selectedTrip ? ` - ${status}` : ''}</span>
      </div>
      <input
        placeholder='Title'
        value={title}
        className={styles.input}
        onChange={(e) => setTripDetails({
          ...tripDetails, title: e.target.value
        })}
        required
      />

      <input
        placeholder='Destination'
        value={destination}
        className={styles.input}
        onChange={(e) => setTripDetails({
          ...tripDetails, destination: e.target.value
        })}
        required
      />

      <input
        placeholder='Description'
        value={description}
        className={styles.input}
        onChange={(e) => setTripDetails({
          ...tripDetails, description: e.target.value
        })}
      />

      <label htmlFor='startDate' className={styles.date}>
        Start Date: 
        <input
          type='date'
          id='startDate'
          className={styles.input}
          min={currentDate()}
          value={start}
          onChange={(e) => setTripDetails({
            ...tripDetails, start: e.target.value
          })}
        />
      </label>

      <label htmlFor='endDate' className={styles.date}>
        End Date:    
        <input
          type='date'
          id='endDate'
          className={styles.input}
          min={start}
          value={end}
          onChange={(e) => setTripDetails({
            ...tripDetails, end: e.target.value
          })}
        />
      </label>

      <select
        value={category}
        className={`${styles.input} ${styles.select}`}
        onChange={(e) => setTripDetails({
          ...tripDetails, category: e.target.value
        })}
      >
        <option value=''>
          None
        </option>
        <option value='Vacation'>
          Vacation
        </option>
        <option value='Business'>
          Business
        </option>
      </select>

      <label htmlFor='reminder' className={styles.reminder}>
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
        handleDeleteTrip={handleDeleteTrip}
      />
    </form>
  );
}

export default Form;
