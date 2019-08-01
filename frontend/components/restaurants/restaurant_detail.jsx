import React from 'react';

const RestaurantDetail = ({ restaurant }) => {
    
    return (
    <div className="rest-detail">

            <h1>{restaurant.name}</h1>
        <ul>
            <li>{restaurant.address}</li>
            <li>{restaurant.website}</li>
            <li>{restaurant.phone}</li>
        </ul>
    </div>
    );
};

export default RestaurantDetail;