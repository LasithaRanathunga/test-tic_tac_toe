import React from 'react'

import classes from './start.module.css';

const start = () => (
  <div className={classes.SelectMode}>
    <h1>Tic Tac Toe</h1>
    <div className={classes.Msg}>
      <div className={classes.Arrow}></div>
      <p>Select a Game Mode...</p>
    </div>
  </div>
);

export default start;