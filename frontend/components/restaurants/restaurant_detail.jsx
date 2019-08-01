import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantDetail = ({ restaurant }) => {
    
    return (
    <div className="rest-details">

            <h1>{restaurant.name}</h1>
            <hr/>
        <ul>
            <li>{restaurant.address}</li>
            <li>{restaurant.website}</li>
            <li>{restaurant.phone}</li>
        </ul>
        <hr />
        <p className="rest-description">{restaurant.description}</p>
        <Link to="/restaurants">All Restaurants</Link>
    </div>
    );
};

export default RestaurantDetail;