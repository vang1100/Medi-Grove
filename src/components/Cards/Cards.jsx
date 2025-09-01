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
        
        {/* {JSON.stringify(card)} */}

        {Array.isArray(card)
        // Array.isArray checks if the passed value is an array
         && 
        // && operator will return if true. so if card is an array and then return....
        card.filter(card => card.is_liked === true)

        //card.filter will create a new aray from the filtered out elements
        // card => card.is_liked ==== true so only grab the elements where is_liked === true and make a new array out of it
            .map(card => (
            <li key={card.id} className="box-style">

      {/* Display card info here */}
      
            <h3>{card.name}</h3>
            <p>{card.description}</p>
    </li>
            
            ))}

        

        </>
    )
}

export default Cards;