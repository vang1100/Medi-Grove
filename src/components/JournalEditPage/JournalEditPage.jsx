import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import JournalEditItem from "../JournalEditItem/JournalEditItem";

function JournalEditPage () {

    const dispatch = useDispatch();
    const journal = useSelector((store)=>store.journalReducer); 

    //
    console.log('what is inside journal', journal);

    useEffect(()=> {
        dispatch({
            
            type: 'FETCH_JOURNAL'

        });
    }, []);

    return (

        <>


        {/* Description: overall list/page logic */}

        <ul>
            {journal.map((journal) =>
            <JournalEditItem key={journal.id} journal={journal}/>)}
        </ul>

        </>
    )
}

export default JournalEditPage;