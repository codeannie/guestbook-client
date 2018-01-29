import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../_shared/constants';

// get userId & auth token from the js-cookie
const userId = Cookies.get('loggedInUserId');
const authToken = Cookies.get('jwt');

export const getEventGuests = async (eventId) => {
  return await axios({
    method: 'GET',
    url: `${BASE_URL}/api/guests/${eventId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
  })
}

export const addGuest = async (eventId, guestInfo) => {
  return await axios({
    method: 'POST',
    url: `${BASE_URL}/api/guests/${eventId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    data: {
      ...guestInfo
    }
  })
}

export const deleteGuest = async (eventId, guestId) => {
  return await axios({
    method: 'DELETE',
    url: `${BASE_URL}/api/guests/${eventId}/${guestId}`,
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    // data: {
    //   ...guestInfo
    // }
  })
}