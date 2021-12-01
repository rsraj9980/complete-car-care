import * as usersAPI from './users-api';

export async function signUp(userData) {
  // Delegate the network request code to the users-api.js
  // module which will ultimately return a JWT
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  return getUser();
}

export async function login(credentials) {
  const token = await usersAPI.login(credentials);
  localStorage.setItem('token', token);
  return getUser();
}

export function getToken() {
  // getItem method will return null if there's no key
  const token = localStorage.getItem('token');
  if (!token) return null;
  const payload = JSON.parse(window.atob(token.split('.')[1]));
  if (payload.exp < Date.now() / 1000) {
    // Token has expired
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(window.atob(token.split('.')[1])).user : null;
}

export function logOut() {
  localStorage.removeItem('token');
}


/* -- This is not necessary in your MERN-STACk projects  -- */
/* -- Only to see how to send token to the server -- */
export function checkToken() {
  // Just so that you don't forget how to use .then
  return usersAPI.checkToken()
  // checkToken returns a string, but let's 
  // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
}