import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dash">
<br />
<br />
<br />
<br />
        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Link to="/review">
                <img className="img" src="../images/list.png" alt="Generic placeholder image" width="140" height="140" />
                <h2>Review</h2>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to="/social">
                <img className="img" src="../images/fb.png" alt="Generic placeholder image" width="140" height="140" />
                <h2>Social</h2>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to="/jobsearch">
                <img className="img" src="../images/briefcase.png" alt="Generic placeholder image" width="140" height="140" />
                <h2>Job Search</h2>
              </Link>
            </div>
          </div>
<br />
<br />
<br />
<br />
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Link to="/projects">
                <img className="img" src="../images/macbook.png" alt="Generic placeholder image" width="140" height="140" />
                <h2>Projects</h2>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to="/docs">
                <img className="img" src="../images/folder.png" alt="Generic placeholder image" width="140" height="140" />
                <h2>Docs</h2>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link to="/reference">
                <img className="img" src="../images/id-card.png" alt="Generic placeholder image" width="140" height="140" />
                <h2>References</h2>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
