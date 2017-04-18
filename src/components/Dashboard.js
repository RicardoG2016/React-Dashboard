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
    review: {
      title: "Review",
      img: "../images/list.png",
      route: "/review"  
    },
      social: {
        title: "Social",
        img: "../images/fb.png",
        route: "/social"     
      },
      jobsearch: {
        title: "Job Search",
        img: "../images/briefcase.png",
        route: "/jobsearch"     
      },
      projects: {
        title: "Projects",
        img: "../images/macbook.png",
        route: "/projects"     
      },
      docs: {
        title: "Docs",
        img: "../images/folder.png",
        route: "/docs"     
      },
      references: {
        title: "References",
        img: "../images/id-card.png",
        route: "/reference"     
      },
  };

  const social = dash.social
  const jobsearch = dash.jobsearch
  const projects = dash.projects
  const review = dash.review
  const docs = dash.docs
  const references = dash.references



    return (
      <div className="dash">
        <br />
        <br />
        <br />
        <br />
        <div className="container marketing">
          <div className="row">
            <Section title={review.title} route={review.route} img={review.img}/>
            <Section title={social.title} route={social.route} img={social.img}/>
            <Section title={jobsearch.title} route={jobsearch.route} img={jobsearch.img}/>
          </div>  
          <br />
          <br />
          <br />
          <br />
          <div className="row">
            <Section title={projects.title} route={projects.route} img={projects.img}/>
            <Section title={docs.title} route={docs.route} img={docs.img}/>
            <Section title={references.title} route={references.route} img={references.img}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
