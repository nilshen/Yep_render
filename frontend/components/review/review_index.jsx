import React from "react";
import ReviewIndexItem from "./review_index_item";


class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // restaurant being passed down from show page
        this.props.requestReviews(this.props.restaurant.id)
    }

    render() {

        //if no current user, this will allow reviews to still render
        let checkCurrentUser;
        if (this.props.currentUser) {
            checkCurrentUser = this.props.currentUser
        } else {
            checkCurrentUser = {};
        }

        // console.log(checkCurrentUser);

        const { reviews, updateReview, deleteReview, currentUser, requestReview, restaurant } = this.props;

        if (!reviews) return null;
        // console.log(reviews)

        return (
            <div>
                <h3 className="review-item-container">Recommended Reviews</h3>
                <div>
                    {reviews.map(review => (
                        <ReviewIndexItem review={review} key={review.id} updateReview={updateReview} deleteReview={deleteReview} currentUser={checkCurrentUser} restaurant={restaurant} requestReview={requestReview} />
                    ))}
                </div>
            </div>
        )
    }
};


export default ReviewIndex;