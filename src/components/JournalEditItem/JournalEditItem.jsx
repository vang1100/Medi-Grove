import JournalEditForm from "../JournalEditForm/JournalEditForm";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function JournalEditItem({journal}) {
    return (
        <>
        {/* Descriptoin: handles display and structure for one event */}

        <h2>Journal ID: {journal.id}</h2>
        <Link to="/journal">Back to journal</Link>
        <JournalEditForm journal={journal}/>
        </>
    )
}

export default JournalEditItem;