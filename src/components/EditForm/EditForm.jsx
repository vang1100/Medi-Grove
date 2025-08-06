import { useState, useEffect} from "react";
import { useDispatch, useSelector} from 'react-redux';
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";

function EditForm() {


     const journal = useSelector((store)=>store.journalReducer); 

     const [journalList, setJournalList] = useState({
        title: '',
        text: ''
     })

     const dispatch = useDispatch();

     // Fetch journal data on mount
        useEffect(() => {
  if (Array.isArray(journal) && journal.length > 0) {
    setJournalList({
      title: journal.title,   // or whatever journal you want to edit
      text: journal.text
    });
  }
}, [journal]);


    const handleSubmit = (event) => {

        event.preventDefault();
        dispatch({
            type: 'PUT_JOURNAL',
           })
    }

    const handleChange = (event) => {
     
    //  const target = event.target;
    //  const name = event.target.name;
    //  const value = event.target.value;

    const { name, value } = event.target;

     setJournalList(prevJournalList =>({
        ...prevJournalList,
        [name]:value
     }));
    }


    return (
        <>
{/* at this point, these are controlled inputs and i cannot change it...s
o what do i need to change in order to edit them? */}

{Array.isArray(journal) && journal.map((journal => {
    return (
        <li key={journal.id}>

            <form onSubmit={handleSubmit}>
                 <input
                    type="text"
                    name="title"
                    value={journalList.title}
                    onChange={handleChange}>
                </input>
                <input
                    type="text"
                    name="text"
                    value={journalList.text}
                    onChange={handleChange}>
                </input>

                <input type="submit" value="Submit"></input>
            </form>

        </li>
    )
}))}




        </>
    )
}

export default EditForm;