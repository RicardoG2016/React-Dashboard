import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
