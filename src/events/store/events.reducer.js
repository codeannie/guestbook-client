import {
  GET_ALL_EVENTS,
  CREATE_NEW_EVENT,
  MODIFY_EVENT_DETAILS
} from './events.actions';

const initialState = {
  events: [
    {
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
      eventName: 'Test Past Event',
      date: '2/4/18',
      startTime: '1PM',
      endTime: '2PM',
      locationName: 'hilton conference room',
      numOfGuests: 40,
      eventStatus: 2
    }, {
      eventName: 'Test Archive Event',
      date: '2/4/18',
      startTime: '1PM',
      endTime: '2PM',
      locationName: 'somewhere in the archives',
      numOfGuests: 50,
      eventStatus: 3
    }
  ]
};

export const eventsReducer = (state = initialState, action) => {
  // switch (action.payload) { // why payload?
  switch (action.type) {
    case GET_ALL_EVENTS:
      // return all events? 
      return 
        {...state};
    case CREATE_NEW_EVENT:
      // push new event to end of state -- array or obj? 
      return [
        ...state,
        events: [...state.events, action.payload.event]
      ];
    case MODIFY_EVENT_DETAILS:
      // find the item in array
      const findEventToModify = (eventId) => {
        return eventId;
        //?
      }
      // update the object 
      return [
        ...state,
        events: [
          ...state.events,

        ]
      // events.map((event, index) => {
      //   if (eve[

      // ] 
    };
    default:
      return state;
  }
};
