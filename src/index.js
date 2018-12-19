import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStoreWithMiddleware } from './store';
import { Routes } from './routes';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';


const history = createBrowserHistory()
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(history)}>
    <Router history={history}>
      < Routes />
    </Router>
  </Provider>
  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
