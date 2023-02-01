import React from "react";
import { BsPersonSquare } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi"
import Rater from 'react-rater'

class ReviewIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEllipsis = this.handleEllipsis.bind(this);
    }


    handleDelete(e) {
        debugger
        e.preventDefault();
        this.props.deleteReview(this.props.review.id, this.props.review.restaurant_id)
            // .then(() => window.location.reload())
    }

    handleEllipsis(e) {
        this.setState({ display: !this.state.display })
    }


    checkCurrentUser() {
        if (!this.props.currentUser || this.props.currentUser.id !== this.props.review.user_id) {
            return "hidden-ellipsis"
        }
    }

    


    render() {
        // console.log(this.props);
        // console.log(this.props.reivew)

        if (!this.props.review) return null;
        if (!this.props.currentUser) return null;
        
        const { review, currentUser, updateReview, deleteReview, restaurant } = this.props;


        let editReviewButton;
        let deleteReviewButton;
        if (currentUser.id === review.user_id) {
            editReviewButton = <Link to={`/restaurants/${review.restaurant_id}/reviews/${review.id}/edit`} className="hidden-review-link-1">Edit Review</Link>;
            deleteReviewButton = <button onClick={this.handleDelete} className="hidden-review-link-2">Delete Review</button>;
        } else if (!currentUser) {
            editReviewButton = null;
            deleteReviewButton = null;
        }


        return(

            <div>
                <div className="review-item-container">
                    <div className="review-item-header">
                        <div className="review-item-profile-container">
                            <div className="review-item-user-icon"><BsPersonSquare /></div>
                            <div className="review-item-users-name">{review.username}</div>
                        </div>
                        
                        <div id={this.checkCurrentUser()} className="review-ellipsis-container">
                        <FiEdit onClick={this.handleEllipsis} className="review-ellipsis" />
                            { this.state.display ? (
                            <div className="review-links-container">
                                    {editReviewButton}
                                    {deleteReviewButton}
                                </div>
                            ) : 
                            null
                        }
                    </div>
                </div>
                        

                    <div className="review-item-rating">
                        <p><Rater rating={review.rating} interactive={false}/></p>
                        
                    </div>

                    <div className="review-item-body-container">
                        <p className="review-item-body">{review.body}</p>
                    </div>

                </div>
            </div>
        )
    }
};


export default ReviewIndexItem;