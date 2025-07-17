const journalReducer = (state = {}, action) => {
       

  switch (action.type) {
    case 'SET_JOURNAL':
    //    console.log('action .payload', action.payload)
      return action.payload;
  
    case 'ADD_JOURNAL_POST':

    console.log('what is in add journal post...', action.payload)

    return [...state, action.payload];
  }

      return state;
  };

  export default journalReducer;