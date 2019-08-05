import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = ({ entities: { users } }, { review }) => {    
    return {
            author: users[review.author_id]
            };
};

const Review = ({ review, author }) => {
    const { rating, body } = review;
    return (
        <div className="review-cont">
            <div className="review">
                <p className="review-left">
                    <p className="user-icon">N</p>
                    <p className="user-fname">Nicole</p>
                </p>
                <div className="review-right">
                    <span className="avg-review">
                        <ul className="stars">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </ul>
                        <p>{rating} stars out of 5</p>
                    </span>
                    <p className="review-body">{body}</p>
                </div>
            </div>
            <hr/>
        </div>  
    );
};


export default connect(mapStateToProps)(Review);

