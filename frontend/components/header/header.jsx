import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render() { 

    const { currentUser, logout } = this.props;
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
    
    return (
     
  
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

  
    
    )
  }
}

export default Header;


{/* <iframe src="https://player.vimeo.com/video/685610054?background=1&amp;autoplay=1&amp;autopause=0&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;quality=1080p" frameborder="0"></iframe> */}

