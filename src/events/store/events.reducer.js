import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_REQUEST,
  GET_ACTIVE_EVENTS,
  GET_ACTIVE_EVENTS_REQUEST,
  GET_PAST_EVENTS,
  CREATE_NEW_EVENT,
  MODIFY_EVENT_DETAILS
} from './events.actions';

const initialState = {
  fetching: false,
  events: [],
  // activeEvents: [],
  // pastEvents: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_EVENTS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case GET_ALL_EVENTS:  
      return {
        ...state,
        fetching: false,
        events: [
          ...action.payload.events 
        ]
      };
      case GET_ACTIVE_EVENTS_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case GET_ACTIVE_EVENTS:
      return {
        ...state,
        fetching: false,
        events: [
          ...action.payload.events
        ]
      };
    case GET_PAST_EVENTS:
      return {
        ...state,
        events: [
          ...action.payload.events
        ]
      };
    case CREATE_NEW_EVENT:
      return {
        ...state,
        events: [
          ...state.events, 
          action.payload.newEvent
        ]
      };
    case MODIFY_EVENT_DETAILS:  
      // send update to server
      // on server, update the event
      // get the updated event back back
      // refresh entire redux store 
      return {
        ...state,
        events: [
          ...state.events,
          // ...action.payload.event,
        ]
    };
    default:
      return state;
  }
};
