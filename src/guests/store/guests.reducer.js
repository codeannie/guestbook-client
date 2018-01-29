import {
  GET_ALL_GUESTS,
  CREATE_NEW_GUESTLIST,
  ADD_GUEST,
  DELETE_GUEST,
  MODIFY_GUEST,
  EMAIL_GUESTS
} from './guests.actions';

const initialState = {
  guests: [
    // {
    //   name: "Joe Bruin No Response",
    //   email: "joebruin@ucla.edu",
    //   rsvpStatus: 0
    // }, {
    //   name: "Tommy Trojan",
    //   email: "tommytrojan@usc.edu",
    //   rsvpStatus: 1
    // }, {
    //   name: "Code Bear",
    //   email: "iamcodebear@awesome.com",
    //   rsvpStatus: 1
    // }, {
    //   name: "Joe Bruin",
    //   email: "joebruin@ucla.edu",
    //   rsvpStatus: 2
    // }, {
    //   name: "Tommy Trojan",
    //   email: "tommytrojan@usc.edu",
    //   rsvpStatus: 2
    // }, {
    //   name: "Code Bear",
    //   email: "iamcodebear@awesome.com",
    //   rsvpStatus: 3
    //   //plus one?
    // }
  ]
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