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

    const [journalPost, setJournalPost] = useState({});

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    //  const handleChange = (event) => {
    //     event.preventDefault();

    //     const title = event.target.title;
    //     const text = event.target.text;
    //     setJournalPost({...journalPost, title, text})

    // }
    
    const submit = (event) => {
        event.preventDefault();
       // console.log('submit journal entry');

        dispatch({ type: 'POST_JOURNAL',
            payload: {
                title:title,
                text: text
            }
        });
        setTitle('');
        setText('');
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
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            
            ></input>
            <br/>
            <textarea
                
                value={text}
                onChange={(event) => setText(event.target.value)}
                
                
            />

            
            
            <input type="submit" value="Submit"></input>
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
                   <Link to="/edit-journal"><button>Edit</button></Link> 
                    

                </li>
            )
        }))}
        </>
    )
}

export default Journal;