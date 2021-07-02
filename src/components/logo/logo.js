import React from 'react'

import logoImg from '../../accets/logo/logo.png';
import classes from './logo.module.css';

const logo = () => (
  <div className={classes.Logo}>
    <img src={logoImg} alt="logo" width="50" height="50" />
    <p className={classes.Name}>Tic Tac Toe</p>
  </div>
);

export default logo;