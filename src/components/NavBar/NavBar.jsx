import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link style={{ textDecoration: 'none' , color: 'black' }} to="/">HOME</Link>
      &nbsp; | &nbsp;
      <Link style={{ textDecoration: 'none' , color: 'black' }} to="/appointments">APPOINTMENT</Link>
      &nbsp; | &nbsp;
      <Link style={{ textDecoration: 'none' , color: 'black' }} to="/appointments/myAppointments">MY APPOINTMENTS</Link>
      &nbsp; | &nbsp;
      <Link style={{ textDecoration: 'none' , color: 'black'}} to="/locations">LOCATIONS</Link>
      &nbsp; | &nbsp;
      <Link style={{ textDecoration: 'none' , color: 'black'}} to="/services">SERVICES OFFERED</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {props.user.name}</span>
      &nbsp; | &nbsp;
      <Link style={{ textDecoration: 'none', color: 'black' }} to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}