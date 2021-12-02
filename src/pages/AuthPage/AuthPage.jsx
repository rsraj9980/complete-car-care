import React, { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="bodyDiv">
    <h1>Welcome to Complete Car Wash</h1>
    <div className = "AuthDiv">
      <p>
      <SignUpForm setUser={setUser} />
      </p>
      <p>
      <LoginForm setUser={setUser} />
      </p>
    </div>
    </div>
  );
}