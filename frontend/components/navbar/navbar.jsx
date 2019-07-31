import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Navbar = ({ currentUser, logout, openModal }) => {
 

    
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
                    <ul id='dropdown' className="dropdown-hidden">
                    <li className="drop-list-item">
                        My Profile
                    </li>
                    <li className="drop-list-item">
                        My Dining History
                    </li>
                    <li className="drop-list-item">
                        My Saved Restaurants
                    </li>
                    <li className="drop-list-item">
                        <button className="login-button" onClick={logout}>Log Out</button>
                    </li>
                </ul>
                <i className="fa fa-chevron-down"></i>
            </span>
        </nav>
    );
    return currentUser ? greeting() : sessionLinks();

};

export default Navbar;