// use this as gateway service for logging and signing up

import axios from 'axios';
import { BASE_URL } from '../constants';

// call api and return the promise with results 
export const login = async (email, password) => {
  return await axios({
    method: 'post',
    url: `${BASE_URL}/api/auth/login`,
    data: {
      email,
      password
    },
  })
}

export const signup = async (firstName, lastName, email, password) => {
  return await axios({
    method: 'post',
    url: `${BASE_URL}/api/auth/signup`,
    data: {
      firstName,
      lastName,
      email,
      password
    },
  })
}