const initState = {
  positions: [false, false, false, false, false, false, false, false, false],
  marked: 0,
  roundsWon: 0,
  roundWinner: false,
  won: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLAYERTOWMARKED':
      const markedArr = [...state.positions];
      markedArr[action.value] = true;
      return {
        ...state,
        marked: state.marked + 1,
        positions: markedArr
      }
    case 'TOWWINS':
      return {
        ...state,
        won: true
      }
      case 'ROUNDSWONTOW':
        return {
          ...state,
          roundsWon: state.roundsWon + 1
        }
      case 'ROUNDWINNERTOW':
        return {
          ...state,
          roundWinner: true
        }
      case 'NEXTROUNDTOW':
        return {
          ...state,
          positions: [false, false, false, false, false, false, false, false, false],
          marked: 0,
          roundWinner: false
        }
      case 'TOWRESET':
        return {
          positions: [false, false, false, false, false, false, false, false, false],
          marked: 0,
          roundsWon: 0,
          won: false
        }
  }
  return state
}

export default reducer;