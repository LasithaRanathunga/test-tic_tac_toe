const initState = {
  positions: [false, false, false, false, false, false, false, false, false],
  marked: 0,
  roundsWon: 0,
  roundWinner: false,
  won: false
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLAYERONEMARKED':
      const markedArr = [...state.positions];
      markedArr[action.value] = true;
      return {
        ...state,
        marked: state.marked + 1,
        positions: markedArr
      }
    case 'ONEWINS':
      return {
        ...state,
        won: true
      }
    case 'ROUNDSWONONE':
      return {
        ...state,
        roundsWon: state.roundsWon + 1
      }
    case 'ROUNDWINNERONE':
      return {
        ...state,
        roundWinner: true
      }
    case 'NEXTROUNDONE':
      return {
        ...state,
        positions: [false, false, false, false, false, false, false, false, false],
        marked: 0,
        roundWinner: false
      }
    case 'ONERESET':
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