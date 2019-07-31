import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const Homepage = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <div className="nav-bar">
            <div className="app-name">
                <h1>OpenRes</h1>
            </div>
            <nav className="login-signup">
                    <ul className="nav-links">
                        
                            <button className="signup-button" onClick={() => openModal('signup')}>Sign up</button>
                        
                        
                            <button className="login-button" onClick={() => openModal('login')}>Sign in</button>
                        
                    </ul>
            </nav>  
        </div>
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