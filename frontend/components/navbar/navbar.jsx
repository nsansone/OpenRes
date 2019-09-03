import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {dropdown: 'dropdown-hidden'}
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.openModalFor = this.openModalFor.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.swapStyleSheet = this.swapStyleSheet.bind(this);



    };

   

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

    handleKeyUp(e) {

        if (e.keyCode === 13) {
            if (this.state.dropdown === 'dropdown-hidden') {
                this.setState({ dropdown: 'dropdown-visible' });
            } else {
                this.setState({ dropdown: 'dropdown-hidden' });
            }
        }
    }

    swapStyleSheet(sheet){
            return e => {
                document.getElementById('theme').setAttribute('href', sheet);

            }
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
                <i tabIndex="0" ref={iconRef => this.iconRef = iconRef} className="fa fa-chevron-down" onClick={this.toggleDropdown} onKeyUp={this.handleKeyUp}></i>
                <ul  ref={dropdownRef => this.dropdownRef = dropdownRef} id='dropdown'  className={this.state.dropdown}>
                    <span className="li-cont">
                        <li className="drop-list-item">
                            <Link tabIndex="0" className="go-to-profile" to={`/users/${this.props.currentUser.id}/profile`}>Go to Profile</Link>
                        </li>
                        <li className="drop-list-item">
                            <button onClick={this.swapStyleSheet("/assets/main_accessibility.scss")}>Accessibility Mode</button>
                        </li>
                        <li className="drop-list-item">
                            <button onClick={this.swapStyleSheet("/assets/main.scss")}>Standard Style Mode</button>
                        </li>
                        <li className="drop-list-item">
                            <button onClick={this.props.logout}>Log Out</button>
                        </li>
                    </span>
                </ul>
            </span>

        );
        return( 
            <nav className="navbar">
   
                    <Link className="full-logo" to="/">
                        <img alt="logo" className="logo" src={window.logo} />
                      <h1 className="app-name" >OpenRes</h1>
                    </Link>

                {this.props.currentUser ? greeting() : sessionLinks()}
            </nav>
        );
    }
};

export default Navbar;