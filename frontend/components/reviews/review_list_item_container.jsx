import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = ({ entities: { users } }, { review }) => {   
    return {
            author: users[review.author_id]
            };
};



const Review = ({ review, author }) => {
    const { rating, body } = review;
    const colors = ["#6C8AE4", "#BB6ACD", "#D86441", "#DF4E96"]
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    const styleWidth = (parseFloat(review.rating) / 5) * 100; 
    return (
        <div className="review-cont">
            <div className="review">
                <div className="review-left">
                    <p style={{ background: `${randColor}`}} className="user-icon">{author.fname.slice(0,1).toUpperCase()}</p>
                    <p className="user-fname">{author.fname}</p>
                </div>
                <div className="review-right">
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

