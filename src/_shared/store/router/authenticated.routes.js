export const DASHBOARD_ROUTE = '/dashboard';
export const EVENT_OVERVIEW_ROUTE = '/event/:eventId'; //:eventId = route parameter
export const EVENT_EDIT_ROUTE = '/event/:eventId/edit';
export const EVENT_NEW_ROUTE = '/event/new';
export const GUESTLIST_NEW_ROUTE = '/event/:eventId/guestlist/new';
export const GUESTLIST_EDIT_ROUTE = '/event/:eventId/guestlist/edit'

const routes = {
  [DASHBOARD_ROUTE]: {
    title: 'Dashboard',
  },
  [EVENT_OVERVIEW_ROUTE]: {
    title: 'Event Overview'
  },
  [EVENT_EDIT_ROUTE]: {
    title: 'Edit Event'
  },
  [EVENT_NEW_ROUTE]: {
    title: 'Create an Event'
  },
  [GUESTLIST_NEW_ROUTE]: {
    title: 'Guest List'
  },
  [GUESTLIST_EDIT_ROUTE]: {
    title: 'Edit Guest List'
  }
};

export default routes;

//setting key in an obj, use []