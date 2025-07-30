import { useState, useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';

function EditForm() {

    const journal = useSelector((store)=>store.journalReducer); 
    

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const dispatch = useDispatch();

     useEffect(() =>
        {
            dispatch({type:'FETCH_JOURNAL'});
        }, [])


    const edit = (event) => {

        event.preventDeaulft();
        dispatch({type: 'PUT_JOURNAL', })
    }

    return (
        <>

         {Array.isArray(journal) &&  journal.map((journal => {
            return (
                <li key={journal.id}>

                  {/* Title: 
                  {journal.title} 
                  <br/>
                  {journal.text}
                  <br/>
                      */}

            <form onSubmit={edit}>
            <input 
                type="text"
                value={journal.title}
                onChange={(event) => setTitle(event.target.value)}
            
            ></input>
            <br/>
            <textarea
                
                value={journal.text}
                onChange={(event) => setText(event.target.value)}
                
                
            />

            
            <input type="submit" value="Submit"></input>
        </form>

                </li>
            )
        }))}


         {/* <form onSubmit={edit}>
            <input 
                placeholder={journal.title}
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            
            ></input>
            <br/>
            <textarea
                
                value={journal.text}
                onChange={(event) => setText(event.target.value)}
                
                
            /> */}

            
            
            {/* <input type="submit" value="Submit"></input>
        </form> */}

        </>
    )
}

export default EditForm;