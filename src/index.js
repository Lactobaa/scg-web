import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import mobxStore from './Stores';

ReactDOM.render((
  <Provider {...mobxStore}>
    <BrowserRouter>
      <Route path="/" component={App}/>
      {/* <App /> */}
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
