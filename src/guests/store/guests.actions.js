// Action Types
export const GET_ALL_GUESTS= 'GET_ALL_GUESTS';
export const CREATE_NEW_GUESTLIST = 'CREATE_NEW_GUESTLIST';
export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const MODIFY_GUEST = 'MODIFY_GUEST';
export const EMAIL_GUESTS = 'EMAIL_GUESTS';


// Action Creators 
export const createGetAllGuestsAction = (eventId) => ({
  action: GET_ALL_GUESTS,
  payload: {
    eventId
  }
});

// how to handle guests? 
export const createNewGuestListAction = ( 
  eventId,
  firstName,
  lastName,
  email
  //plusOne?
  ) => ({
    action: CREATE_NEW_GUESTLIST, 
    payload: {
      eventId,
      firstName,
      lastName,
      email,
  }
})

export const createAddGuestAction = ( 
  eventId,
  firstName,
  lastName,
  email
  ) => ({
    action: ADD_GUEST, 
    payload: {
      eventId,
      firstName,
      lastName,
      email,
  }
})

export const createDeleteGuestAction = ( 
  eventId,
  firstName,
  lastName,
  email
  ) => ({
    action: DELETE_GUEST, 
    payload: {
      eventId,
      firstName,
      lastName,
      email,
  }
})

export const createModifyGuestAction = ( 
  eventId,
  firstName,
  lastName,
  email
  ) => ({
    action: MODIFY_GUEST, 
    payload: {
      eventId,
      firstName,
      lastName,
      email,
  }
})

export const createEmailGuestsAction = ( 
  eventId,
  firstName,
  lastName,
  email
  ) => ({
    action: EMAIL_GUESTS, 
    payload: {
      eventId,
      firstName,
      lastName,
      email,
  }
})