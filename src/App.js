import React, { Component } from 'react';
import UserList from './user-list/UserList.js';
import { userData } from './user-data.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <UserList userData={userData} />
      </div>
    );
  }
}

export default App;
