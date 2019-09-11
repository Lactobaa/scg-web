import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './pages/components/Header';
import Body from './pages/components/Body';
import Footer from './pages/components/Footer';
import Restaurant from './pages/Restaurant';
import Profile from './pages/Profile';
import Background from './assets/img/home.jpg';
import Loader from 'react-loader';
import LoadingOverlay from 'react-loading-overlay';
// import "./assets/vendor/jquery/jquery.min.js";
// import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "./assets/vendor/jquery.cookie/jquery.cookie.js";
// import "./assets/vendor/owl.carousel/owl.carousel.min.js";
// import "./assets/vendor/waypoints/lib/jquery.waypoints.min.js";
// import "./assets/vendor/jquery.counterup/jquery.counterup.js.js";

library.add(fas);

class App extends Component {

  render() {
    return (
      <div>
          <Header />
          <Body />
          <Footer />
      </div >
    );
  }
}

export default inject('restaurant')(observer(App));
