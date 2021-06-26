import React from 'react'

import Logo from '../logo/logo';
import Btn from '../mode-btn/modeBtn';
import classes from './gameModes.module.css';

const gameModes = (props) => (
  <div className={classes.GameModes}>
    <Logo />
    <div className={classes.Btns}>
      <Btn gameStart={props.gameStart} rounds='1' shouldWin='1' type='Single Round'>Single Round</Btn>
      <Btn gameStart={props.gameStart} rounds='3' shouldWin='2' type='2 out of 3'>2 out of 3</Btn>
      <Btn gameStart={props.gameStart} rounds='5' shouldWin='3' type='3 out of 5'>3 out of 5</Btn>
    </div>
  </div>
);

export default gameModes;