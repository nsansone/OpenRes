import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {
    
    return (
    <div className="rest-details">

            <h1>{restaurant.name}</h1>
            <hr/>
        <ul>
            <li>{restaurant.address}</li>
                &nbsp;
            <li>{restaurant.website}</li>
                &nbsp;
            <li>{restaurant.phone}</li>
        </ul>
        <hr />
        <span className="avg-review">
            <ul className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </ul>
            <p>Awesome (3610)</p>
        </span>
        <p className="rest-description">{restaurant.description}</p>
        <Link to="/restaurants">All Restaurants</Link>
    </div>
    );
};

export default RestaurantDetail;