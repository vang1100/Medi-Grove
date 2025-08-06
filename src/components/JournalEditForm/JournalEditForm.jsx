import { useState} from 'react';
import { useDispatch} from 'react-redux';

function JournalEditForm({journal}){

    const dispatch = useDispatch();

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
        })
    }
    return (
        <>
        {/* Description: only for editing logic and form */}

        <form onSubmit={handleSubmit}>

            <input
            type="text"
            name="title"
            value={journalFormData.title}
            onChange={handleChange}
            />

            <input
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