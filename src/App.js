import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadData } from './store/actions';
import UserList from './user-list/UserList';
import UserDetails from './user-details/UserDetails'
import { ReactComponent as More } from './more.svg';

import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.loadData()
    console.log(this.props.userList)
  }

  render() {
    const { display, userList } = this.props;
    const appOverlay = display ? "app overlay" : "app"

    return (
      <div className={appOverlay}>
        <div className="title">User Info & Company</div>
        {userList && <UserList userData={userList} />}
        {display &&
          <div className="displayBox">
            <UserDetails display={display} />
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData())
  }
}

const mapStateToProps = state => {
  return {
    display: state.display,
    userList: state.userList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
