import React from 'react';
import { Link } from 'react-router-dom';

const ResIndexItem = (props) => {
    let deleteButton;
    if (props.deleteReservation) {
        deleteButton = <div>
                            <button className="res-buttons" onClick={() => props.deleteReservation(props.reservation.id)}>Cancel</button>
                            <Link className="res-buttons" to={`/users/${props.currentUser.id}/profile/${props.reservation.id}/edit`}>Modify</Link>
                        </div >
    } else {
        deleteButton = (<div className="leave-review"> 
                            <i className="far fa-comment-alt"></i>
                            <Link className="review-link" to={`/restaurants/${props.restaurant.id}/review`}>Write Review</Link>
                        </div>)
    }

    const dateArr = props.reservation.date.split("-")
    const date = dateArr[1].concat("/").concat(dateArr[2]).concat("/").concat(dateArr[0])
    return (
        <li className="res-item">
            <Link to={`/restaurants/${props.restaurant.id}`}>
                <img className="res-index-img" src={props.restaurant.photoUrl} alt="" />
            </Link>
            
            <ul className="res-ind-details-cont">
                <Link className="res-ind-name" to={`/restaurants/${props.restaurant.id}`}>
                    {props.restaurant.name}
                </Link>
                    <p>Table for {props.reservation.party_size} people.</p>
                    <p>{date}</p>
                    {deleteButton}
            </ul>

        </li>
    );
};

export default ResIndexItem;