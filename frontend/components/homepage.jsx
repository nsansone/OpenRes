import React from 'react';
import { Link } from 'react-router-dom';
import ContentScrollerContainer from './content_scrollers/content_scroller_container';
import SearchBar from './search/search_bar';

const Homepage = () => {

    return (
        <div className="homepage-cont">
            <span className="home-search-container">
                <img className="first" src="https://resizer.otstatic.com/v2/photos/wide-huge/25160340.jpg" alt="generic background image"/>
                <img className="second" src="https://resizer.otstatic.com/v2/photos/wide-huge/25161502.jpg" alt="generic background image"/>
                <img className="third" src="https://resizer.otstatic.com/v2/photos/wide-huge/25160669.jpg" alt="generic background image"/>
                <div className="splash-img"></div>
                <form className="find-res-search">
                    <h1>Find your table for any occasion</h1>
                    <div className="res-detail-container">
                        <div className="res-detail">
                            <i className="far fa-calendar"></i>
                            <input placeholder="Jul 31, 2019" type="text"/>
                        </div>
                        <div className="res-detail">
                            <i className="far fa-clock"></i>
                            <input placeholder="7:00 PM" type="text"/>
                        </div>
                        <div className="res-detail">
                            <i className="far fa-user"></i>
                            <input placeholder="2 people" type="number"/>
                        </div>
                    </div>
                    <SearchBar page="homepage" />
                </form>
            </span>
            <ContentScrollerContainer />
    </div >
    )
}


export default Homepage;