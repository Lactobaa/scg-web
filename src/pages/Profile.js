import React, { Component } from 'react';

export default class Profile extends Component {
  render() {
    return (
      <div class="container">
        <header class="text-center">
          <h2 data-animate="fadeInDown" class="title">About me</h2>
        </header>
        <div class="row">
          <div data-animate="fadeInUp" class="col-lg-6">
            <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
            <p>Received overcame oh sensible so at an. Formed do change merely to county it. <strong>Am separate contempt</strong> domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit.</p>
            <p>An sincerity so extremity he additions. Her yet <strong>there truth merit</strong>. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law.</p>
          </div>
          <div data-animate="fadeInUp" class="col-lg-6">
            <div class="skill-item">
              <div class="progress-title">Java</div>
              <div class="progress">
                <div role="progressbar" style={{ width: '90%' }} aria-valuenow="0" aria-valuemin="60" aria-valuemax="100" class="progress-bar progress-bar-skill1"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="progress-title">Javascript</div>
              <div class="progress">
                <div role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="60" aria-valuemax="100" class="progress-bar progress-bar-skill2"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="progress-title">NodeJS</div>
              <div class="progress">
                <div role="progressbar" style={{ width: '75%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-skill3"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="progress-title">CSS</div>
              <div class="progress">
                <div role="progressbar" style={{ width: '60%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-skill4"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="progress-title">PL/SQL</div>
              <div class="progress">
                <div role="progressbar" style={{ width: '80%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" class="progress-bar progress-bar-skill5"></div>
              </div>
            </div>
          </div>
          <div data-animate="fadeInUp" style={{textAlign: 'center'}} class="col-sm-6 mx-auto mt-5"><img src="img/profile.jpg" style={{paddingBottom: 30}} alt="This is me - IT worker" class="image rounded-circle img-profile" /></div>
        </div>
      </div>
    );
  }
}