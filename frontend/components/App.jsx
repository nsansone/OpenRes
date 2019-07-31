
import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal';


const App = () => (
    <div>
        <Modal />
        <header className="main-header">
            
            <HomepageContainer />

        </header>
        <span className="home-search-container">
            <div className="splash-img"></div>
            <p>Find your table for any occasion</p>
        </span>
        <hr/>
        <h1>Popular restaurants in Manhattan</h1>
        <hr/>
        <span className="pop-rests">
            
        </span>
        <h1>Top Cuisines near Manhattan</h1>
        <hr/>


        {/* <AuthRoute path="/signup" component={SignupFormContainer}/>
        <AuthRoute path="/login" component={LogInFormContainer}/> */}

    </div>
);

export default App;