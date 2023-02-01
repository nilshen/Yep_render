import React from 'react';
import { Link } from 'react-router-dom';
import Search_bar_container from '../search_bar/search_bar_container';
import {Footer} from '../footer/footer'
// import Header from '../header/header';
import HomepageIndexItem from './homepage_index_item';

class Homepage extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestRestaurants()
  }

  render() { 

    const { currentUser, logout, restaurants } = this.props


    const session = currentUser ? (  
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

      // let rest_cat = [];
      // restaurants.forEach((restaurant)=>{
      //   if (!rest_cat.includes(restaurant.category)) {
      //       rest_cat.push(restaurant.category)
      //   }
      // })

      let randomRestaurants = restaurants.sort(() => .5 - Math.random()).slice(0,4)

    return (
      <div className='homepage-container'>
      
      <div className='homepage-container-top'>
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
      </div>

        <div className='homepage-container-bottom'>
          <div>
            <Search_bar_container/>
          </div>
        </div>

        <div className='home-container'>
            <h2 className='home-header'>Recommended Businesses</h2>
            <ul className="homelayout-item">
                        {randomRestaurants.map((restaurant)=>(
                            <HomepageIndexItem 
                                restaurant = { restaurant }
                                requestReviews = {requestReviews}
                                key = { restaurant.id }
                            />
                            ))}
                        </ul>
        </div>


        <div className='cat-container'>
            <h2 className='cat-header'>Categories</h2>
            <div className='cat-boxes'>
            <div className='cat-boxes-row1'>
              <Link to="restaurants/search/sushi" style={{ textDecoration: 'none' }}>
            <div className="cat-box">
            
              <img className='cat-box-pic' src="https://yep-seeds.s3.amazonaws.com/images/sushi.png"></img>
              <h2 className='cat-box-font'>Sushi</h2>
            </div>
              </Link>
              <Link to="restaurants/search/steak" style={{ textDecoration: 'none' }}>
            <div className="cat-box">
                    <img className='cat-box-pic' src="https://yep-seeds.s3.amazonaws.com/images/steakhouse.png"></img>
          
            <h3 className='cat-box-font'>Steak</h3>
            </div>
              </Link>
              
              <Link to="restaurants/search/drinks" style={{ textDecoration: 'none' }}>
            <div className="cat-box">
                <img className='cat-box-pic' src="https://yep-seeds.s3.amazonaws.com/images/drinks.png"></img>

            <h3 className='cat-box-font'>Bars & Lounges</h3>
            </div>
              </Link>
            </div>

            <div className='cat-boxes-row1'>
              <Link to="restaurants/search/burger" style={{ textDecoration: 'none' }}>
            <div className="cat-box">
                <img className='cat-box-pic' src="https://yep-seeds.s3.amazonaws.com/images/burger.png"></img>
            
            <h3 className='cat-box-font'>Burger</h3>
            </div>
              </Link>
              <Link to="restaurants/search/dessert" style={{ textDecoration: 'none' }}>
            <div className="cat-box">
                <img className='cat-box-pic' src="https://yep-seeds.s3.amazonaws.com/images/Dessert.png"></img>
              
            <h3 className='cat-box-font'>Dessert</h3>
            </div>
              </Link>
              <Link to="restaurants/search/coffee" style={{ textDecoration: 'none' }}>
            <div className="cat-box">
                <img className='cat-box-pic' src="https://yep-seeds.s3.amazonaws.com/images/coffee.png"></img>
      
              <h3 className='cat-box-font'>Coffee</h3>
            </div>
              </Link>
            </div>
        </div>


              
            <div>
              <Footer/>
            </div>
          
          </div>
        </div>
    )
  }
}

export default Homepage;


// category with mapping but hard to format

              {/* <div className='rest-cat-header'>Categories</div>
              {rest_cat.map((el,idx)=>{
                return (
                  <ul className="rest-cat" key={idx}>{el}</ul>
                )
              })} */}