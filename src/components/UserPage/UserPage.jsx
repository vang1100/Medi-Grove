import {React, useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';

function UserPage() {

  const dispatch = useDispatch();

  useEffect (() => {
   //console.log('testing');
    dispatch({type: 'FETCH_CARD'});
    dispatch({type: 'FETCH_CATE'});
  }, [])

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const card = useSelector((store) =>store.cardReducer);

  
  return (
    <div className="container">
     
     {/* {card.map((card => {
      return (
        <li key={card.id}>
          
          Card ID: {card.id}
          <br/>
          <h3>Card Name:</h3> {card.name}
          <br/>
          <br/>
          <h4>Card Description: </h4>{card.description}
         < br/>
          <br/>

        </li>
      )
     }))} */}

      
      <h4>Hello Medi Grove....Under construction....</h4>
      <br/>
      Welcome, {user.username}!
      <p>Your ID is: {user.id}</p>
      
      <LogOutButton className="btn" />
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
