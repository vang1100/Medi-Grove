import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';
//import { useParams } from 'react-router-dom/cjs/react-router-dom';

function CategoryPage() {


    // const cards = useSelector((store) =>store.cardReducer);
    const category = useSelector((store) =>store.cateReducer);

     const { id } = useParams(); 

     const whatCategory = Array.isArray(category) 
     ? category.find(c => String(c.id) === id)
     
     : null;
    
    if (!whatCategory ) {
        return <div>Card not found</div>;
    }

    // const [randomCard, setRandomCard] = useState(null);

    // const fetchRandomCard = () => {
    //     console.log('a random card will display when I press this button!');

    //     const filtered = Array.isArray(card)

    //   ? card.filter(category => category.category_id === 1)

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
      
  <CategoryItem/>


        </>
        
    )
}

export default CategoryPage;