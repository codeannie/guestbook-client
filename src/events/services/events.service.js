import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../_shared/constants';

// get userId & auth token from the js-cookie
const userId = Cookies.get('loggedInUserId');
const authToken = Cookies.get('jwt');

// GET ALL EVENTS
export const getEvents = async () => {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/api/events/${userId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
}

// GET UPCOMING (ACTIVE) EVENTS 
export const getActiveEvents = async () => {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/api/events/${userId}/active`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
}

// GET PAST EVENTS 
export const getPastEvents = async () => {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/api/events/${userId}/past`,
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
}

// CREATE NEW EVENT
export const createEvent = async (event) => {
  return await axios({
    method: 'post',
    url:`${BASE_URL}/api/events/${userId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    data: {
      ...event // this sends whole thing as an obj {} aka req.body 
      // "event" by itself sends it as event: {} aka req.body.event 
    }
  })
}

// MODIFY EVENT 
export const modifyEvent = async (event) => { 
  return await axios ({
    method: 'put',
    url: `${BASE_URL}/api/events/${userId}/${event.id}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    data: {
      ...event
    }
  })
}