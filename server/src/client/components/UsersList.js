import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions'

class UsersList extends Component {
  state = {
    purchasing: false
}
  componentDidMount() {
    this.props.onFetchUsers();
  }

  renderUsers() {
    console.log('01');
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }
  render() {
    return (
      <div>
        <p>List of Users</p>
          <ul>{this.renderUsers}</ul>
          <button onClick={this.renderUsers()}>Press Me</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state');
  return { users: state.users };
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchUsers: () => dispatch(fetchUsers())
  };
};


export default connect(
  mapStateToProps,
  {mapDispatchToProps}
)(UsersList);