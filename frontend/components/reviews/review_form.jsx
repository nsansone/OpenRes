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
                <h1>How was your experience at {this.props.restaurant.name}?</h1>

                <form className="review-form" onSubmit={this.handleSubmit}>
                   
                    <div className="label-cont">
                        <label className=""htmlFor="rating-value">Rating (1-5):</label>
                        <input id="rating-value"type="number" value={this.state.rating} onChange={this.update('rating')} />
                    </div>
                    <div className="body-cont">
                        <label>Write a review</label>
                    </div>
                    <textarea value={this.state.body} onChange={this.update('body')} id="review-body" cols="80" rows="12"></textarea>
                    <div className="review-submit">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default withRouter(ReviewForm);