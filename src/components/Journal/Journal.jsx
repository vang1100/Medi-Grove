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

    const [journalPost, setJournalPost] = useState();

    
    return (
        <>

        This is the journal page!
{/* 
        {JSON.stringify(journal)} */}

         <center><Link to="/user"><button>Home Page</button></Link> </center>
       
        <form>
            <input></input> <input></input><button>Submit</button>
        </form>
        {Array.isArray(journal) &&  journal.map((journal => {
            return (
                <li key={journal.id}>

                  Title: 
                  {journal.title} 
                  <br/>
                  {journal.text}
                  <br/>
                    <button onClick={() => 
                        dispatch
                            ({type: 'DELETE_JOURNAL',
                            payload: journal.id
                            })}>Delete text</button>
                    <button>Edit</button>

                </li>
            )
        }))}
        </>
    )
}

export default Journal;