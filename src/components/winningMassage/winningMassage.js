import React from 'react';

import classes from './winningMassage.module.css';

const massage = (props) => (
  <div className={classes.Winning}>
    <div className={classes.Massage}>
      <h1>WINNER !</h1>
      <p>{props.winner}</p>
      <button onClick={props.reset}>Play Again</button>
    </div>
  </div>
);

export default massage;