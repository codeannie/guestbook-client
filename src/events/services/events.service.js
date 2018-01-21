import axios from 'axios';
import { baseUrl } from '../../_shared/constants';

// get from redux state 
// get user id
// get event id
// get auth token

// GET ALL EVENTS 
export const getEvents = async (userId) => {
  return await axios({
    method: 'get',
    url: `${baseurl}/api/events/${userId}`,
    data: {
      userId
    }
  })
}
// CREATE NEW EVENT
export const createEvent = async () => {
  return await axios({
    method: 'post',
    url:`${baseurl}/api/events/${userId}`,
    data: {
      // how to package everything? 
    }
  })
}

// MODIFY EVENT 
export const modifyEvent = async () => { //eventId?
  return await axios ({
    method: 'put',
    url: `${baseurl}/api/events/${userId}/${eventId}`,
    data: {
      // ?? 
    }
  })
}