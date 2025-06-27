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

       // console.log('a random card will display when I press this button!');

        const filtered = Array.isArray(card)

        // if card is an array

      ? card.filter(categoryone => categoryone.category_id === 2)

      // then filter where category_id is equal to 2. and if not an array, return an empty array
      : [];

    if (filtered.length > 0) {

        const randomIndex = Math.floor(Math.random() * filtered.length);

         console.log('random card', filtered[randomIndex])

        setRandomCard(filtered[randomIndex]);

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