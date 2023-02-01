import React from 'react';
import { Link } from 'react-router-dom';
// import Rater from 'react-rater-plus'
import Rater from 'react-rater'
// import theme from './mytheme.css'
// import { BsStarFill } from "react-icons/bs";
import { BsFillChatRightDotsFill } from "react-icons/bs"

class HomepageIndexItem extends React.Component {
    constructor (props) {
        super(props)
      
    }

    componentDidMount () {
        this.props.requestReviews(this.props.restaurant.id)
       
    }

 

        render() { 
            
            // if (!this.props.restaurant.reviews) return null;
            const {restaurant} = this.props;
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
        
                <Link to={`/restaurants/${restaurant.id}`} className="home-item" style={{ textDecoration: 'none' }}>
                <div className='home-item-container'>
        
                    <img className='home-pic' src={restaurant.photoUrls[0]} />
        
                    <div className='home-item-individual'>
                        <div className='home-item-namefont'>{restaurant.name}</div>
                        <div className='home-item-individual-rating'>
                        <div className='rating-star-homeItem'><Rater total={5} rating={overallRating} interactive={false}/></div>
                        <div className='reviews-length'>{restaurant.reviews.length} reviews</div>
                        </div>
                        <br />
                        <div className='home-item-individual-details'>
                            <Link to={`restaurants/search/${restaurant.category}`} className='home-item-individual-details-cat-button'>
                                <button className='home-item-individual-details-cat'>{restaurant.category}</button>
                            </Link>
                            <div className='home-item-individual-details-dollar'>{restaurant.price}</div>
                        </div>
                        <br/>

                        <div className='home-item-comment'>
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


export default HomepageIndexItem