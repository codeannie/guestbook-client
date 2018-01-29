import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../_shared/constants';

// get userId & auth token from the js-cookie
const userId = Cookies.get('loggedInUserId');
const authToken = Cookies.get('jwt');

// how to capture eventId? 


export const getEventGuests = async (eventId) => {
  return await axios({
    method: 'get',
    url: `${BASE_URL}/api/guests/${eventId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
  })
}

export const addGuest = async (eventId, guestInfo) => {
  return await axios({
    method: 'post',
    url: `${BASE_URL}/api/guests/${eventId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    data: {
      ...guestInfo
    }
  })
}