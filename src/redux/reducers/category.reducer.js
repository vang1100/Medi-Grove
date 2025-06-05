const categoryReducer = (state ={}, action) => {
     console.log('categoryReducer called with state:', state, 'and action:', action);
  
     switch (action.type) {
       
        case 'SET_CATE':
     
    //    console.log('SET_CATE  Payload:', action.payload);

            return action.payload;

    }
            return state;
};

export default categoryReducer;

// categoryReducer is a Redux reducer function. Reducers are pure functions that take the current state and an action as arguments and return the new state.

// The reducer's initial state is an empty object (state = {}).

// When an action is dispatched, the reducer checks the action's type.

// If the action's type is 'SET_CATE', the reducer returns action.payload as the new state.

// For any other action type, it returns the current state unchanged.