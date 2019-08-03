import React from 'react';
import { Link } from 'react-router-dom'

const ContentScrollerDetail = ({ restaurant }) => {
    return (
        <li className="scroll-li">
            <img className="scroll-img" src={restaurant.photoUrl} alt="" />
            <div className="scroll-details-cont">
                <Link className="scroll-name" to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                </Link>
                <ul className="scroll-details">
                    <span className="scroll-review">
                        <ul className="star">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </ul>
                        <p>Awesome (3610)</p>
                    </span>
                    <p className="scroll-address">{restaurant.address}</p>

                </ul>
            </div>

        </li>
    );
};

export default ContentScrollerDetail;