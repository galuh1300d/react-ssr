import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'

export class UsersListPage extends Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {

    let renderUsers = this.props && this.props.users.length > 0 ?
    this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    }) : <div></div>

    return (
      <div>
        Here's big list of user:
        <ul>{renderUsers}</ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users}
}

function loadData(store) {
  store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchUsers})(UsersListPage)
}