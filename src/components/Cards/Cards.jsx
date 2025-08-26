import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function Cards() {

    const card = useSelector((store) => store.cardReducer)
    const dispatch = useDispatch();

    useEffect(() =>
            {
                dispatch({type: 'FETCH_CARD' });
            }, 
                [])


    return (
        <>
        This is where the liked cards will appear
        {/* {JSON.stringify(card)} */}

        {Array.isArray(card) && card.map((card => {
            <li key={card.id}>

                <h1>{card.description}</h1>

            </li>
        }))}

        

        </>
    )
}

export default Cards;