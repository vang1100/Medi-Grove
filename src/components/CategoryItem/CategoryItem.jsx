import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function CategoryItem() {

    // const dispatch = useDispatch();
    
    //     useEffect(() =>
    //     {
    //         dispatch({type: 'FETCH_CARD' });
    //     }, 
    //         [])
    

    // const [randomCard, setRandomCard] = useState(null);

    // const cards = useSelector((store) =>store.cardReducer);

    // const fetchRandomCard = () => {
    //     console.log('a random card will display when I press this button!');

    //     const filtered = Array.isArray(cards)

    //   ? cards.filter(category => category.category_id === category.category_id)

    //   : [];

    // if (filtered.length > 0) {

    //     const randomIndex = Math.floor(Math.random() * filtered.length);

    //     setRandomCard(filtered[randomIndex]);

    // } else {

    //     setRandomCard(null);
    // }
    
    // }

    return (
        <>

    {/* <center><button onClick={fetchRandomCard}>Generate Card</button> </center>

    <ul>
        {randomCard && (
          <li key={randomCard.id}>
            <h3>{randomCard.name}</h3>
            <p>{randomCard.description}</p>
          </li>
        )}
      </ul> */}

        
        
        <center><Link to="/user"><button>Home Page</button></Link> </center>
        </>
    )

}

export default CategoryItem;