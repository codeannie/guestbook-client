import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL } from '../../_shared/constants';

// get userId & auth token from the js-cookie
const userId = Cookies.get('loggedInUserId');
const authToken = Cookies.get('jwt');

// how to capture eventId? 