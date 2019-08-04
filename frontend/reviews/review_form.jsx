import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 5,
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToShow = this.goToShow.bind(this);
    }

    goToShow(){
        const url = `/restaurants/${this.props.match.params.restaurantId}`
        this.props.history.push(url);
    }

    handleSubmit(e){
        e.preventDefault();
        const restaurantId = parseInt(this.props.match.param.restaurantId);
        const review = Object.assign({}, this.state, { restaurant_id: restaurantId });
        this.props.createReview(review);
        this.goToShow();
    }

    update(field){
        return (e) => {
            this.setState({ [property]: e.target.value });
        }
    }

    render(){
        return (
            <div className="review-form">
                <form onSubmit={this.handleSubmit}>

                </form>
            </div>
        )
    }

}

export default withRouter(ReviewForm);