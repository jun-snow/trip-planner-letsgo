import React from 'react';
import FormButtons from '../FormButtons';
import styles from './Form.module.scss';

const Form = () => {
  return (
    <form id={styles.form}>

      <input
        placeholder='Title'
      />

      <input
        placeholder='Destination'
      />

      <input
        placeholder='Description'
      />

      <label htmlFor='startDate'>
        Start Date:
        <input
          type='date'
          id='startDate'
        />
      </label>

      <label htmlFor='endDate'>
        End Date:
        <input
          type='date'
          id='endDate'
        />
      </label>

      <select>
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
        />
        Reminder
      </label>

      <FormButtons />
    </form>
  );
}

export default Form;
