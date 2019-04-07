import React, { Component } from 'react';
import './UserDetails.css'

const UserDetails = ({ display }) => {
  return (
    <div className="userDetails">
      <p>{display.name}</p>
      <p>Phone: {display.phone}</p>
      <p>Email: {display.email}</p>
      <p>Company: {display.company.name}</p>
      <p>Note: {display.company.catchPhrase}</p>
    </div>
  )
}

export default UserDetails
