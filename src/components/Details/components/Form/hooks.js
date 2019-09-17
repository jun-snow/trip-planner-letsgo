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
      category: '',
      reminder: false,
      status: 'Created'
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
        reminder: filtered.reminder,
        status: filtered.status
      });
      
    } else {
      setTripDetails(initialState);
    }
  }, [trips, selectedTrip, setTripDetails]);
}

// check item completion progress for the selected trip
const checkStatus = (selectedTrip, todos, status = 'Created', ready = false) => {
  const filteredTodos = todos.filter(todo => {
    return todo.tripId === selectedTrip;
  });

  if (filteredTodos.length === 0) return status;
  if (filteredTodos[0].completed === true) ready = true;

  for (let todo of filteredTodos) {
    if (status === 'Created' && todo.completed) {
      status = 'In-Progress';
    }
    ready = ready && todo.completed;
  }

  if (ready) status = 'Ready';

  return status;
}

export const useStatusUpdate = (trips, selectedTrip, todos, setTripDetails) => {
  useEffect(() => {
    const filtered = trips.filter(trip => trip.id === selectedTrip)[0];

    if (selectedTrip !== null) {
      setTripDetails({
        ...filtered,
        id: selectedTrip,
        status: checkStatus(selectedTrip, todos)
      });
    }
  }, [trips, selectedTrip, todos, setTripDetails])
}