import {
  ADD_TRIP,
  SELECT_TRIP,
  UPDATE_TRIP,
  SHOW_DETAILS,
  SEARCH_TRIPS
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

export const searchTrips = (payload) => ({
  type: SEARCH_TRIPS,
  payload
});