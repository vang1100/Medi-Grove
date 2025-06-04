const cardReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CARD':
      return action.payload;
  }
      return state;
  };

  export default cardReducer;