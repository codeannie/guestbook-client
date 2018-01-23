import axios from 'axios';
import { BASE_URL } from '../../_shared/constants';

// get userId & auth token from the js-cookie

// GET ALL EVENTS 
export const getEvents = async (currentUser) => {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/api/events/${currentUser.user.id}`,
    headers: {
      Authorization: `Bearer ${currentUser.authToken}`
    },
    data: {
      event
    }
  })
}
// CREATE NEW EVENT
export const createEvent = async (event, currentUser) => {
  return await axios({
    method: 'post',
    url:`${BASE_URL}/api/events/${currentUser.user.id}`,
    headers: {
      Authorization: `Bearer ${currentUser.authToken}`
    },
    data: {
      event
    }
  })
}

// MODIFY EVENT 
export const modifyEvent = async (event, currentUser) => { //eventId?
  return await axios ({
    method: 'put',
    url: `${BASE_URL}/api/events/${currentUser.user.id}/${event.id}`,
    headers: {
      Authorization: `Bearer ${currentUser.authToken}`
    },
    data: {
      event
    }
  })
}