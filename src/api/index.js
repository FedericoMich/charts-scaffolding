import axios from 'axios';

/**
 * Create axios instance
 * Base url should be saved in .env
 * // TODO: add interceptor if jwt token is needed
 */
const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance;
