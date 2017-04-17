import React, { Component } from 'react';
import '../App.css';

class Bit extends React.Component {

  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-6">
          <img className="img" src={this.props.bits.img} alt="Generic placeholder image" width="140" height="140" />
          <h2>{this.props.bits.title}</h2>
        </div>
      </div>
    );
  }
}

export default Bit;