import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  addTrip,
  selectTrip,
  updateTrip,
  showDetails
} from '../../actions';
import Form from './components/Form';
import Todos from './components/Todos';
import styles from './Details.module.scss';

const Details = ({
  trips,
  details,
  addNewTripDetails,
  selectedTrip,
  handleSelectTrip,
  updateTripDetails,
  handleShowDetails
}) => {
  
  const [todos, setTodos] = useState([]);

  return (
    <section
      className={details ? styles.container : styles.hidden}
    >
      <Form
        trips={trips}
        addNewTripDetails={addNewTripDetails}
        todos={todos}
        selectedTrip={selectedTrip}
        handleSelectTrip={handleSelectTrip}
        updateTripDetails={updateTripDetails}
        handleShowDetails={handleShowDetails}
      />
      <div className={styles.divider}></div>
      <Todos
        todos={todos}
        setTodos={setTodos}
      />
    </section>
  );
}

const mapStateToProps = (state) => ({
  details: state.showDetails,
  trips: state.trips,
  selectedTrip: state.selectedTrip
});

const mapDispatchToProps = (dispatch) => ({
  addNewTripDetails: (payload) => {
    dispatch(addTrip(payload));
  },
  handleSelectTrip: (payload) => {
    dispatch(selectTrip(payload));
  },
  updateTripDetails: (payload) => {
    dispatch(updateTrip(payload));
  },
  handleShowDetails: () => {
    dispatch(showDetails());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
