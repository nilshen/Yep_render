import React from "react";
import { Link } from 'react-router-dom';
import {Footer} from '../footer/footer'
import Search_bar_container from "../search_bar/search_bar_container";
import Rater from 'react-rater'
import ReviewIndexContainer from '../review/review_index_container'
import { BsStarFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { BsLink45Deg } from "react-icons/bs";
import { BsTelephoneForward } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";


class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // this.props.requestRestaurant(this.props.match.params.restaurantId)
        this.props.requestRestaurant(this.props.restaurantId)
        window.scrollTo(0,0)
    }

    // componentDidUpdate(prevProps) {
    //     this.props.requestRestaurant(this.props.restaurantId)
    //     // if (prevProps.restaurantId !== this.props.restaurantId) {
    //     //     this.componentDidMount();
    //     // }
    // }

    render() {
        
        // debugger
        const { restaurant, currentUser,logout } = this.props

        if (!(restaurant && restaurant.reviews)) return null;

        // debugger
        // console.log(currentUser)
        // console.log(currentUser.username)
        // console.log(restaurant)

        let session = currentUser ? (  
            <div className="header-show">
              <h2 className="header-name-show">Welcome, {currentUser.username}!</h2>
              <button className="header-button" onClick={logout}>Log Out</button>
            </div>
            ) : (
              <div>
              <header className='header-show'>
        
              <nav className="header-right-show">
                    <Link to="/login" style={{ textDecoration: 'none' }} className='login-font-show'>Log In</Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }} className='login-font-show'>Sign Up</Link>
                  </nav>
              </header>
              </div>
            )
                
            // overallrating for restaurant
            let rating = 0;
            const reviews = this.props.restaurant.reviews
            reviews.map((review)=>(
                rating += review.rating
                ))
            let overallRating = Math.round(rating / reviews.length)

        return (
            
        <div className="show-page-container">
            <div className="show-header">
                <div className="show-header-item" >
                    <Link to="/">
                        <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='show-logo' />
                    </Link>
                </div>
                <div className="show-header-item">
                    <Search_bar_container/>
                </div>
                <div className="show-header-session">
                    {session}
                </div>
            </div>
                
                <div className="show-body-pic">
                    <div className="show-pics">
                        {restaurant.photoUrls.map((photo, idx) =>(
                            <img key={idx} src={photo} className="show-pic"/>
                        ))} 
                    </div>
                    <div className="show-body-info">
                        <div className="show-body-info-name">{restaurant.name}</div>
                    
                        <div className="show-body-review">
                            <div className='rating-star-indexItem'><Rater total={5} rating={overallRating} interactive={false}/></div>
                            <div className='reviews-length'>{restaurant.reviews.length} reviews</div>
                        </div>
                            
                        <div className="show-body-cat">
                                <div className="show-claimed"><BsFillCheckCircleFill/></div> 
                                <div className="show-claimed">Claimed</div>
                                <div className="show-money"> • {restaurant.price} • </div> 
                                <div className="show-cat">{restaurant.category}</div>
                        </div>
                            
                        <div className="show-hour">{restaurant.hours}</div>
                    </div>
                </div>

                <div className="show-body">
                        <Link to={`/restaurants/${restaurant.id}/reviews/new`} style={{ textDecoration: 'none' }}> 
                            <button className="show-body-reviewButton"><BsStarFill className="show-header-item-star"/> <p className="show-header-item-text">Write a Review</p></button>
                        </Link>  
                        
                        <div className="show-body-otherinfo">
                            <a className="show-body-website" href={restaurant.website} target="_blank">{restaurant.website}<BsLink45Deg/></a>  
                            <div className="show-body-phone">{restaurant.phone_number}<BsTelephoneForward/></div>
                            <div className="show-body-address">{restaurant.address}</div>
                            <div className="show-body-address">{restaurant.city}, {restaurant.state}, {restaurant.zip_code}<BsFillPinMapFill/></div>
                        </div>
                </div>

                    
                <div className="show-reviews">
                    <div className="show-each-review">
                        <ReviewIndexContainer restaurant={restaurant}/>
                    </div>
                </div>

                <div>
                    <Footer/>
                </div>
            </div> 
        
        );
    }
}

export default RestaurantShow;