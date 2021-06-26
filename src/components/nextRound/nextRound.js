import React from 'react';

import classes from './nextRound.module.css';

const nextRound = (props) => (
  <div className={classes.Winning}>
  <div className={classes.Massage}>
    <h1>ROUND {props.round} WINNER !</h1>
    <p>{props.winner}</p>
    <button onClick={props.nextRound}>Next Round</button>
  </div>
</div>
)

export default nextRound;