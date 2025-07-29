import { useState} from "react";
import { useDispatch} from 'react-redux';

function EditForm() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const dispatch = useDispatch();



    const edit = (event) => {

        event.preventDeaulft();
        dispatch({type: 'PUT_JOURNAL', })
    }

    return (
        <>
         <form onSubmit={edit}>
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

        </>
    )
}

export default EditForm;