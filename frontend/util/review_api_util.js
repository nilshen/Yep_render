export const fetchReviews = (restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews`,
        method: 'GET'
    });

};

export const fetchReview = (restaurantId, reviewId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews/${reviewId}`,
        method: 'GET'
    });

};

export const createReview = (review, restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews/`,
        method: 'POST',
        data: { review }
    });
};

export const updateReview = (review, restaurantId) => (
    $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews/${review.id}`,
        method: 'PATCH',
        data: { review }
    })
);

export const deleteReview = (reviewId, restaurantId) => {
    return $.ajax({
        url: `/api/restaurants/${restaurantId}/reviews/${reviewId}`,
        method: 'DELETE',
    });
};