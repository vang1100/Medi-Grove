import {React, useEffect, useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';

function CreateJournalPost(){
    
        const history = useHistory();

      const dispatch = useDispatch();
        useEffect(() =>
        {
            dispatch({type:'FETCH_JOURNAL'});
        },
        
        [])

        const journal = useSelector((store)=>store.journalReducer); 
        const user = useSelector((store) => store.user);
    
    
        const [title, setTitle] = useState('');
        const [text, setText] = useState('');
    
    
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
            history('/journal');

           //history.push('/journal');
        }


    return (
        <>
         <form onSubmit={submit}>
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
            
            <Link to="/journal">Back to Journal</Link>
        </form>
        </>
    )
}

export default CreateJournalPost;