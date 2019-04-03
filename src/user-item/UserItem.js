import React, { Component } from 'react';
import './UserItem.css'

class UserItem extends Component {

  render() {
    const { itemData } = this.props;
    const { id, name } = itemData;

    return (
      <li>
        <div className="listItem">
          <div className="nameAndPhone">{name}</div>
          <div className="actionButton">Action</div>
        </div>
      </li>
    )
  }
}

export default UserItem
