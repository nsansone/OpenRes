import React from 'react';
import { Link, Route } from 'react-router-dom';
import ReviewListItemContainer from '../reviews/review_list_item_container';
import ReviewFormContainer from '../reviews/review_form_container';
// const reviewList = (reviews) => (
//     reviews.map(review => (
//         <ReviewListItemContainer review={review} key={review.id} />
//     ))
// );
const RestaurantDetail = ({ restaurant, reviews }) => {
    return (
        <div className="rest-details">
            <h1>{restaurant.name}</h1>
            <hr />
            <ul>
                <li>{restaurant.address}</li>
                &nbsp;&nbsp;
            <li>{restaurant.website}</li>
                &nbsp;&nbsp;
            <li>{restaurant.phone}</li>
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
            {/* <h2>What {reviews.length} People Are Saying</h2> */}
            {/* <ReviewLink component={ReviewFormContainer} to={`/restaurants/${restaurant.id}/review`} label="Leave a Review" /> */}
            {/* <Link to={`/restaurants/${restaurant.id}/review`}>Leave a review</Link>
            <hr />
            {reviewList(reviews)} */}
            {/* <ReviewFormContainer /> */}
        </div>
    );
};
export default RestaurantDetail;