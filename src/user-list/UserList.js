import React, { Component } from 'react';
import UserItem from '../user-item/UserItem';
import './UserList.css'

class UserList extends Component {

  constructor(props){
    super(props);
    this.state = {
      openId: -1
    }
  }

  toggleOpen = id => {
    this.state.openId === id ?
    this.setState({ openId: -1 }) :
    this.setState({ openId: id })
  }

  render() {
    const { userData } = this.props;

    return (
      <div>
        <ul>
          {userData.map(data =>
            <UserItem
              itemData={data}
              key={data.id}
              openId={this.state.openId}
              toggleOpen={this.toggleOpen}
            />)
          }
        </ul>
      </div>
    )
  }
}

export default UserList
