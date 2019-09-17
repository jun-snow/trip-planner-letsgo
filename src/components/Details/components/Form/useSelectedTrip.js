import { useEffect } from 'react';
import { currentDate } from '../../../../utils/helpers';

export const useSelectedTrip = (trips, selectedTrip, setTripDetails) => {
  useEffect(() => {
    const initialState = {
      id: null,
      title: '',
      destination: '',
      description: '',
      start: currentDate(),
      end: currentDate(),
      category: 'None',
      reminder: false
    }
    if (selectedTrip !== null) {
      const filtered = trips.filter(trip => trip.id === selectedTrip)[0];
      setTripDetails({
        id: filtered.id,
        title: filtered.title,
        destination: filtered.destination,
        description: filtered.description,
        start: filtered.start,
        end: filtered.end,
        category: filtered.category,
        reminder: filtered.reminder
      });
    } else {
      setTripDetails(initialState);
    }
  }, [trips, selectedTrip, setTripDetails]);
}