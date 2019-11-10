import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions'

class UsersList extends Component {
  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchUsers();
  }

  renderUsers() {
    console.log('011111', this.props.users);
    this.props.users.map(user => {
      console.log('user', user);
      return <li key={user.id}>{user.name}</li>
    })
  }
  render() {
    return (
      <div>
        <p>List of Users</p>
          <ul>{this.renderUsers()}</ul>
          {/* <button onClick={this.renderUsers()}>Press Me renderUsers</button> */}
          {/* <button onClick={this.props.onFetchUsers()}>Press Me onFetchUsers</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return { users: state.users };
}
const mapDispatchToProps = dispatch => {
  console.log('dispatch', dispatch);
  return {
    onFetchUsers: () => dispatch(fetchUsers())
  };
};


export default connect(mapStateToProps,{fetchUsers})(UsersList);