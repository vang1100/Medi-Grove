import {React, useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';import { Link } from 'react-router-dom/cjs/react-router-dom';

function Journal () {

    const dispatch = useDispatch();
    useEffect(() =>
    {
        dispatch({type:'FETCH_JOURNAL'});
    }, [])

  
    const journal = useSelector((store)=>store.journalReducer);
    
    return (
        <>

        This is the journal page!

        {JSON.stringify(journal)}

         <center><Link to="/user"><button>Home Page</button></Link> </center>
        </>
    )
}

export default Journal;