// Action Types
export const GET_ALL_GUESTS = 'GET_ALL_GUESTS';
export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const MODIFY_GUEST = 'MODIFY_GUEST';
export const EMAIL_GUESTS = 'EMAIL_GUESTS';


// Action Creators 
export const createGetAllGuestsAction = (guests) => ({
  type: GET_ALL_GUESTS,
  payload: {
    guests
  }
});

export const createAddGuestAction = (guest) => ({
    type: ADD_GUEST, 
    payload: {
      guest
  }
})

export const createDeleteGuestAction = (guestId) => ({
    type: DELETE_GUEST, 
    payload: {
      // index,
      guestId
  }
})

export const createModifyGuestAction = (guest) => ({
    type: MODIFY_GUEST, 
    payload: {
      guest
  }
})

// not sure about email? 
export const createEmailGuestsAction = (guest) => ({
    type: EMAIL_GUESTS, 
    payload: {
      guest
  }
})