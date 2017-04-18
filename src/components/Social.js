import React, { Component } from 'react';
import '../App.css';
import Dashboard from './Dashboard';
import Section from './Section';

class Social extends React.Component {

  render() {

  const title = 'facebook';
  const route = '/references'
  const img = '../images/folder.png'

    return (
      <div>
          <Section title={title} route={route} img={img}/>
      </div>
    );
  }
}

export default Social;