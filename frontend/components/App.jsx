
import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Modal from './modal';
import FindResSearch from './find_res_search/find_res_search';
import RestaurantIndexContainer from './restaurants/restaurant_index_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import SearchContainer from './search/search_container';
import Footer from './footer';

const App = () => (
    <>

        <Modal />
            <header className="main-header">
                <NavbarContainer />

            </header>
        <div className="all-content">
            <Switch>
                <Route exact path="/search_restaurants" component={ SearchContainer } />
                <Route exact path="/restaurants" component={ RestaurantIndexContainer } />
                <Route path="/restaurants/:restaurantId" component={ RestaurantShowContainer } />
                <Route exact path="/" component={ FindResSearch } />
    
            </Switch>
        </div>
        <Footer />
    </>
);

export default App;