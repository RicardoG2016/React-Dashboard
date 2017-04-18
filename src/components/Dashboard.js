import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Section from './Section';

class Dashboard extends React.Component {
  render() {
  const dash={
      first: {
        title: "Review",
        img: "../images/list.png",
        route: "/review"  
      },
      second: {
        title: "Social",
        img: "../images/fb.png",
        route: "/social"     
      },
      third: {
        title: "Job Search",
        img: "../images/briefcase.png",
        route: "/jobsearch"     
      },
      fourth: {
        title: "Projects",
        img: "../images/macbook.png",
        route: "/projects"     
      },
      fifth: {
        title: "Docs",
        img: "../images/folder.png",
        route: "/docs"     
      },
      sixth: {
        title: "References",
        img: "../images/id-card.png",
        route: "/references"     
      },
  };

  const first = dash.first
  const second = dash.second
  const third = dash.third
  const fourth = dash.fourth
  const fifth = dash.fifth
  const sixth = dash.sixth

    return (
      <div className="dash">
        <br />
        <br />
        <br />
        <br />
        <div className="container marketing">
          <div className="row">
            <Section title={first.title} route={first.route} img={first.img}/>
            <Section title={second.title} route={second.route} img={second.img}/>
            <Section title={third.title} route={third.route} img={third.img}/>
          </div>  
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <Section title={fourth.title} route={fourth.route} img={fourth.img}/>
            <Section title={fifth.title} route={fifth.route} img={fifth.img}/>
            <Section title={sixth.title} route={sixth.route} img={sixth.img}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
