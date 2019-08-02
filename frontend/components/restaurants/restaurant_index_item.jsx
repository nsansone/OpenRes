import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantIndexItem = ({restaurant}) => {
    return(
        <li className="index-li">
            <div className="index-img"></div>
            <div className="ind-details-cont">
                <Link className="ind-name" to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                </Link>
                <ul className="ind-details">
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
                    <p className="ind-address">{restaurant.address}</p>
                    <a className="ind-web" href="https://www.katzsdelicatessen.com/menu_and_local-delivery">{restaurant.website}</a>

                </ul>
            </div>

        </li>
    );
};

export default RestaurantIndexItem