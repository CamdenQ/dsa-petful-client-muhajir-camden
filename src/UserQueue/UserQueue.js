import React, { Component } from 'react';

import './UserQueue.css'

export default class UserQueue extends Component {
  render() {
    return (
      <div className='queue'>
        <h4>Adoption Queue</h4>
        <ul>
          {this.props.queue.map((user, i) => (
            <li key={i}>{user}</li>
          ))}
        </ul>
      </div>
    );
  }
}
