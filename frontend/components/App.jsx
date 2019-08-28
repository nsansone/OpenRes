
import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SignupFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import Modal from './modal';
import Homepage from './homepage'
import RestaurantIndexContainer from './search/restaurant_index_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import SearchContainer from './search/search_container';
import Footer from './footer';
import ReviewFormContainer from './reviews/review_form_container';
import ProfileContainer from './profile/profile_container';
import UpdateResContainer from './reservations/update_res_container';

const App = () => (
    <div>

        <Modal />
            <header className="main-header">
                <NavbarContainer />

            </header>
        <div className="all-content">
            <Switch>
                <Route exact path="/search_restaurants" component={ SearchContainer } />
                <Route exact path="/restaurants" component={ SearchContainer } />
                <Route exact path="/restaurants/:restaurantId" component={ RestaurantShowContainer } />
                <Route exact path="/restaurants/:restaurantId/review"
                    component={ReviewFormContainer} /> 
                <Route exact path="/users/:sessionId/profile/:reservationId/edit" component={ UpdateResContainer } />    
                <Route exact path="/users/:sessionId/profile" component={ ProfileContainer }/>
                <Route exact path="/" component={ Homepage } />
    
            </Switch>
        </div>
        <Footer />
    </div>
);

export default App;