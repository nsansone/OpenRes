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
    render() {
        return (
            <div className="review-form-cont">
                <h1>How was your experience at {this.props.restaurant.name}</h1>
                {/* <div className="star-div"></div> */}
                <form className="review-form" onSubmit={this.handleSubmit}>
                    {/* <span className="star-rating">
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
                    </span> */}
                <label className=""htmlFor="rating-value">Rating (1-5)</label>
                <input id="rating-value"type="number" value={this.state.rating} onChange={this.update('rating')} />
                {/* <label> Would you recommend to a friend
                    <input id='rating-input-yes' type="radio" />
                    <label htmlFor='rating-input-yes' >yes</label>
                    <input id='rating-input-no' type="radio"  />
                    <label htmlFor='rating-input-no' >no</label>
                </label> */}
                <label htmlFor="review-body">Write a review</label>
                    <textarea value={this.state.body} onChange={this.update('body')} id="review-body" cols="80" rows="12"></textarea>
                {/* <input onChange={this.update('body')} value={this.state.body} id="review-body" type="textarea" /> */}
                <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default withRouter(ReviewForm);