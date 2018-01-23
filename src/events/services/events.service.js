import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../_shared/constants';

// get userId & auth token from the js-cookie

const userId = Cookies.get('loggedInUserId');
// console.log(userId);
const authToken = Cookies.get('jwt');

// GET ALL EVENTS 
export const getEvents = async (userId) => {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/api/events/${userId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    data: {
      userId
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
      event
    }
  })
}

// MODIFY EVENT 
export const modifyEvent = async (event) => { //eventId?
  return await axios ({
    method: 'put',
    url: `${BASE_URL}/api/events/${userId}/${event.id}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    data: {
      event
    }
  })
}