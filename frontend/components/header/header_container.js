import React from 'react';
import { connect } from 'react-redux';
import { requestRestaurants } from '../../actions/restaurant_actions';
import { logout } from '../../actions/session_actions';
import Header from '../header/header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    restaurants: Object.values(state.entities.restaurants)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestRestaurants: (input)=>dispatch(requestRestaurants(input))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
