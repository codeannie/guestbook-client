// use this as gateway service for logging and signing up

import axios from 'axios';
import { baseUrl } from '../constants';

// call api and return the promise with results 
export const login = async (email, password) => {
  return await axios({
    method: 'post',
    url: `${baseUrl}/api/auth/login`,
    data: {
      email,
      password
    },
  })

}

export const signup = (firstName, lastName, email, password) => {

}