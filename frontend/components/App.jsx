import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';


const App = () => (
    <div>
        <header>
            <h1>OpenRes</h1>
            <HomepageContainer />
        </header>

        <Route path="/login" component={LogInFormContainer}/>
        <Route path="/signup" component={SignupFormContainer}/>

    </div>
);

export default App;