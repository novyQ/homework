import React, { Component } from 'react';
import DisplayButton from './DisplayButton';
import { ReactComponent as More } from '../more.svg';
import './UserItem.css';

class UserItem extends Component {

  handleClick = () => {
    const { itemData, toggleOpen } = this.props
    toggleOpen(itemData.id)
  }

  render() {
    const { itemData, openId } = this.props;
    const { id, name } = itemData;
    const openStatus = (openId === id);
    const shiftLeftClass = openStatus ? "open" : "notOpen"

    return (
      <li>
        <div className="listItem">
          <div className={shiftLeftClass}>{name}</div>
          {!openStatus ?
            <div className="moreButtonContainer" element="button" onClick={this.handleClick}>
              <More />
            </div> :
            <div className="displayContainer" element="button">
              <DisplayButton itemData={itemData} />
            </div>
          }
        </div>
      </li>
    )
  }
}

export default UserItem
