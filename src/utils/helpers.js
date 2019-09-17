import moment from 'moment';

// get current date in YYYY-MM-DD format
export const currentDate = () => {
  return moment().format('YYYY-MM-DD');
}

// calculate duration of the vacation in days
export const getDuration = (start, end) => {
  const startSplit = moment(start);
  const endSplit = moment(end);

  return endSplit.diff(startSplit, 'days');
}

// find the index of the trip with matching id#
export const getId = (trips, id) => {
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id === id) {
      return i;
    }
  }
  return null;
}