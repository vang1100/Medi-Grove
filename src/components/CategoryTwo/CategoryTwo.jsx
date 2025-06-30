import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';


function CategoryTwo() {

  const dispatch = useDispatch();

    useEffect(() =>
    {
        dispatch({type: 'FETCH_CARD' });
    }, 
        [])

    const card = useSelector((store) =>store.cardReducer);

    const [randomCard, setRandomCard] = useState(null);

    const fetchRandomCard = () => {

        // three operands: 
                // a condition followed by a question mark (?), 
                // then an expression to execute if the condition is truthy followed by a colon (:), 
                // and finally the expression to execute if the condition is falsy
        // ====> if card is an array, 
        //      then filter through and find the category where it equals 2
        //         if not an array, then return an empty array? undefined array?

       // console.log('a random card will display when I press this button!');

        const filteredArray = Array.isArray(card)

        // The Array.isArray() method will pass through the const card and it will check if it's an array

      ? card.filter(cardItem => cardItem.category_id === 2)
                    // card.filter(function(categoryone) {
                // For each object in the 'card' array, check if its category_id is 2
                    //   if (categoryone.category_id === 2) {
                    //     // If true, include this object in the new array
                    //     return true;
                    //   } else {
                    //     // If false, exclude it
                    //     return false;
                    //   }
                    // });


      //  and if not an array, return an empty array
      : [];

      
    if (filteredArray.length > 0) {

        const randomIndex = Math.floor(Math.random() * filteredArray.length);

         console.log('random card', filteredArray[randomIndex])

        setRandomCard(filteredArray[randomIndex]);

    } else {

        setRandomCard(null);
    }
    
   
    }

    return (
        <>
      
  
    <center><button onClick={fetchRandomCard}>Generate Card</button> </center>

    <ul>
        {randomCard && (
          <li key={randomCard.id}>
            <h3>{randomCard.name}</h3>
            <p>{randomCard.description}</p>
          </li>
        )}
      </ul>

        
        
        <center><Link to="/user"><button>Home Page</button></Link> </center>

        </>
        
    )
}

export default CategoryTwo;