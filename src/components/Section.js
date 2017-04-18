import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Section extends React.Component {

  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-6">
          <Link to={this.props.route}>
            <img className="img" src={this.props.img} alt="Generic placeholder image" width="140" height="140" />
            <h2>{this.props.title}</h2>
          </Link>
        </div>
      </div>
    );
  }
}

export default Section;