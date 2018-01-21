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
export const createNewGuestListAction = (guests) => ({
    action: CREATE_NEW_GUESTLIST, 
    payload: {
      guests
  }
})

export const createAddGuestAction = (guest) => ({
    action: ADD_GUEST, 
    payload: {
      guest
  }
})

export const createDeleteGuestAction = (guest) => ({
    action: DELETE_GUEST, 
    payload: {
      guest
  }
})

export const createModifyGuestAction = (guest) => ({
    action: MODIFY_GUEST, 
    payload: {
      guest
  }
})

// not sure about email? 
export const createEmailGuestsAction = (guest) => ({
    action: EMAIL_GUESTS, 
    payload: {
      guest
  }
})