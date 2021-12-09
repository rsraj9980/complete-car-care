import React, { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import "./SignUpForm.css";
export default class SignUpForm extends Component {
  // class field syntax
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the confirm or error properties
      // Let's make a copy of this.state (we never want to directly modify the state obj)
      const formData = {...this.state};
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // An error occurred
      this.setState({error: 'Sign Up Failed - Try Again'});
    }
  };

  handleChange = (evt) => {
    // Unlike setters in function components,
    // this.setState MERGES the provided object, it does
    // NOT replace it
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  // Must override the render method
  // The render method take the place of a function component
  // That is, it will ultimately return its UI as JSX
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="wrapper">
        <div className="logo"> <img src="https://cdn-icons.flaticon.com/png/512/4822/premium/4822695.png?token=exp=1639042169~hmac=7c9b51dbc0e432afc75857ece4b55a4a" /> </div>
        <div className="text-center mt-4 name"> SIGNUP </div>
          <form autoComplete="off" onSubmit={this.handleSubmit} className="p-3 mt-3" >
          <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
            <input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>

          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input placeholder="Email"  type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
            <input placeholder="Password"  type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
          </div>
          <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
            <input placeholder="Confirm"  type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <button className="btn" type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}