import sendRequest from './send-request';

const BASE_URL = '/api/services';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}
