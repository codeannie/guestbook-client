import * as eventServices from '../../events/services/events.service';
// Action Types
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const GET_ACTIVE_EVENTS = 'GET_ACTIVE_EVENTS';
export const GET_PAST_EVENTS = 'GET_PAST_EVENTS';
export const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';
export const MODIFY_EVENT_DETAILS = 'MODIFY_EVENT_DETAILS';

// Action Creators 

// action - make ajax request to GET
// promise of fetch request (success)
// dispatch async action that returns the object 

// pass action the data that has a type property & payload
// reducer - hey! action has happened, then update the state

export const createGetAllEventsAction = () => async (dispatch) => {
  // change this to make thunk call 
  const res = await eventServices.getEvents();
  // console.log(events);
  return dispatch({
    type: GET_ALL_EVENTS,
    payload: {
      events: res.data.events
    }
  })
};

export const createGetActiveEventsAction = () => async (dispatch) => {
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