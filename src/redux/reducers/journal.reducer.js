const journalReducer = (state = {}, action) => {
       

  switch (action.type) {
    case 'SET_JOURNAL':
    //    console.log('action .payload', action.payload)
      return action.payload;
  
    case 'ADD_JOURNAL_POST':

    return [...state, action.payload];
  }

      return state;
  };

  export default journalReducer;