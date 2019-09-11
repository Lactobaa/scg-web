import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="main-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6 text-center text-lg-left">
                <p class="social"><a href="https://www.facebook.com/LactobAA" class="external facebook wow fadeInUp"><i class="fa fa-facebook"></i></a><a href="mailto:lactobaa@gmail.com" data-wow-delay="0.6s" class="email wow fadeInUp"><i class="fa fa-envelope"></i></a><a href="tel:0642309309" data-wow-delay="0.6s" class="phone wow fadeInUp"><i class="fa fa-phone"></i></a><a href="https://www.linkedin.com/in/alisa-buakao-4a118b167" data-wow-delay="0.6s" class="linkedin wow fadeInUp"><i class="fa fa-linkedin"></i></a></p>
              </div>
              <div class="col-md-6 text-center text-lg-right mt-4 mt-lg-0">
                <p>© 2019 Alisa Buakao. All rights reserved.</p>
              </div>
              <div class="col-12 mt-4" />
            </div>
          </div>
        </footer>
      </div>
    );
  }
}