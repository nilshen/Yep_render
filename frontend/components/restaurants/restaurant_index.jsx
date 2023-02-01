import React from "react";
import RestaurantIndexItem from './restaurant_index_item';
import Search_bar_container from "../search_bar/search_bar_container";
import { Link } from 'react-router-dom';
import {Footer} from '../footer/footer'
import RestaurantMap from "../map/restaurant_map";

class RestaurantIndex extends React.Component {
    constructor(props){
        super(props)

        // this.state = {
        //     name:""
        // }
    }
    componentDidMount(){
        // debugger
        this.props.requestRestaurants()
        window.scrollTo(0,0)
    }

    render() { 

        const { currentUser, logout, restaurants, requestReviews  } = this.props;
        // debugger
        let session = currentUser ? (  
        <div className="login-signup">
          <h2 className="header-name">Welcome, {currentUser.username}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </div>
        ) : (
          <div>
          <header className='header'>
    
          <nav className="header-right">
                <Link to="/login" style={{ textDecoration: 'none' }} className='login-font'>Log In</Link>
                <Link to="/signup" style={{ textDecoration: 'none' }} className='login-font'>Sign Up</Link>
              </nav>
          </header>
          </div>
        )
        // debugger
        // debugger
        // console.log(this.state)
        return (
            <div>
                <div className='header-container'>
                    <nav className="header-left">
                        <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
                        {/* <p>Write a Review</p> */}
                    </nav>
                    <nav className="header-middle"> 
                        <Link to="/">
                        <img src="https://yep-seeds.s3.amazonaws.com/images/logo.png" className='logo' />
                        </Link>
                    </nav>
                    <nav className="header-right"> 
                        {session}
                    </nav>
                </div>
                
                <div>
                    <Search_bar_container/>
                </div>
                
                <div className="indexlayout-container">
                    {/* <div>filter placeholder</div> */}
                
                    <ul className="indexlayout-item">
                    {restaurants.map((restaurant, idx)=>(
                        <RestaurantIndexItem 
                            restaurant = { restaurant }
                            requestReviews = {requestReviews}
                            key = { restaurant.id }
                            idx = {idx + 1}
                        />
                        ))}
                    </ul>
                    <div className="biz-index-map-container">
                        <RestaurantMap restaurants={restaurants} />
                    </div>
                
                </div>

                    <div>
                        <Footer/>
                    </div>
            </div>
        );
    }
}
export default RestaurantIndex;