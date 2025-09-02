import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom';

function CategoryItem() {

    const { id } = useParams();
// useParams() is a React Router hook that lets you access values from the current URL path that match a route’s parameter pattern.
        // in other words useParams() hook in React Router only returns the parameters that are defined as dynamic segments in your route's path.
                // so because my path was "/category-item/:id", useParams(); pulls the ID only aka returns { id: 5 }
//  { id } pulls the id property out of that returned object, 
        // so now you have easy access to the id value directly as a variable in your code.
        // it's just the value

    const dispatch = useDispatch();
    
        useEffect(() =>
        {
            dispatch({type: 'FETCH_CARD' });
        }, 
            [dispatch])

            // useEffect(() => {
                 /* effect code goes here */

                    // Fetching data (API calls, Redux dispatches)

                    // Setting up timers or subscriptions

                    // Manipulating the DOM

                    // Logging
          //}, 
                  // []
                  // this is where the dependecy goes in 
                  // React “watches” these variables:
                  // If any value inside changes, it re-runs the effect.
          //  );
    

    const [randomCard, setRandomCard] = useState(null);

    const [toggle, setToggle] = useState(true)

    const cards = useSelector((store) =>store.cardReducer);

    const fetchRandomCard = () => {
        console.log('a random card will display when I press this button!');

        const filtered = Array.isArray(cards)

        // check if cards an array and if true

      ? cards.filter(card => card.category_id === Number(id))

      // filter through card
      // iterirate through each element inside the array card, 
      // and if the category_id = the number of that id, return the new array of those elements

                // grabs id from the URL and uses it to filter only cards 
                // that belong to that category (card.category_id === Number(id)).
                // Number(id) turns the VALUE of that ID into a number.
                        // for example id = value of 5. Number(5) = turns into 5 a real number

      : [];

    if (filtered.length > 0) {

        const randomIndex = Math.floor(Math.random() * filtered.length);

        setRandomCard(filtered[randomIndex]);

    } else {

        setRandomCard(null);
    }
    
    }
    
    // const likeCard = () => {
    //     dispatch({ type: 'UPDATE_CARD', 
    //     payload: { id: randomCard.id } 

    //     });
    // }

    const handleChange = () => {
        dispatch({ type: 'UPDATE_CARD', 
        payload: { id: randomCard.id } });

        return setToggle(!toggle);
      }

    return (
        <>

    <center><button onClick={fetchRandomCard}>Generate Card</button> </center>

    <ul className="box-style">
        {randomCard && (
          <li key={randomCard.id}>
            <h3>{randomCard.name}</h3>
            <p>{randomCard.description}</p>
            <button onClick={handleChange}>{toggle ? 'Like' : 'Unlike'}</button>
          </li>
        )}
      </ul>

        
        
        <center><Link to="/user"><button>Home Page</button></Link> </center>
        </>
    )

}

export default CategoryItem;