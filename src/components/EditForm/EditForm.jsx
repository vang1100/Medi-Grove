import { useState, useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";

function EditForm() {

    const { id } = useParams();

     const journal = useSelector((store)=>store.journalReducer); 
    

     const [title, setTitle] = useState('');
     const [text, setText] = useState('');

     const dispatch = useDispatch();

     // Fetch journal data on mount
        useEffect(() => {
            dispatch({type:'FETCH_JOURNAL'});
}           , 
                [dispatch]);

    useEffect(() => {
    if (journal && Array.isArray(journal) && journal.length > 0) {
        setTitle(journal[0].title);
        setText(journal[0].text);
    }
}, [journal]);

    //  useEffect(() =>
    //     {
    //         dispatch({type:'FETCH_JOURNAL'});
    //     }, [])


    const edit = (event) => {

        event.preventDefault();
        dispatch({
            type: 'PUT_JOURNAL',
            payload: { id: journal[0].id, title, text } })
    }

    const [editId, setEditId] = useState(null);

const startEdit = (journal) => {
  setEditId(journal.id);
  setTitle(journal.title);
  setText(journal.text);
}

    return (
        <>


{journal.map(j => (
      <li key={j.id}>
        {j.title}
        <button onClick={() => startEdit(j)}>Edit</button>
      </li>
    ))}
    {editId && (
      <form onSubmit={edit}>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
            type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    )}




{/* // none of below  works */}

         {/* {Array.isArray(journal) &&  journal.map((journal => {
            return (
                <li key={journal.id}> */}

                  {/* Title: 
                  {journal.title} 
                  <br/>
                  {journal.text}
                  <br/>
                      */}

            {/* <form onSubmit={edit}>
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
        }))} */}


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