import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

import gameReducer from './reducers/gameReducer';
import playerOneReducer from './reducers/player_1Reducer';
import playerTowReducer from './reducers/player_2Reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  player_1: playerOneReducer,
  player_2: playerTowReducer
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
