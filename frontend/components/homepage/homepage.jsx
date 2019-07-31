import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Homepage = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <nav className="nav-bar">
            <span className="full-logo">
                <div className="logo-cont">
                    <div className="logo"></div>
                </div>
                <h1 className="app-name" >OpenRes</h1>
            </span>
            <ul className="nav-links">       
                <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>  
                <button className="login-button" onClick={() => openModal('login')}>Sign in</button>     
            </ul> 
        </nav>
    );
    const greeting = () => (
        <nav className="nav-bar">
            <span className="full-logo">
                <div className="logo-cont">
                    <div className="logo"></div>
                </div>
                <h1 className="app-name" >OpenRes</h1>
            </span>
            <span className="nav-links">
                <h3 className="header-name">Hi, {currentUser.fname}</h3>
                <button className="login-button" onClick={logout}>Log Out</button>
            </span>
        </nav>
    );
    return currentUser ? greeting() : sessionLinks();
};

export default Homepage;