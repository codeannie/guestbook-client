import { GET_ALL_EVENTS } from './events.actions';
const initialState = {
  // events: [
  //   {
  //     eventName: "Test Event Details",
  //     description: 'this is a description',
  //     date: "1/30/18",
  //     startTime: "3PM",
  //     endTime: "8PM",
  //     locationName: "Hipster Oak Tree",
  //     locationAddress: "555 Becool St",
  //     locationLink: "wwww.hipsteroaktree.com"
  //   }
  // ]
  events: [{
    eventName: 'Test Event',
    description: 'blah',
    date: '2/1/18',
    startTime: '1PM',
    endTime: '4PM',
    locationName: 'Somewhere over the rainbow',
    locationAddress: 'this is an address',
    locationLink: 'this is a lcoation link',
    numOfGuests: 10,
    eventStatus: 1
  }, {
    eventName: 'Test Event 2',
    date: '2/4/18',
    startTime: '1PM',
    endTime: '4PM',
    locationName: 'Somewhere with hipster backyard',
    numOfGuests: 40,
    eventStatus: 1
  }, {
    eventName: 'Test Event 3',
    date: '2/4/18',
    startTime: '1PM',
    endTime: '2PM',
    locationName: 'hilton conference room',
    numOfGuests: 40,
    eventStatus: 2
  }]
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case GET_ALL_EVENTS:
    // do something
    return state; // create your new state and return
    default:
      return state;
  }
};
