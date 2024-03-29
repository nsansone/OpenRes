import React from 'react';
import { Link, Route } from 'react-router-dom';


const RestaurantDetail = ({ restaurant, reviews }) => {
    let totalRat = 0
    reviews.forEach( review => {
        totalRat += parseInt(review.rating)
    })
    
    let avgRate = totalRat/reviews.length * 1.0
    let avgRat = reviews.length === 0 ? "" : Math.round(avgRate * 10)/10.0;
    let revNum = reviews.length === 0 ? "No reviews yet!" : `${reviews.length} Reviews`
    let icon = reviews.length === 0 ? "" : (<i className="far fa-comment-alt fa-flip-horizontal"></i>)
    const styleWidth = (parseFloat(avgRate)/5)*100 

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
            <span className="show-review">
                <div className="header_stars" style={{ width: `${styleWidth}%` }}>
                    <div className="header_star">
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

                <p>{avgRat}</p>&nbsp;&nbsp;&nbsp;&nbsp;
                <p>{icon}</p>&nbsp;
                <p>{revNum}</p>
            </span>
            <p className="rest-description">{restaurant.description}</p>
            <Link to="/restaurants">All Restaurants</Link>

        </div>
    );
};
export default RestaurantDetail;