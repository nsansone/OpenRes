import React from 'react';
import RestaurantDetail from './restaurant_detail';
import ResForm from './res_form';
import RestaurantMap from '../restaurant_map/restaurant_map';
import { Link, Route } from 'react-router-dom';
import ReviewListItemContainer from '../reviews/review_list_item_container';



class RestaurantShow extends React.Component {
    componentDidMount() {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.restaurantId != this.props.match.params.restaurantId){
            this.props.fetchRestaurant(this.props.match.params.restaurantId);
        }
    }
  

    render(){
        const { restaurant, reviews } = this.props;
        const reviewList = (reviews) => (
            reviews.map(review => (
                <ReviewListItemContainer review={review} key={review.id} />
            ))
        );
      
        
     

        return (
            <div className="show-cont">
                <img className="rest-background" src={restaurant.photoUrl} alt="" />
                <div className="show-body">
                    <main className="show-main">
                        <RestaurantDetail restaurant={restaurant} reviews={reviews} />
                        <h2>What {reviews.length} People Are Saying</h2>
                        
                        <Link to={`/restaurants/${restaurant.id}/review`}>Leave a review</Link>
                        <hr />
                        {reviewList(reviews)}
                        {/* <ReviewFormContainer /> */}
                    </main>
                    <aside>
                        <div className="res-form-cont">

                            <ResForm />
                        </div>
                            <RestaurantMap />
                    </aside>
                </div>
            </div>
        )
    }

              
 
}

export default RestaurantShow;