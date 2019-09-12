import React from 'react';
import styles from './Grid.module.scss';

const Grid = () => {
  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableHeader}>
            <th>Trip Title</th>
            <th>Destination</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>dummy</td>
            <td>data</td>
            <td>here</td>
          </tr>
          <tr>
            <td>dummy</td>
            <td>data</td>
            <td>here</td>
          </tr>
          <tr>
            <td>dummy</td>
            <td>data</td>
            <td>here</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Grid;
