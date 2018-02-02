import {
  GET_ALL_GUESTS,
  ADD_GUEST,
  DELETE_GUEST,
  // MODIFY_GUEST,
  // EMAIL_GUESTS
} from './guests.actions';

const initialState = {
  guests: [ ]
};

export const guestsReducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ALL_GUESTS:
      return {
        ...state,
        guests: action.payload.guests
      };
    case ADD_GUEST:
      return {
        ...state,
        guests: [
          ...state.guests,
          action.payload.guest
        ]
      };
    case DELETE_GUEST:
      const guestToDelete = action.payload.guestId;
      return {
        ...state,
        guests: [
          ...state.guests.filter(guest => guest.id !== guestToDelete)
        ]
      }
    default:
      return state;
  }
};