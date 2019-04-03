import React, { Component } from 'react';

class UserDetail extends Component {

  render() {
    const { itemData } = this.props;
    const { id, name, phone, website } = itemData

    return (
      <div>
        <div>{itemData.name}</div>
      </div>
    )
  }
}

export default UserDetail
