import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {dropdown: 'dropdown-hidden'}
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.openModalFor = this.openModalFor.bind(this);
        this.handleClick = this.handleClick.bind(this);


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

    componentWillMount() {
        document.addEventListener('mousedown', this.handleClick, false)
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick(e) {
        if (this.dropdownRef && (this.dropdownRef.contains(e.target) || this.iconRef.contains(e.target))) {
            return
        }
        this.setState({ dropdown: 'dropdown-hidden' })
    }


    render(){
    
        const sessionLinks = () => (
            <ul className="nav-links">
                <button className="signup-button" onClick={this.openModalFor('signup')}>Sign up</button>
                <button className="login-button" onClick={this.openModalFor('login')}>Sign in</button>
            </ul> 
        );
 
        const greeting = () => (
            <span className="nav-links">
                <h3 className="header-name">Hi, {this.props.currentUser.fname}</h3>
                <ul ref={dropdownRef => this.dropdownRef = dropdownRef} id='dropdown'  className={this.state.dropdown}>
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
                <i ref={iconRef => this.iconRef = iconRef} className="fa fa-chevron-down" onClick={this.toggleDropdown}></i>
            </span>

        );
        return( 
            <nav className="nav-bar">
   
                    <Link className="full-logo" to="/">
                        <img className="logo" src={window.logo} />
                      <h1 className="app-name" >OpenRes</h1>
                    </Link>

                {this.props.currentUser ? greeting() : sessionLinks()}
            </nav>
        );
    }
};

export default Navbar;