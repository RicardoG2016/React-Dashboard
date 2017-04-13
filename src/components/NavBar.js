import React, { Component } from 'react';
// import { Nav, Button, ButtonGroup, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
            <div className="bs-docs-section clearfix">
              <div className="row">

                  <div className="bs-component">
                    <nav className="navbar navbar-default">
                      <div className="container-fluid">

                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">PCM</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                            <form className="navbar-form navbar-left" role="search">
                              <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                              </div>
                              <button type="submit" className="btn btn-default">Submit</button>
                            </form>
                          </ul>

                          <ul className="nav navbar-nav navbar-right">
                          <li><a href="#">PREMIUM</a></li>
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><img className="img" src="../images/m.png" alt="Generic placeholder image" width="20" height="20" /> </a>
                              <ul className="dropdown-menu" role="menu">
                                <li><a href="#">Review</a></li>
                                <li><a href="#">Social</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Docs</a></li>
                                <li><a href="#">References</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Gifts</a></li>
                                <li><a href="#">Premium</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Settings</a></li>
                              </ul>
                            </li>
                            <li><a href="#"><img className="img" src="../images/chat.png" alt="Generic placeholder image" width="20" height="20" /></a></li>
                            <li><a href="#"><img className="img" src="../images/gift.png" alt="Generic placeholder image" width="20" height="20" /></a></li>
                            <li className="active"><a href="#"><img className="img" src="../images/alarm.png" alt="Generic placeholder image" width="20" height="20" /> <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Sign In</a></li>
                            <li><a href="#">|</a></li>
                            <li><a href="#">Sign Up</a></li>
                          </ul>

                        </div>
                      </div>
                    </nav>
                  </div>
                
              </div>
            </div>

      </div>
    );
  }
}

