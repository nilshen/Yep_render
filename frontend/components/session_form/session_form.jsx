import React from 'react';
import * as Demo from './demo_user_login'
import { Link } from 'react-router-dom';
import Header from '../header/header';
import {Footer} from '../footer/footer'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      // email:'',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoUser(e) {
    e.preventDefault();
    // debugger
    const user = Demo.setDemoUser()
    // debugger
    this.props.processForm(user)
    // debugger
  }


  renderErrors() {
    // debugger
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    // debugger
  }

  sessionMessegeTop(){
    // debugger
    if (this.props.formType === "login") {
      return (
        <div className='sessoion-top'>
          <div>
            <div className='session-topwords'>New to Yep?</div> 
            <div><Link to={"/signup"} style={{ textDecoration: 'none' }} className="session-topwords2">Sign Up</Link></div>
          </div>
          <div className='term'>By logging in, you agree to Yep’s Terms of Service and Privacy Policy.</div>
          
        </div>
      )
    } else {
      return (
         <div className='sessoion-top'>
            <div className='session-topwords'>Sign Up for Yep</div>
            <div className='session-topwords-2'>Connect with great local restaurants</div>
            <div><p className='term'>By logging in, you agree to Yep’s Terms of Service and Privacy Policy.</p></div>
            <div>Already on Yep? <Link to={"/login"} style={{ textDecoration: 'none' }} className="session-topwords2">Log in</Link></div>
         </div>
         
      )
    }
  }




  render() {

    const demoLogin = (
      <button className="session-submit" onClick={this.handleDemoUser}>
        Demo User Login
      </button>
    )

    return (
      <div className="session-form-container">

     <div>
      <Header/>
     </div>
     <div className='session-body'>
      <div className='session-form-left'>
        <form onSubmit={this.handleSubmit} className="session-form-box">
          {/* <h2 className='session-form-header'>Welcome to Yep!</h2> */}
          <br/>
          {/* Please {this.props.formType} or {this.props.navLink} */}
          {this.sessionMessegeTop()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <div className='login-box-username'>
              <label className='login-box-username'>
                <input type="text"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
            </div>
            <label>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
          { (this.props.formType === "login") && demoLogin }
        </form>
        </div>
        <div className='session-form-right'>
          <img src="https://yep-seeds.s3.amazonaws.com/images/session-pic.png" width="280" height="250" />
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default SessionForm;
