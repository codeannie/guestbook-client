export const GET_EVENTS_ACTION = 'GET_EVENTS_ACTION';
export const createGetEventsAction = (userId) => ({
  action: GET_EVENTS_ACTION,
  payload: {
    userId
  }
});
