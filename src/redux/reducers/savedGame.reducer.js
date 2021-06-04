const setSavedGame = (state = [], action) => {
    switch (action.type) {
        case 'SET_SAVED_GAME':
          return action.payload;
        default:
          return state;
      }
  }
  
  export default setSavedGame;