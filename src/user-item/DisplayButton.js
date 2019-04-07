import React, { Component } from 'react';
import { connect } from 'react-redux'
import { displayUser, clearDisplay } from '../store/actions'

import './DisplayButton.css'

class DisplayButton extends Component {

  componentWillUnmount(){
    console.log('UNMOUNT')
    const { clearDisplay } = this.props
    clearDisplay()
  }

  handleClick = () => {
    const { displayUser, itemData } = this.props
    displayUser(itemData)
  }

  render() {
    return (
      <div className="display" onClick={this.handleClick}>Display</div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    displayUser: payload => dispatch(displayUser(payload)),
    clearDisplay: () => dispatch(clearDisplay())
  }
}

export default connect(null, mapDispatchToProps)(DisplayButton)
