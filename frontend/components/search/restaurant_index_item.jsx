import React from 'react';
import { Link } from 'react-router-dom'

const RestaurantIndexItem = ({restaurant}) => {
    let reviewWord = "";
    let reviewNum = restaurant.numReviews.length !== 0 ? `(${restaurant.numReviews.length})` : ""; 
    if (restaurant.numReviews.length === 0){
        reviewWord = "No reviews yet!";
    }
    if (restaurant.average_rating <= 2 && restaurant.numReviews.length !== 0){
        reviewWord = "Not amazing";
    }
    if (restaurant.average_rating > 2 && restaurant.average_rating < 3){
        reviewWord = "Okay";
    }
    if (restaurant.average_rating >= 3 && restaurant.average_rating < 4) {
        reviewWord = "Good";
    }
    if (restaurant.average_rating >= 4 && restaurant.average_rating < 4.7) {
        reviewWord = "Awesome";
    }
    if (restaurant.average_rating >= 4.7) {
        reviewWord = "Exceptional";
    }
    return(
        <li className="index-li">
            {/* <div className="index-img"></div> */}
            <img className="index-img" src={restaurant.photoUrl} alt="" />
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