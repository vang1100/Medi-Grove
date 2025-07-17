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

    const [journalPost, setJournalPost] = useState('');

    const submit = (event) => {
        event.preventDefault();
       // console.log('submit journal entry');

        dispatch({ type: 'ADD_JOURNAL_POST', payload: journalPost});
        setJournalPost({id: journalPost.id + 1, title:'', text:''})
    }


    return (
        <>

        This is the journal page!
{/* 
        {JSON.stringify(journal)} */}

         <center><Link to="/user"><button>Home Page</button></Link> </center>
       
        <form onSubmit={submit}>
            <input 
                placeholder="Title"
                value={journalPost.title}
            
            ></input>
            <br/>
            <input 
                placeholder="Text" 
                tyle={{ width: '200px', height: '100px' }}
                value={journalPost.text}
                >
                
            </input>
            
            <input type="submit" value="submit journal"></input>
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