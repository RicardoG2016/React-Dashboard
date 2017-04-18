import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import Section from './Section';

class References extends React.Component {

  render() {
  const title = "Ricardo Gomez"
  const img = "../images/me.jpg"
  const route = "/"

    return (

<div className="dash">
        <br />
        <br />
        <br />
        <br />
        <div className="container marketing">
          <div className="row">
          <Section title={title} img={img} route={route}/>
          <Section title={title} img={img} route={route}/>
          <Section title={title} img={img} route={route}/>
          </div>  
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>


    );
  }
}

export default References;

