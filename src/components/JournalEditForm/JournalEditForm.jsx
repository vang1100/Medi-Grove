import { useState} from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function JournalEditForm({journal}){

    const dispatch = useDispatch();
     const history = useHistory();

    const [journalFormData, setJournalFormData] = useState({
            id: journal.id,
            title: journal.title,
            text: journal.text
        });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setJournalFormData(prevData => ({
            ...prevData,
            [name]:value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: 'PUT_JOURNAL',
            payload: journalFormData
        });

         history.push('/journal');
    }
    return (
        <>
        {/* Description: only for editing logic and form */}

        <form onSubmit={handleSubmit}>

            <textarea
            type="text"
            name="title"
            value={journalFormData.title}
            onChange={handleChange}
            />

            <br/>
            <br/>

            <textarea
            rows={30} 
            cols={60}
            type="text"
            name="text"
            value={journalFormData.text}
            onChange={handleChange}
            />

            <input type="submit" value="Submit"/>
            
        </form>
        </>
    )
}

export default JournalEditForm;