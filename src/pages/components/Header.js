import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Background from '../../assets/img/home.jpg';
import Profile from '../Profile';

export default class Header extends Component {

  render() {
    return (
      <div>
        <header class="header">
          <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container"><a style={{color: 'gray'}} href="#intro" class="navbar-brand scrollTo">My Portfolio</a>
              <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><span class="fa fa-bars"></span></button>
              <div id="navbarcollapse" class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item"><a href="#intro" class="nav-link link-scroll">Intro</a></li>
                  <li class="nav-item"><a href="#about" class="nav-link link-scroll">About</a></li>
                  <li class="nav-item"><a href="#foods" class="nav-link link-scroll">Foods</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
