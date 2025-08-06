import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JournalEditItem from "../JournalEditItem/JournalEditItem";

function JournalEditPage () {

    const dispatch = useDispatch();
    const journals = useSelector((store)=>store.journalReducer); 
    const { id } = useParams();  // get journal id from URL (string)


    const journal = Array.isArray(journals)
    ? journals.find(j => String(j.id) === id)
    : null;

  if (!journal) {
    return <div>Journal entry not found.</div>;
  }

    // console.log('what is inside journal', journal);

    useEffect(()=> {
        dispatch({
            
            type: 'FETCH_JOURNAL'

        });
    }, []);

    return (

        <>


        {/* Description: overall list/page logic */}

        <ul>
            
            <JournalEditItem key={journal.id} journal={journal}/>
        </ul>

        </>
    )
}

export default JournalEditPage;