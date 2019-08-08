import React from 'react';
import { Link } from 'react-router-dom'

const ContentScrollerDetail = ({ restaurant }) => {
    const styleWidth = (parseFloat(restaurant.average_rating) / 5) * 100; 
    return (
        <li className="scroll-li">
            <img className="scroll-img" src={restaurant.photoUrl} alt="" />
            <div className="scroll-details-cont">
                <Link className="scroll-name" to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                </Link>
                <ul className="scroll-details">
                    <span className="show-review">
                        <div className="homepage-header_stars" style={{ width: `${styleWidth}%` }}>
                            <a href="#" className="header_star">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                <div className="star_hover" style={{ width: `${styleWidth}%` }}>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                        <p>{restaurant.numReviews.length} Reviews</p>
                    </span>
                    <p className="scroll-address">{restaurant.address}</p>
                </ul>
            </div>
        </li>
    );
};

export default ContentScrollerDetail;