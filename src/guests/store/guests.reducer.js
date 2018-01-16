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
    {
      name: "Joe Bruin No Response",
      email: "joebruin@ucla.edu",
      rsvpStatus: 0
    }, {
      name: "Tommy Trojan",
      email: "tommytrojan@usc.edu",
      rsvpStatus: 1
    }, {
      name: "Code Bear",
      email: "iamcodebear@awesome.com",
      rsvpStatus: 1
    }, {
      name: "Joe Bruin",
      email: "joebruin@ucla.edu",
      rsvpStatus: 2
    }, {
      name: "Tommy Trojan",
      email: "tommytrojan@usc.edu",
      rsvpStatus: 2
    }, {
      name: "Code Bear",
      email: "iamcodebear@awesome.com",
      rsvpStatus: 3
      //plus one?
    }
  ]
};

export const guestsReducer = (state = initialState, action) => {
  switch(action.payload){
    case GET_ALL_GUESTS:
    // do something
    return state; // create your new state and return
    default:
    return state;
  }
};