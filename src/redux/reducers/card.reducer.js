const cardReducer = (state = {}, action) => {
       //  console.log('cardReducer called with state:', state, 'and action:', action);

  switch (action.type) {
    case 'SET_CARD':
    //    console.log('action .payload', action.payload)
      return action.payload;
  }
      return state;
  };

  export default cardReducer;