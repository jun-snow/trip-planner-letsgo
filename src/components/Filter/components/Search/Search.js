import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { searchTrips } from '../../../../actions';
import styles from './Search.module.scss';

const Search = ({ handleSearchTrips }) => {

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const submitSearch = (e) => {
    e.preventDefault();

    setSearch('');
    handleSearchTrips(search);
  }

  return (
    <form
      id={styles.container}
      onSubmit={(e) => submitSearch(e)}
    >
      <input
        type='search'
        className={styles.search}
        value={search}
        onChange={handleSearch}
        placeholder='Search...'
      />
      <button
        type='submit'
        className={styles.button}
      >
        Go
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleSearchTrips: (payload) => {
    dispatch(searchTrips(payload));
  }
});

export default connect(null, mapDispatchToProps)(Search);
