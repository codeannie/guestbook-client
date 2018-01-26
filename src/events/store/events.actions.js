// Action Types
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';
export const MODIFY_EVENT_DETAILS = 'MODIFY_EVENT_DETAILS';

// Action Creators 

// action - make ajax request to GET
// promise of fetch request (success)
// dispatch async action that returns the object 

// pass action the data that has a type property & payload
// reducer - hey! action has happened, then update the state

export const createGetAllEventsAction = (events) => ({
  type: GET_ALL_EVENTS,
  payload: {
    events
  }
});

// is this correct? 
export const createNewEventAction = (newEvent) => ({
    type: CREATE_NEW_EVENT, 
    payload: {
      newEvent
  }
})

export const createModifyEventAction = (events) => ({
    type: MODIFY_EVENT_DETAILS, 
    payload: {
      events
  }
})

// need to have an async action
// dispatch the action 