import React from 'react';

import classes from './game.module.css';

const game = (props) => {
  return (
    <div className={classes.Game}>
      <div className={classes.Background}>
        <div className={classes.C_1}></div>
        <div className={classes.C_2}></div>
        <div className={classes.C_3}></div>
      </div>
      <div className={classes.GameData}>
    <h1>{props.type}</h1>
      <div className={classes.Player}>
        <p>Player 1 <span>X</span></p>
        <p>Playwe 2 <span>O</span></p>
      </div>
      <div className={classes.Bord}>
        <div className={classes.box_1} id='0' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_2} id='1' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_3} id='2' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_4} id='3' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_5} id='4' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_6} id='5' onClick={(e) => props.markedHandler(e)}></div>  
        <div className={classes.box_7} id='6' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_8} id='7' onClick={(e) => props.markedHandler(e)}></div>
        <div className={classes.box_9} id='8' onClick={(e) => props.markedHandler(e)}></div>  
      </div>
      </div>
      
    </div>
  )
}

export default game;