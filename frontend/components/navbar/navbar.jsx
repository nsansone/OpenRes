import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {dropdown: 'dropdown-hidden'}
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.openModalFor = this.openModalFor.bind(this);


    }

    toggleDropdown() {
        if (this.state.dropdown === 'dropdown-hidden'){
            this.setState({dropdown: 'dropdown-visible'});
        } else {
            this.setState({ dropdown: 'dropdown-hidden' });
        }
    }

    openModalFor(form) {
        return e => {
            this.props.openModal(form)
            this.toggleDropdown()
        }
    }


    render(){
    const sessionLinks = () => (
        <nav className="nav-bar">
            <span className="full-logo">
                <div className="logo-cont">
                    <div className="logo"></div>
                </div>
                <h1 className="app-name" >OpenRes</h1>
            </span>
            <ul className="nav-links">       
                <button className="signup-button" onClick={this.openModalFor('signup')}>Sign up</button>  
                <button className="login-button" onClick={this.openModalFor('login')}>Sign in</button>     
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
                <h3 className="header-name">Hi, {this.props.currentUser.fname}</h3>
                <ul id='dropdown'  className={this.state.dropdown}>
                <span className="li-cont">
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
                            <button className="login-button" onClick={this.props.logout}>Log Out</button>
                        </li>
                    </span>
                </ul>
                <i className="fa fa-chevron-down" onClick={this.toggleDropdown}></i>
            </span>
        </nav>
    );
    return this.props.currentUser ? greeting() : sessionLinks();
    }
};

export default Navbar;