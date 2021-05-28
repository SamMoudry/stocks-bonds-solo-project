const setNewYear = (state = {}, action) => {
    switch (action.type) {
        case 'SET_NEW_YEAR':
          return action.payload;
        default:
          return state;
      }
  }
  
  export default setNewYear;