import React from 'react';

const FindResSearch = () => {

    return (
        <span className="home-search-container">
            <div className="splash-img"></div>
            <form className="find-res-search">
                <h1>Find your table for any occasion</h1>
                <div className="res-detail-container">
                    <div className="res-detail">
                        <input placeholder="Jul 31, 2019" type="text"/>
                    </div>
                    <div className="res-detail">
                        <input placeholder="7:00 PM" type="text"/>
                    </div>
                    <div className="res-detail">
                        <input placeholder="2 people" type="number"/>
                    </div>
                </div>
                <div className="search-bar">
                    <input placeholder="Manhattan" type="text"/>
                </div>
                <div className="res-search-submit">
                    <input type="submit" value="Let's go"/>
                </div>

            </form>
        </span>
    )
}


export default FindResSearch;