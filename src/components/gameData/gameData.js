import React from 'react'

import classes from './gameData.module.css';
import Logo from '../../components/logo/logo';

const gameData = () => ( 
    <div className={classes.GameData}>
      <Logo />
      <div className={classes.Players}>
        <div className={classes.PlayerOne}>
          <span>Player 1</span>
        </div>
        <div className={classes.PlayerTow}>
          <span>Player 2</span>
        </div>
      </div>
    </div>
  );

export default gameData;