/**
 * @author Vanderson de Moura Vauruk
 * @date 05/06/2020
 */
import { getUrl } from './constants';
import _ from 'lodash';
import axios from 'axios';

const BASE_URL = getUrl();
const http = axios.create({
  baseURL: BASE_URL,
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

export const headers = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
}

const Api = {
  post: (path, data, token) => {
    let paramHeaders = getConfig
    if (token) {
      _.set(paramHeaders.headers, 'Authorization', `Bearer ${token}`)
    }

    return http.post(path, data, paramHeaders);
  },
  get: (path) => {
    const headers = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        // Authorization: `Bearer ${token}`
      }
    };

    return http.get(path, null, headers)
  }
};
export default Api;