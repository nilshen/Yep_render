import React from "react";
import Search_bar_container from "./search_bar_container";
import { Link } from "react-router-dom";
import {Footer} from "../footer/footer";
import RestaurantIndexItem from '../restaurants/restaurant_index_item';
import RestaurantMap from "../map/restaurant_map";

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.searchRestaurants(this.props.match.params.input);
        window.scrollTo(0,0)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.input !== this.props.match.params.input) {
            this.componentDidMount();
            // this.props.clearErrors();
        }
    }


    render() {
        
        const {restaurants, requestReviews, currentUser, logout } = this.props;
        // if (this.props.restaurants.length===0) {
        //     // return null
        //     return <div className='no-search-result'> No results found. Please try another search.</div>
        // }




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
        
        //search errors

        // let errorsList;      
        // if (this.props.errors.length) {
        //     businesses = [];
        //     errorsList = this.props.errors.map( (err, idx) => (
        //         <li key={idx}>{err}</li>
        //     ))
        // }


        return (
            <div>
                <div className='header-container'>
                    <nav className="header-left">
                        <Link to="/restaurants" style={{ textDecoration: 'none' }}>Restaurants</Link> 
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
            
            <Search_bar_container/>
                <div className="indexlayout-container">
                    
                
                    <ul className="indexlayout-item">
                    <div className="search-results">Search Results: {restaurants.length}</div>
                    {restaurants.map((restaurant, idx)=>(
                        <RestaurantIndexItem 
                        restaurant = { restaurant }
                        requestReviews = {requestReviews}
                        key = { restaurant.id }
                        idx = {idx + 1 }
                    />
                        ))}
                    </ul>
                    {/* <h1>{errorsList}</h1> */}
                    <div className="biz-index-map-container">
                        <RestaurantMap restaurants={restaurants} />
                    </div>
                
                </div>
                <div>
                    <Footer/>
                </div>
        </div>
        )
    }
};


export default SearchResult;