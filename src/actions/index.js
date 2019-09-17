import {
  ADD_TRIP,
  SELECT_TRIP,
  SHOW_DETAILS,
  UPDATE_TRIP
} from '../constants/action-types';

export const addTrip = (payload) => ({
  type: ADD_TRIP,
  payload
});

export const selectTrip = (payload) => ({
 type: SELECT_TRIP,
 payload
});

export const updateTrip = (payload) => ({
  type: UPDATE_TRIP,
  payload
});

export const showDetails = () => ({
  type: SHOW_DETAILS
});