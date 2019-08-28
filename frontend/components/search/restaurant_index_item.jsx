import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantIndexItem = ({restaurant}) => {
    let reviewWord = "";
    let totalRating = 0
    restaurant.numReviews.forEach(review => {
        totalRating += parseInt(review[1])
    })
    let averageRating = totalRating/restaurant.numReviews.length * 1.0
    
    let reviewNum = restaurant.numReviews.length !== 0 ? `(${restaurant.numReviews.length})` : ""; 
    if (restaurant.numReviews.length === 0){
        reviewWord = "No reviews yet!";
    }
    if (averageRating <= 2 && restaurant.numReviews.length !== 0){
        reviewWord = "Not amazing";
    }
    if (averageRating > 2 && averageRating < 3){
        reviewWord = "Okay";
    }
    if (averageRating >= 3 && averageRating < 4) {
        reviewWord = "Good";
    }
    if (averageRating >= 4 && averageRating < 4.7) {
        reviewWord = "Awesome";
    }
    if (averageRating >= 4.7) {
        reviewWord = "Exceptional";
    }
    const styleWidth = (parseFloat(averageRating) / 5) * 100; 
    return(
        <li className="index-li">
            <img className="index-img" src={restaurant.photoUrl} alt="" />
            <div className="ind-details-cont">
                <Link className="ind-name" to={`/restaurants/${restaurant.id}`}>
                    {restaurant.name}
                </Link>
                <ul className="ind-details">
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
                        <p>{reviewWord}</p> &nbsp;
                        <p>{reviewNum}</p>
                    </span>
                    <p className="ind-address">{restaurant.address}</p>
                    <a className="ind-web" href="https://www.katzsdelicatessen.com/menu_and_local-delivery">{restaurant.website}</a>
                </ul>
            </div>

        </li>
    );
};

export default RestaurantIndexItem