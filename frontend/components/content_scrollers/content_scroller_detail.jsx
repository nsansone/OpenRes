import React from 'react';
import { Link } from 'react-router-dom'

const ContentScrollerDetail = ({ restaurant }) => {
    let totalRating = 0
    restaurant.numReviews.forEach(review => {
        totalRating += parseInt(review[1])
    })
    let averageRating = totalRating / restaurant.numReviews.length * 1.0
    const styleWidth = (parseFloat(averageRating) / 5) * 100; 
    return (
        <li className="scroll-li">
            <img className="scroll-img" src={restaurant.photoUrl} alt="" />
            <div className="scroll-details-cont">
                <Link className="scroll-name" to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                </Link>
                <ul className="scroll-details">
                    <span className="show-review">
                        <div className="header_stars" style={{ width: `${styleWidth}%` }}>
                            <div className="home-header_star">
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
                            </div>
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