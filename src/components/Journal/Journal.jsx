import {React, useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Box from '@mui/material/Box';

function Journal () {

    const dispatch = useDispatch();
    useEffect(() =>
    {
        dispatch({type:'FETCH_JOURNAL'});
    }, [])

  
    const journal = useSelector((store)=>store.journalReducer); 
    const user = useSelector((store) => store.user);


    // const [title, setTitle] = useState('');
    // const [text, setText] = useState('');


    // }
    
    // const submit = (event) => {
    //     event.preventDefault();
    //    // console.log('submit journal entry');

    //     dispatch({ type: 'POST_JOURNAL',
    //         payload: {
    //             title:title,
    //             text: text
    //         }
    //     });
    //     setTitle('');
    //     setText('');
    // }

   
 const formatDate = (dateString) => {
            const date = new Date(dateString);
            return new Intl.DateTimeFormat('en-US', {
            // these options arguments will give more customization
              year: 'numeric', // Display the year as a number (e.g., 2023)
              month: 'long', // Display the full name of the month (e.g., "January")
              day: 'numeric', // Display the day of the month as a number (e.g., 1)
            }).format(date);
          };
    return (
        <>

<h1>{user.username}'s Journal</h1>
        
{/* 
        {JSON.stringify(journal)} */}

         <center><Link to="/user"><button>Home Page</button></Link> <Link to="/create-post"><button>Create Post</button></Link></center>

       
        {/* <form onSubmit={submit}>
            <textarea 
                placeholder="Title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            
            />
            <br/>
            <textarea
                rows={30} 
                cols={60}
                value={text}
                onChange={(event) => setText(event.target.value)}
                
                
            />

            
            
            <input type="submit" value="Submit"></input>
        </form> */}

        {Array.isArray(journal) &&  journal.map((journal => {
            return (
                <li key={journal.id}>

                  
                  <h3>{journal.title} </h3>
                  <h5>{formatDate(journal.date)}</h5>
                  <br/>
                  <Box
                    component="section" 
                    sx={{ p: 2, 
                        border: '1px dashed black', 
                        width: 100,
                        height: 100, }}
                    >
                        {journal.text}</Box>
        
                  <br/>
                  
                    <button onClick={() => 
                        dispatch
                            ({type: 'DELETE_JOURNAL',
                            payload: journal.id
                            })}>Delete text</button>
                   <Link to={`/edit-journal/${journal.id}`}><button>Edit</button></Link> 
                    

                </li>
            )
        }))}
        </>
    )
}

export default Journal;