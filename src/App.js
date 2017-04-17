import { Component } from 'react';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Routes from './routes';
// import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}