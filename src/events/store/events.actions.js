// Action Types
export const GET_ALL_EVENTS = 'GET_ALL_EVENTS';
export const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';
export const MODIFY_EVENT_DETAILS = 'MODIFY_EVENT_DETAILS';

// Action Creators 
export const createGetAllEventsAction = (userId) => ({
  action: GET_ALL_EVENTS,
  payload: {
    userId
  }
});

// is this correct? 
export const createNewEventAction = ( 
  userId,
  name,
  description,
  date, 
  startTime,
  endTime,
  locationName,
  locationAddress,
  locationMap 
  ) => ({
    action: CREATE_NEW_EVENT, 
    payload: {
      userId,
      name,
      description,
      date, 
      startTime,
      endTime,
      locationName,
      locationAddress,
      locationMap
  }
})

export const createModifyEventAction = ( 
  userId,
  name,
  description,
  date, 
  startTime,
  endTime,
  locationName,
  locationAddress,
  locationMap 
  ) => ({
    action: MODIFY_EVENT_DETAILS, 
    payload: {
      userId,
      name,
      description,
      date, 
      startTime,
      endTime,
      locationName,
      locationAddress,
      locationMap
  }
})