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
            <p>Let me introduce myself. My name is Alisa Buakao. My nickname is Oom. I Graduated from Kasetsart University where I studied Computer Engineering. I took  part in many activities at University such as TA and Staff of Camp. Also I was an intern at TRUE Coporate in the Web In House Developer team. I learned about coding and stucture of web. I interested in programming so that I did a final project about Web by PHP.</p>
            <p>After I finished my degree, I started my career in IVR Developer team at GMM Grammy Company as a Programmer. After working there for 1 and a half years, I was to be JAVA developer in Billing Customer Service at TRUE Coporate. I have been working there for 4 years, I was to be Outsourcing Developer on various coporate such as AIS and TRUE Coporate. Currently I am a Full Stack Engineer at Emetworks on site at SCG.</p>
            <p>About my personalities, I am a hard worker who work well with everyone. In my free time I enjoy to cooking and listening music. My English is not very good but I have been trying to improve it. I want to further my career. I’m looking for bigger challenges and new experiences.</p>
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