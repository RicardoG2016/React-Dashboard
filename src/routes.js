import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Docs from './components/Docs';
import JobSearch from './components/JobSearch';
import Projects from './components/Projects';
import Review from './components/Review';
import References from './components/References';
import Social from './components/Social';
import Premium from './components/Premium';

const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={NavBar}/>
      <Route exact path="/" component={Dashboard}/>
      <Route path="/home" component={Dashboard}/>
      <Route path="/docs" component={Docs}/>
      <Route path="/jobsearch" component={JobSearch}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/review" component={Review}/>
      <Route path="/references" component={References}/>
      <Route path="/social" component={Social}/>
      <Route path="/premium" component={Premium}/>
    </div>
  </Router>
)

export default Routes

