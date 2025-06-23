import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
function CategoryOne() {

    const dispatch = useDispatch();


    useEffect(() =>
    {
        dispatch({type: 'FETCH_CARD' });
    }, 
    [])

    const card = useSelector((store) =>store.cardReducer);

    return (
        <>
        Random card will populate.

        {JSON.stringify(card)}

            
            {/* {card.map((categoryone) => {

                return (
                    <li key={categoryone.id}>

                        {categoryone.name}

                    </li>
                )

            })} */}

         <ul>
             {Array.isArray(card) &&
                card
                 .filter(categoryone => categoryone.category_id === 1)
                .map(categoryone => (
                 <li key={categoryone.id}>
                     <h3>{categoryone.name}</h3>
                    <p>{categoryone.description}</p>
                </li>
                                ))}
        </ul>
        
        <center><button>Home Page</button> </center>

        </>
        
    )
}

export default CategoryOne;