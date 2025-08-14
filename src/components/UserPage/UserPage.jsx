import {React, useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CategoryPage from '../CategoryPage/CategoryPage';

function UserPage() {

  const dispatch = useDispatch();

  useEffect (() => {
   //console.log('testing');
    dispatch({type: 'FETCH_CARD'});
    dispatch({type: 'FETCH_CATE'});
    dispatch({type: 'FETCH_JOURNAL'});
  }, [])

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const card = useSelector((store) =>store.cardReducer);

  
  return (

   

    <div className="container">

       {/* {JSON.stringify(card)} */}

       
            <p style={{color: 'red'}}>....Under <strong>construction</strong>....</p>
      
    <br/>
    
      
            Welcome, {user.username}!
            <br/>
            
          <Link to="/journal">
          
              <button>Go to user journal</button>

          </Link>

            <br/>
            <p>Your ID is: {user.id}</p>

            <h3>Pick a card below</h3>

            <CategoryPage/>
         
          


          {/* <Link to="/category-page/:id">
        
          < img src="walking-thoughts.png" />
        
        </Link> 

    <br/>
    <br/>

          <Link to="/category-two-affirmations">
            
            <img src="affirmations.png"/>
          
          </Link>

    <br/>
    <br/>

          <Link to="/category-three-tea-meditation">
            
            <img src="tea-meditation.png"/>

          </Link>

    <br/>
    <br/>

        <Link to="/category-four-earth-messages">
          
          <img src="earths-messages.png"/>
        
        </Link> */}
      
    <br/>
  <br/>


      <LogOutButton className="btn" />
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

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