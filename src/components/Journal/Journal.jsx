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

    const deletePost = () => {
        console.log('this button will delete the journal post');
    }    
    return (
        <>

        This is the journal page!
{/* 
        {JSON.stringify(journal)} */}

         <center><Link to="/user"><button>Home Page</button></Link> </center>
       

        {journal.map((journal => {
            return (
                <li key={journal.id}>

                    {journal.text}
                    <button onClick={() => 
                        dispatch
                            ({type: 'DELETE_JOURNAL'})}>Delete text</button>

                </li>
            )
        }))}
        </>
    )
}

export default Journal;