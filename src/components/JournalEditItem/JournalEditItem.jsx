import JournalEditForm from "../JournalEditForm/JournalEditForm";
function JournalEditItem({journal}) {
    return (
        <>
        {/* Descriptoin: handles display and structure for one event */}

        <h2>Journal ID: {journal.id}</h2>
        <JournalEditForm journal={journal}/>
        </>
    )
}

export default JournalEditItem;