import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const loginSignupLinks = () => (
    <nav className="login-signup-links">
        <Link className="login-signup-item" to="/signup">Sign Up</Link>
        <Link className="login-signup-item" to="/login">Sign In</Link>
    </nav>
  );
  const userGreeting = () => (
    <div classname="user-greeting-logout">
      <h2 className="username-header">{currentUser.username}</h2>
      <button className="logout-button" onClick={logout}>Log Out</button>
    </div>
  );

  if(currentUser) {
      return userGreeting();
  } else {
    return loginSignupLinks();
  } 
};


export default Greeting;