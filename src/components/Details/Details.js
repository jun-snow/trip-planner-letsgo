import React from 'react';
import { connect } from 'react-redux';
import {
  addTrip,
  selectTrip,
  updateTrip,
  showDetails,
  deleteTrip,
  addTodo,
  deleteTodo
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
  handleShowDetails,
  handleDeleteTrip,
  todos,
  handleAddTodo,
  handleDeleteTodo
}) => {
  
  // const [todos, setTodos] = useState([]);

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
        handleDeleteTrip={handleDeleteTrip}
      />
      <div className={styles.divider}></div>
      <Todos
        todos={todos}
        handleAddTodo={handleAddTodo}
        selectedTrip={selectedTrip}
        handleDeleteTodo={handleDeleteTodo}
      />
    </section>
  );
}

const mapStateToProps = (state) => ({
  details: state.showDetails,
  trips: state.trips,
  selectedTrip: state.selectedTrip,
  todos: state.todos
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
  },
  handleDeleteTrip: (payload) => {
    dispatch(deleteTrip(payload));
  },
  handleAddTodo: (payload) => {
    dispatch(addTodo(payload));
  },
  handleDeleteTodo: (payload) => {
    dispatch(deleteTodo(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
