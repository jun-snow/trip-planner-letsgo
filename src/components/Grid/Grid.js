import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectTrip } from '../../actions';
import { showDetails } from '../../actions';
import { getDuration } from '../../utils/helpers';
import styles from './Grid.module.scss';

const Grid = ({
  trips,
  details,
  handleClickTrip,
  handleShowDetails,
  filterTrips
}) => {
  const [activeRow, setActiveRow] = useState(null);

  // display details panel and select unique trip id for update use
  const handleDetails = (id, i) => {
    setActiveRow(i);
    handleShowDetails(true);
    handleClickTrip(id);
  }

  // create copy of trip state and apply filters before rendering
  const renderTrips = () => {
    let tripList = [...trips];
    
    if (filterTrips) {
      tripList = tripList.filter(trip => {
        const { title, destination } = trip;
        return title.includes(filterTrips) || destination.includes(filterTrips);
      })
    }

    return (
      tripList.map((trip, i) => {
        return (
          <tr
            key={trip.id}
            className={activeRow === i && details ? styles.activeRow : styles.tableRow}
            onClick={() => handleDetails(trip.id, i)}
          >
            <td>{trip.title}</td>
            <td>{trip.destination}</td>
            <td>{getDuration(trip.start, trip.end)} days</td>
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
  filterTrips: state.filterTrips
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
