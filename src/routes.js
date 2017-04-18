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

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

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

