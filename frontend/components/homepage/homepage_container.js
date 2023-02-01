import React from 'react';
import { connect } from 'react-redux';
import { requestRestaurants } from '../../actions/restaurant_actions';
import { logout } from '../../actions/session_actions';
import Homepage from './homepage';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    restaurants: Object.values(state.entities.restaurants.all)
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestRestaurants: ()=>dispatch(requestRestaurants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
