const initState = {
  start: false,
  bord: false,
  matchType: null,
  totalRounds: null,
  shouldWin: null,
  currentRound: 1,
  activePlayer: 1,
  nextRound: false
}

const reducer = (state=initState, action) => {
  switch (action.type) {
    case 'STARTGAME':
      return {
        ...state,
        start: true,
        bord: true,
        matchType: action.value.matchType,
        totalRounds: parseInt(action.value.totalRounds),
        shouldWin: parseInt(action.value.shouldWin)
      }
    case 'SHOWBORD':
      return {
        ...state,
        bord: true
      }
    case 'HIDEBORD':
      return {
        ...state,
        bord: false
      }
    case 'SWITCHPLAYER':
      return {
        ...state,
        activePlayer: action.value
      }
    case 'GAMEWON':
      return {
        ...state,
        won: action.value
      }
    case 'INCREMENTROUND':
      return {
        ...state,
        currentRound: state.currentRound +1
      }
    case 'NEXTROUND':
      return {
        ...state,
        nextRound: true
      }
    case 'NEXTROUNDGAME':
      return {
        ...state,
        activePlayer: 1,
        nextRound: false
      }
    case 'GAMERESET':
      return {
        start: false,
        matchType: null,
        totalRounds: null,
        currentRound: 1,
        activePlayer: 1,
        nextRound: false
      }
  }
  return state;
}

export default reducer;