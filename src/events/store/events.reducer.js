import { GET_EVENTS_ACTION } from './events.actions';
const initialState = {
  events: [
    {
      eventName: "Test Event Details",
      date: "1/30/18",
      startTime: "3PM",
      endTime: "8PM",
      locationName: "Hipster Oak Tree",
      locationAddress: "555 Becool St",
      locationLink: "wwww.hipsteroaktree.com"
    }
  ]
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case GET_EVENTS_ACTION:
    // do something
    return state; // create your new state and return
    default:
      return state;
  }
};
