import React from 'react';
import { Link } from 'react-router-dom';
// import Rater from 'react-rater-plus'
import Rater from 'react-rater'
// import theme from './mytheme.css'
// import { BsStarFill } from "react-icons/bs";
import { BsFillChatRightDotsFill } from "react-icons/bs"

class RestaurantIndexItem extends React.Component {
    constructor (props) {
        super(props)
      
    }

    componentDidMount () {
        this.props.requestReviews(this.props.restaurant.id)
       
    }

 

        render() { 
            
            // if (!this.props.restaurant.reviews) return null;
            const {restaurant, idx} = this.props;
            // debugger

            let rating = 0;
            let reviews = this.props.restaurant.reviews
            reviews.map((review)=>(
                rating += review.rating
                ))
            let overallRating = Math.round(rating / reviews.length)
            
            const starStyle = {
                backgroundColor: "gold",
            }


        return (
            <div>
        
                <Link to={`/restaurants/${restaurant.id}`} className="index-item" style={{ textDecoration: 'none' }}>
                <div className='index-item-container'>
        
                    <img className='index-pic' src={restaurant.photoUrls[0]} />
        
                    <div className='index-item-individual'>
                        <div className='index-item-namefont'> {idx}. {restaurant.name}</div>
                        <div className='index-item-individual-rating'>
                        <div className='rating-star-indexItem'><Rater total={5} rating={overallRating} interactive={false}/></div>
                        <div className='reviews-length'>{restaurant.reviews.length} reviews</div>
                        </div>
                        <br />
                        <div className='index-item-individual-details'>
                            <Link to={`restaurants/search/${restaurant.category}`} className='index-item-individual-details-cat-button'>
                                <button className='index-item-individual-details-cat'>{restaurant.category}</button>
                            </Link>
                            <div className='index-item-individual-details-dollar'>{restaurant.price}</div>
                        </div>
                        
                        <div className="index-item-individual-hour">Hours: {restaurant.hours}</div>
                        <br/>

                        <div className='index-item-comment'>
                        <BsFillChatRightDotsFill/>
                        <div className='review-body'>
                            {restaurant.reviews[0].body}
                        </div>
                        </div>

                    </div>
                </div>
                {/* <br /> */}
                </Link>
            </div>
        );
        // debugger
    }
}


export default RestaurantIndexItem