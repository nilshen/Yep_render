import React from "react";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { Footer } from '../footer/footer';

class ReviewEdit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            rating: 0,
            body: '',
            user_id: '',
            restaurant_id: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.checkState = this.checkState.bind(this);
    };

    componentDidMount() {
        this.props.requestReview(this.props.match.params.restaurantId, this.props.match.params.reviewId)
            .then((e) => this.checkState());

        this.props.requestRestaurant(this.props.match.params.restaurantId);
    };

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState( this.props.review )
        }
    }

    checkState(e) {
        this.setState({
            id: this.props.review.id,
            body: this.props.review.body,
            rating: this.props.review.rating,
            user_id: this.props.user_id,
            restaurant_id: this.props.restaurant_id
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateReview(this.state, this.props.restaurantId)
            .then(() => this.props.history.push(`/restaurants/${this.props.restaurant.id}`))
    };

    handleLogout(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => this.props.history.push(`/restaurants/${this.props.restaurant.id}`))
    }

    update(field) {
        if (field === 'rating') {
            return e => this.setState({ [field]: parseInt(e.currentTarget.value) })
        } else {
            return e => this.setState({ [field]: e.currentTarget.value })
        }
    };

    checkedText() {
        switch (this.state.rating) {
            case 1:
                return "Not good"
            case 2:
                return "Could've been better"
            case 3:
                return "OK"
            case 4:
                return "Good"                
            case 5:
                return "Great"                
            default:
                break;
        }
    }



    render() {
        console.log(this.props);
        
        if (!this.props.review) return null;
        if (!this.props.restaurant) return null;
        
        const { review, restaurant, restaurantId, reviewId, currentUser, errors } = this.props;
        


        
        return(
            <div className="review-form-container">

                
                <div className="review-form-container-header">
                    <Link to="/">
                        <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='logo' />
                    </Link>
                    <div className="edit-form-user-container">
                        <h2 className="header-name-show">Welcome, {currentUser.username}!</h2>
                        <button onClick={this.handleLogout} className="header-button">Log Out</button>
                    </div>
                </div>


                    <div className="review-form-name">{restaurant.name}</div>
                    <div className="review-form-container-body">
                    <form  onSubmit={this.handleSubmit}>
                        <div className="review-form-container-body-form">
                        <div className="create-form-stars">

                            <div className="create-form-stars-container">
                                <input id="rating-1" type="radio" value="5" onChange={this.update('rating')} name="rating" checked={this.state.rating === 5 ? true : false}/>
                                <label htmlFor="rating-1" id="edit-review-form-rating"><BsStarFill className="review-star"/></label>

                                <input id="rating-2" type="radio" value="4" onChange={this.update('rating')} name="rating" checked={this.state.rating === 4 ? true : false}/>
                                <label htmlFor="rating-2" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-3" type="radio" value="3" onChange={this.update('rating')} name="rating" checked={this.state.rating === 3 ? true : false}/>
                                <label htmlFor="rating-3" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-4" type="radio" value="2" onChange={this.update('rating')} name="rating" checked={this.state.rating === 2 ? true : false}/>
                                <label htmlFor="rating-4" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>

                                <input id="rating-5" type="radio" value="1" onChange={this.update('rating')} name="rating" checked={this.state.rating === 1 ? true : false}/>
                                <label htmlFor="rating-5" id="edit-review-form-rating"><BsStarFill className="review-star" /></label>
                            </div>
                            <div className="select-your-rating">{this.checkedText()}</div>
                        </div>

                        <textarea className="create-review-form-textarea" onChange={this.update('body')} defaultValue={`${this.state.body}`} required />
                    
                        </div>
                        <button type="submit" className="review-form-button">Edit Review</button>
                    </form>
                    </div>
                <div className="review-create-container-footer">
                    <Footer />
                </div>
                
            </div>
        )
    }
};


export default ReviewEdit