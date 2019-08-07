import React from 'react';
import { Link, Route } from 'react-router-dom';


const RestaurantDetail = ({ restaurant, reviews }) => {
    return (
        <div className="rest-details">
            <h1>{restaurant.name}</h1>
            <hr />
            <ul>
                <li><i className="far fa-map"></i>{restaurant.address}</li>
                &nbsp;&nbsp;
                <li><i className="fas fa-external-link-alt"></i>{restaurant.website}</li>
                &nbsp;&nbsp;
                <li><i className="fas fa-phone"></i>{restaurant.phone}</li>
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