
import ReactStars from 'react-stars'
import React from 'react';
import { withRouter } from 'react-router-dom';
class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToShow = this.goToShow.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
    }
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId)
    }

    goToShow() {
        this.props.history.push(`/restaurants/${this.props.match.params.restaurantId}`);
    }
    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state, { restaurant_id: parseInt(this.props.match.params.restaurantId) });
        this.props.createReview(review).then(this.goToShow);
    }
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }
    ratingChanged(newRating) {
        this.setState({ rating: `${newRating}` })
    }

    
    render() {
        return (
            <div className="review-form-cont">
                <h1>How was your experience at {this.props.restaurant.name}?</h1>

                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="label-cont">
                        <label tabIndex="0" className="" htmlFor="rating-value">Rating:
                            <ReactStars
                                tabIndex="0"
                                className="react-stars"
                                count={5}
                                onChange={this.ratingChanged}
                                size={24}
                                value={parseInt(this.state.rating)}
                                color1={'lightgray'}
                                color2={'#DA3743'} />
                    </label>   
                    </div>
                    <div className="body-cont">
                        <label>Write a review</label>
                    </div>
                    <textarea value={this.state.body} onChange={this.update('body')} id="review-body" cols="80" rows="12"></textarea>
                    <div className="review-submit">
                        <input className="review-submit-input" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(ReviewForm);