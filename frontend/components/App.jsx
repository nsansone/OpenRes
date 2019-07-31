
import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal';
import FindResSearch from './find_res_search/find_res_search';


const App = () => (
    <div>
        <Modal />
        <header className="main-header">
            
            <NavbarContainer />

        </header>
        <FindResSearch />



        {/* <AuthRoute path="/signup" component={SignupFormContainer}/>
        <AuthRoute path="/login" component={LogInFormContainer}/> */}

    </div>
);

export default App;