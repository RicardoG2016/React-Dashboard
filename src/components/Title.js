import React, { Component } from 'react';
import '../App.css';

class Title extends React.Component {

  render() {
console.log(this.props)
    return (
      <div>
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}

export default Title;