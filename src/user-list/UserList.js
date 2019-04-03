import React, { Component } from 'react';
import UserItem from '../user-item/UserItem';
import './UserList.css'

class UserList extends Component {
  render() {
    const { userData } = this.props;
    return (
      <div>
        <header>User</header>
        <ul className="mainList">
          {userData.map(data => <UserItem itemData={data} key={data.id} />)}
        </ul>
      </div>
    )
  }
}

export default UserList
