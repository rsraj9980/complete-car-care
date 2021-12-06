import sendRequest from './send-request';

const BASE_URL = '/api/appointments';


export function add(date) {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}`, 'POST', {date});
  }