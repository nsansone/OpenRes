import { connect } from 'react';
import { createReview } from '../actions/restaurant_actions';
import ReviewForm from './review_form';

const mapDispatchToProps = dispatchEvent => ({
    createReview: review => dispatchEvent(createReview(review))
});

export default connect(
    null,
    mapDispatchToProps
)(ReviewForm);