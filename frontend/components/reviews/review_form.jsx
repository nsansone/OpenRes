import React from 'react';
import { withRouter } from 'react-router-dom';
class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToShow = this.goToShow.bind(this);
    }
    goToShow() {
        const url = `/restaurants/${this.props.match.params.restaurantId}`
        this.props.history.push(url);
    }
    handleSubmit(e) {
        e.preventDefault();
        const restaurantId = parseInt(this.props.match.params.restaurantId);
        const review = Object.assign({}, this.state, { restaurant_id: restaurantId });
        this.props.createReview(review);
        this.goToShow();
    }
    update(field) {
        return (e) => {
            this.setState({ [property]: e.target.value });
        }
    }
    render() {
        return (
            <div className="review-form">
                <h1>How was your experience at </h1>
                <form onSubmit={this.handleSubmit}>
                    <span className="star-rating">
                        <input id='rating-input-1-5' type="radio" className='rating-input' />
                        <label htmlFor='rating-input-1-5' className='rating-star'></label>
                        <input id='rating-input-1-4' type="radio" className='rating-input' />
                        <label htmlFor='rating-input-1-4' className='rating-star'></label>
                        <input id='rating-input-1-3' type="radio" className='rating-input' />
                        <label htmlFor='rating-input-1-3' className='rating-star'></label>
                        <input id='rating-input-1-2' type="radio" className='rating-input' />
                        <label htmlFor='rating-input-1-2' className='rating-star'></label>
                        <input id='rating-input-1-1' type="radio" className='rating-input' />
                        <label htmlFor='rating-input-1-1' className='rating-star'></label>

                    </span>
                </form>
            </div>
        )
    }
}
export default withRouter(ReviewForm);