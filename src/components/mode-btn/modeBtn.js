import React from 'react';

import classes from './modeBtn.module.css';

const modeBtn = (props) => (
  <button className={classes.Btn} onClick={() => props.gameStart(props.rounds,props.shouldWin, props.type)}>{props.children}</button>
);

export default modeBtn;