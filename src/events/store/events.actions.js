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

export const createGetAllEventsAction = (userId) => ({
  action: GET_ALL_EVENTS,
  payload: {
    userId
  }
});

// is this correct? 
export const createNewEventAction = (event) => ({
    action: CREATE_NEW_EVENT, 
    payload: {
      event
  }
})

export const createModifyEventAction = (event) => ({
    action: MODIFY_EVENT_DETAILS, 
    payload: {
      event
  }
})

// need to have an async action
// dispatch the action 