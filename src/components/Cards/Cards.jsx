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

        {Array.isArray(card) && card
            .filter(card => card.is_liked === true)
            .map(card => (
            <li key={card.id}>

      {/* Display card info here */}
      
      <h3>{card.name}</h3>
      <p>{card.description}</p>
    </li>
            
            ))}

        

        </>
    )
}

export default Cards;