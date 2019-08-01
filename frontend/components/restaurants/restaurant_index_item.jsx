import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantIndexItem = ({restaurant}) => {
    return(
        <li>
            <Link to={`/restaurants/${restaurant.id}`}>
                {restaurant.name}
            </Link>
                {restaurant.address}
                {restaurant.website}

        </li>
    );
};

export default RestaurantIndexItem