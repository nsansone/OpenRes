import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Sign in</Link>
            &nbsp;
            <Link to="/signup">Sign up</Link>
        </nav>
    );
    const greeting = () => (
        <hgroup className="header-group">
            <h3 className="header-name">Hi, {currentUser.fname}</h3>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? greeting() : sessionLinks();
};

export default Homepage;