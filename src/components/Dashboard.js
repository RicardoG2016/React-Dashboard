import React, { Component } from 'react';

class Dashboard extends Component {
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
              <img className="img" src="../images/list.png" alt="Generic placeholder image" width="140" height="140" />
              <h2>Review</h2>
            </div>
            <div className="col-lg-4 col-md-6">
              <img className="img" src="../images/fb.png" alt="Generic placeholder image" width="140" height="140" />
              <h2>Social</h2>
            </div>
            <div className="col-lg-4 col-md-6">
              <img className="img" src="../images/briefcase.png" alt="Generic placeholder image" width="140" height="140" />
              <h2>Job Search</h2>
            </div>
          </div>
<br />
<br />
<br />
<br />
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <img className="img" src="../images/macbook.png" alt="Generic placeholder image" width="140" height="140" />
              <h2>Projects</h2>
            </div>
            <div className="col-lg-4 col-md-6">
              <img className="img" src="../images/folder.png" alt="Generic placeholder image" width="140" height="140" />
              <h2>Docs</h2>
            </div>
            <div className="col-lg-4 col-md-6">
              <img className="img" src="../images/id-card.png" alt="Generic placeholder image" width="140" height="140" />
              <h2>References</h2>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
