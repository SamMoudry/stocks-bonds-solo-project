const setNewYear = (state = [], action) => {
    switch (action.type) {
        case 'SET_NEW_YEAR':
          return [...state, action.payload];
        case 'CLEAR_NEW_YEAR':
            return [];
        default:
          return state;
      }
  }
  
  export default setNewYear;