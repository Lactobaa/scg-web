import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Background from '../../assets/img/bg2.jpg';
import Profile from '../Profile';
import Foods from '../Foods';

export class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      loaded: false,
    };
  }

  render() {
    return (
      <div>
        <div id="intro" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} class="intro-section pb-2">
          <div class="container text-center">
            <div data-animate="fadeInDown" class="logo"><img src="img/animal-kingdom-logo.png" alt="logo" width="130" /></div>
            <h1 data-animate="fadeInDown" style={{ fontSize: '3.6em', fontWeight: 700 }} class="text-shadow mb-5">Hello, FullStack Engineer!</h1>
            <p data-animate="slideInUp" class="h3 text-shadow text-400">ONLY FOCUS YOUR ENERGY AND ATTENTION ON THINGS YOU WANT TO GLOW.</p>
          </div>
        </div>
        <div id="about" class="about-section">
          <Profile />
        </div>
        <div id="foods" class="testimonials-section bg-gray">
          <Foods />
        </div>
      </div>
    );
  }
}

export default inject('restaurant')(observer(Body));