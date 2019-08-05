export const selectRestaurant = ({ restaurants }, restaurantId) => {
    return restaurants[restaurantId] || { reviewIds: [] };
};

export const selectReviewsForRestaurant = ({ restaurants, reviews }, restaurant) => {
    return restaurant.reviewIds.map(reviewId => reviews[reviewId]);
};

export const asArray = ({ restaurants }) => (
    Object.keys(restaurants).map(key => restaurants[key])
);