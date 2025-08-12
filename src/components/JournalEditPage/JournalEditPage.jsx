import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import JournalEditItem from "../JournalEditItem/JournalEditItem";

function JournalEditPage () {

    const dispatch = useDispatch();
    const journals = useSelector((store)=>store.journalReducer); 
    const { id } = useParams();  // get journal id from URL (string)

    //Use React Router's useParams hook to get the journal id from the URL.

    //Select the single journal entry from Redux store or state using that id.

    //Then pass only that journal entry down as the journal prop to JournalEditItem (which then passes it to JournalEditForm).


    const journal = Array.isArray(journals)
                    // to check if a value is an array.
                    // We want to make sure journals is an actual array before trying to search it 
    ? journals.find(j => String(j.id) === id)
                    // if journals is an array, then run find.() method
                        // find.() definition: Looks through each element in the array and returns the first one 
                                // where the given function returns true
    : null;
                    // if journals is not an array, return null

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