import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import history from './history';
import midiMiddleware from './middleware/midi';
// import configurationMiddleware from './middleware/configuration';
// import controlCodeMiddleware from './middleware/controlcode';
// import minilogueDiscoveryMiddleware from './middleware/discovery';
// import programMiddleware from './middleware/program';
import { reducers } from './reducers/app';
import App from './components/App';
import './App.css';

let middleware = [
  routerMiddleware(history),
  midiMiddleware,
  // configurationMiddleware,
  // controlCodeMiddleware,
  // programMiddleware,
  // minilogueDiscoveryMiddleware,
  thunkMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger];
}

const rootReducer = combineReducers({
  ...reducers,
  routerReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
);





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
