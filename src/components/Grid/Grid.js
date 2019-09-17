import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectTrip, showDetails } from '../../actions';
import { getDuration } from '../../utils/helpers';
import styles from './Grid.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faExclamation } from '@fortawesome/free-solid-svg-icons';


const Grid = ({
  trips,
  details,
  handleClickTrip,
  handleShowDetails,
  searchTrips,
  filterTrips,
  todos
}) => {
  const [activeRow, setActiveRow] = useState(null);
  
  // display details panel and select unique trip id for update use
  const handleDetails = (id, i) => {
    setActiveRow(i);
    handleShowDetails(true);
    handleClickTrip(id);
  }

  const renderIcon = (name) => {
    return <FontAwesomeIcon icon={name} />;
  }

  // create copy of trip state and apply filters before rendering
  const renderTrips = () => {
    let tripList = [...trips];
    
    if (searchTrips) {
      // filter todo items with search query, then get their trip IDs
      const todoID = todos
        .filter(todo => todo.item.toLowerCase().includes(searchTrips))
        .map(todo => todo.tripId);

      // filter title and destination with search query
      tripList = tripList.filter(trip => {
        const { title, destination, id } = trip;
        // check if trip ID matches any of the todos
        let todoMatch = false;
        for (let i of todoID) {
          if (i === id) return todoMatch = true;
        }

        return title.toLowerCase().includes(searchTrips)
        || destination.toLowerCase().includes(searchTrips)
        || todoMatch;
      })
    }

    if (filterTrips) {
      tripList = tripList.filter(trip => {
        const { category } = trip;
        return category === filterTrips
      })
    }

    return (
      tripList.map((trip, i) => {
        const { id, title, destination, start, end, reminder } = trip;
        return (
          <tr
            key={id}
            className={activeRow === i && details ? styles.activeRow : styles.tableRow}
            onClick={() => handleDetails(id, i)}
          >
            <td className={styles.first}>
              {reminder ? renderIcon(faExclamation) : ''}
            </td>
            <td>{title}</td>
            <td>{destination}</td>
            <td>{getDuration(start, end)} days</td>
          </tr>
        );
      })
    );
  }

  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headerRow}>
            <th className={styles.first}>
              {renderIcon(faBell)}
            </th>
            <th>Trip Title</th>
            <th>Destination</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {renderTrips()}
        </tbody>
      </table>
    </section>
  );
}

const mapStateToProps = (state) => ({
  details: state.showDetails,
  trips: state.trips,
  searchTrips: state.searchTrips,
  filterTrips: state.filterTrips,
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleClickTrip: (payload) => {
    dispatch(selectTrip(payload));
  },
  handleShowDetails: (payload) => {
    dispatch(showDetails(payload));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
