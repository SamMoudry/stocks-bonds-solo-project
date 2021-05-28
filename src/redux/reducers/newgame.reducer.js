const setNewGame = (state = {}, action) => {
  switch (action.type) {
      case 'SET_NEW_GAME':
        return action.payload;
      default:
        return state;
    }
}

export default setNewGame;