import { getUrl } from './constants';
import _ from 'lodash';
import axios from 'axios';
//import qs from 'querystring';
import { store } from '../store';

/* Get current state of Redux Store */
function getToken() {
  //return store.getState();
  const state = store.getState();
  return state;
}
const BASE_URL = getUrl();
//console.log('BASE_URL', BASE_URL);
const http = axios.create({
  baseURL: BASE_URL,
  // timeout: 12000,
  timeout: 20000,
});

const getConfig = (type) => {
  let header_type = 'application/json';
  if (type) {
    header_type = type;
  }
  console.log("HEADER_TYPE", header_type);
  return {
    headers: {
      'Content-Type': header_type,
      Accept: 'application/json',
    }
  };
};

const Api = {
  post: (path, data, token) => {
    // console.log("Post", path, data, token)
    let paramHeaders = getConfig
    if (token) {
      _.set(paramHeaders.headers, 'Authorization', `Bearer ${token}`)
    }

    return http.post(path, data, paramHeaders);
  },
  //get: (path, data, token) => {
  get: (path) => {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: `Bearer ${token}`
      }
    };
    return http.get(path, null, headers)
    // .catch((error) => {
    //   console.log(error.response);
    //   return false;
    // });
  }
};
export default Api;