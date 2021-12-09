import sendRequest from './send-request';

const BASE_URL = '/api/appointments';


export function add(date, selectedServices) {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}`, 'POST', {date, selectedServices});
  }
  export function getAll() {
    return sendRequest(`${BASE_URL}/myAppointments`);
  }
  