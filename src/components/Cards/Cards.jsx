import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function Cards() {

    const cards = useSelector((store) => store.cardReducer)
    const dispatch = useDispatch();

    useEffect(() =>
            {
                dispatch({type: 'FETCH_CARD' });
            }, 
                [])


    return (
        <>
        {/* This is where the liked cards will appear
        {JSON.stringify(cards)} */}

        
        </>
    )
}

export default Cards;