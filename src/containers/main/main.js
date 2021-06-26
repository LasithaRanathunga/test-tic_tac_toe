import React, { Component } from 'react';
import {connect} from 'react-redux';

import GameData from '../../components/gameData/gameData';
import GameModes from '../../components/gameModes/gameModes';
import Game from '../../components/game/game';
import Start from '../../components/start/start';
import Massage from '../../components/winningMassage/winningMassage';
import NextRound from '../../components/nextRound/nextRound';
import classes from './main.module.css';

class Main extends Component {

  resetFunc = () => {
    this.props.resetGame();
    this.props.resetOne();
    this.props.resetTow();
  }

  bordRefresh = () => {
    this.props.hideBord();
    this.props.showBord();
  }

  findWinner(arr, player) {
    const type_1 = arr[0] && arr[1] && arr[2];
    const type_2 = arr[3] && arr[4] && arr[5];
    const type_3 = arr[6] && arr[7] && arr[8];
    const type_4 = arr[0] && arr[3] && arr[6];
    const type_5 = arr[1] && arr[4] && arr[7];
    const type_6 = arr[2] && arr[5] && arr[8];
    const type_7 = arr[0] && arr[4] && arr[8];
    const type_8 = arr[2] && arr[4] && arr[6];

    if (type_1 || type_2 || type_3 || type_4 || type_5 || type_6 || type_7 || type_8) {
      
      this.bordRefresh();

      if (player === 'one') {
        this.props.roundsWonOne();
        this.props.roundWinnerOne();
      } else if (player === 'tow') {
        this.props.roundsWonTow();
        this.props.roundWinnerTow();
      }

      if (this.props.game.totalRounds === this.props.game.currentRound) {
        if (this.props.one.roundsWon >= this.props.game.shouldWin) {
          this.props.oneWins();
        }
        if (this.props.tow.roundsWon >= this.props.game.shouldWin) {
          this.props.towWins();
        }
      }

      if (!(this.props.game.totalRounds === this.props.game.currentRound)) {
        this.props.nextRound();
      }

      
    }
  }

  marked = (e) => {
    
    if (!e.target.innerHTML && this.props.game.activePlayer === 1) {
      e.target.innerHTML = '<p style="font-size: 6rem;font-weight: 200">X</p>';
      let promise = new Promise((resolve, reject) => {
        this.props.playerOneMarked(e.target.id);
        resolve('OK');
      })
      promise.then((res) => {
        this.findWinner(this.props.one.positions, 'one');
      });
     
      this.props.switchPlayer(2);
    }

    if (!e.target.innerHTML && this.props.game.activePlayer === 2) {
      e.target.innerHTML = '<p style="font-size: 6.5rem;font-weight: 200">O</p>';
      let promise = new Promise((resolve, reject) => {
        this.props.playerTowMarked(e.target.id);
        resolve('OK');
      })
      promise.then((res) => {
        this.findWinner(this.props.tow.positions, 'tow');
      });
      this.props.switchPlayer(1);
    }
  }

  nextRound = () => {
    this.props.nextRoundGame();
    this.props.nextRoundOne();
    this.props.nextRoundTow();
    this.props.incrementRound();
  }

  render() {
    
    let msg = null;
    console.log(this.props.game.totalRounds);
    console.log(this.props.game.currentRound);
    if (this.props.one.won && (this.props.game.totalRounds === this.props.game.currentRound)) {
      msg = <Massage winner="Player 1" reset={this.resetFunc}/>
    }
    if (this.props.tow.won && (this.props.game.totalRounds === this.props.game.currentRound)) {
      msg = <Massage winner="Player 2" reset={this.resetFunc}/>
    }

    let nextRound = null;

    if (this.props.one.roundWinner && !(this.props.game.toalRounds === this.props.game.currentRound) && this.props.game.nextRound) {
      nextRound = <NextRound winner="Player 1" round={this.props.game.currentRound} nextRound={this.nextRound} />;
    }
    if (this.props.tow.roundWinner && !(this.props.game.toalRounds === this.props.game.currentRound) && this.props.game.nextRound) {
      nextRound = <NextRound winner="Player 2" round={this.props.game.currentRound} nextRound={this.nextRound} />;
    }

    return (
      <div className={classes.Main}>
        {msg}
        {nextRound}
        <div className={classes.leftdiv}>
          {this.props.game.start ? <GameData /> : <GameModes gameStart={this.props.startGame} />}
        </div>
        <div className={classes.rightdiv}>
          {this.props.game.start && this.props.game.bord ? <Game markedHandler={this.marked} type={this.props.game.matchType}/> : <Start />}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    game: state.game,
    one: state.player_1,
    tow: state.player_2
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startGame: (n, m, type) => dispatch({type:'STARTGAME', value: {totalRounds: n, shouldWin:m, matchType: type}}),
    switchPlayer: (n) => dispatch({type:'SWITCHPLAYER', value: n}),
    playerOneMarked: (n) => dispatch({type:'PLAYERONEMARKED', value: n}),
    playerTowMarked: (n) => dispatch({type:'PLAYERTOWMARKED', value: n}),
    gameWon: (name) => dispatch({type:'GAMEWON', value: name}),
    oneWins: () => dispatch({type:'ONEWINS'}),
    towWins: () => dispatch({type:'TOWWINS'}),
    resetGame: () => dispatch({type:'GAMERESET'}),
    resetOne: () => dispatch({type:'ONERESET'}),
    resetTow: () => dispatch({type:'TOWRESET'}),
    incrementRound: () => dispatch({type:'INCREMENTROUND'}),
    roundsWonOne:() => dispatch({type:'ROUNDSWONONE'}),
    roundsWonTow:() => dispatch({type:'ROUNDSWONTOW'}),
    nextRound: () => dispatch({type:'NEXTROUND'}),
    roundWinnerOne: () => dispatch({type:'ROUNDWINNERONE'}),
    roundWinnerTow: () => dispatch({type:'ROUNDWINNERTOW'}),
    nextRoundGame: () => dispatch({type:'NEXTROUNDGAME'}),
    nextRoundOne: () => dispatch({type:'NEXTROUNDONE'}),
    nextRoundTow: () => dispatch({type:'NEXTROUNDTOW'}),
    showBord: () => dispatch({type: 'SHOWBORD'}),
    hideBord: () => dispatch({type:'HIDEBORD'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);