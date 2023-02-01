import React from "react";
// import Rater from 'react-rater-plus'

// import Rater from 'react-rater'
// import 'react-rater/lib/react-rater.css'

import { Link } from 'react-router-dom';
import { Footer } from '../footer/footer';
import { BsStarFill } from "react-icons/bs";

class reviewCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user_id,
            restaurant_id: this.props.match.params.restaurantId,
            rating: 0,
            body: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.requestRestaurant(this.props.match.params.restaurantId);
        // debugger
    }

    // handleReviewCreate(){

    // }
    // handleRate () {
    //         this.setState({rating: this.state.rating})
    //     }

    update(field) {
        // debugger
        if (field === 'rating') {
            return e => this.setState({ [field]: parseInt(e.currentTarget.value) });
        } else {
            return e => this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state, this.props.restaurant.id)
            .then(() => this.props.history.push(`/restaurants/${this.props.restaurant.id}`));
    }

    ratingText() {
        switch (this.state.rating) {
            case 0:
                return "Select your rating";
            case 1:
                return "Not good";
            case 2:
                return "Could've been better";
            case 3:
                return "OK";
            case 4:
                return "Good";
            case 5:
                return "Great";
            default:
                break;
        }
    }

    render() {
        const { restaurant, currentUser, errors } = this.props;
        if (!restaurant) return null;
        // console.log(this.props)
        console.log(this.state)
        // console.log(Rater.rating)
        console.log(currentUser)
        // console.log(e.currentTarget.value)
        // console.log(restaurant.name)
        // console.log(review)
        // debugger

        let errorsList;
        if (errors.length || this.state.rating === 0) {
            errorsList = errors.responseJSON
        } else {
            errorsList = null;
        };

        return (
            <div className="review-form-container">
                <div className="review-form-container-header">
                    <Link to="/">
                        <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='logo' />
                    </Link>

                    <div className="create-form-user-container">
                    <h2 className="create-form-welcome-user">Welcome, {currentUser.username}!</h2>
                    </div>
                </div>

                <div className="review-form-name">{restaurant.name}</div>
                <div className="review-form-container-body">
                    <form  onSubmit={this.handleSubmit}>
                    <div className="review-form-container-body-form">
                        <div className="create-form-stars">
                            <div className="create-form-stars-container">
                                <input id="rating-1" type="radio" value="5" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-1" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-2" type="radio" value="4" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-2" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-3" type="radio" value="3" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-3" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-4" type="radio" value="2" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-4" id="create-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-5" type="radio" value="1" onChange={this.update('rating')} name="rating" />
                                <label htmlFor="rating-5" id="create-review-form-rating"><BsStarFill className="review-star" /></label>
                            </div>
                            <div className="select-your-rating">{this.ratingText()}</div>
                        </div>
                        
                        <textarea className="create-review-form-textarea" onChange={this.update('body')} placeholder="Love this speakeasy for drinks and light bites. Be prepared to wait for a bit (you can get a drink at the upstairs bar) but its so worth it. The atmosphere is amazing and the decor is very cool with lots of plants. We all got the illusion, which is delicious and gorgeous (it changes color and they use light leaks in the table to make it glow)." required></textarea>
                    </div>
                        <p className="create-review-errors">{errorsList}</p>
                        <button className="review-form-button">Post Review</button>
                    </form>
                </div>

                <div className="review-create-container-footer">
                    <Footer />
                </div>

            </div>
        );
    }
}

export default reviewCreate;





{/* <div className="star">
                     <Rater total={5} onRate ={this.update('rating')} interactive={true}/> 
            </div> */}

{/* <div
                onClick={this.update('rating')}>
                    <Rater total={5} rate={this.state.rating} onRate={this.handleRate.bind(this)}/>
                </div> */}