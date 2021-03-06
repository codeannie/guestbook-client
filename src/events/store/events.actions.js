import * as eventServices from '../../events/services/events.service';
// Action Types
export const GET_ALL_EVENTS_REQUEST = 'GET_ALL_EVENTS_REQUEST';
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ACTIVE_EVENTS_REQUEST = 'GET_ACTIVE_EVENTS_REQUEST';
export const GET_ACTIVE_EVENTS = 'GET_ACTIVE_EVENTS';
export const GET_PAST_EVENTS = 'GET_PAST_EVENTS';
export const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';
export const MODIFY_EVENT_DETAILS = 'MODIFY_EVENT_DETAILS';

// Action Creators 
export const createGetAllEventsAction = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_EVENTS_REQUEST,
  })
  const res = await eventServices.getEvents();
  return dispatch({
    type: GET_ALL_EVENTS,
    payload: {
      events: res.data.events
    }
  })
};

export const createGetActiveEventsAction = () => async (dispatch) => {
  dispatch({
    type: GET_ACTIVE_EVENTS_REQUEST,
  })
  const res = await eventServices.getActiveEvents();
  return dispatch({
    type: GET_ACTIVE_EVENTS,
    payload: {
      events: res.data.events
    }
  })
};

export const createGetPastEventsAction = () => async (dispatch) => {
  const res = await eventServices.getPastEvents();
  return dispatch({
    type: GET_PAST_EVENTS,
    payload: {
      events: res.data.events
    }
  })
};

export const createNewEventAction = (newEvent) => ({
    type: CREATE_NEW_EVENT, 
    payload: {
      newEvent
  }
})


// export const createModifyEventAction = (events) => async (dispatch) => {
//   const res = await eventServices.modifyEvent();
//   return dispatch({
//     type: MODIFY_EVENT_DETAILS,
//     payload: {
//       events: res.data.events
//     }
//   })
// };

export const createModifyEventAction = (event) => ({
  type: MODIFY_EVENT_DETAILS, 
  payload: {
    event
}
})