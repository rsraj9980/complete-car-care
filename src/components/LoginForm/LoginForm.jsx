import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import "./LoginForm.css";
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div>
      <div className="wrapperLogin" onSubmit={handleSubmit}>
      <div className="logo"> <img src="https://cdn-icons-png.flaticon.com/512/295/295128.png" /> </div>
      <div className="text-center mt-4 name"> LOGIN </div>
        <form className="p-3 mt-3" >
          <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
            <input type="text" name="email" value={credentials.email} onChange={handleChange} required placeholder="Username" />
          </div>
          <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
            <input type="password" placeholder="Password" name="password" value={credentials.password} onChange={handleChange} required />
          </div>
          
          <button className="btn" type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}