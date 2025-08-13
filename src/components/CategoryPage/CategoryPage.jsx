import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';


function CategoryPage() {


    const category = useSelector((store) =>store.categoryReducer);

   

    return (
        <>
      
 hi 

 {JSON.stringify(category)}

{Array.isArray(category) && category.map((category =>{
    return(
        <li key={category.id}>
            <Link to={`/category-item/${category.id}`}>{category.type} </Link>
        </li>
    )
}))}

        </>
        
    )
}

export default CategoryPage;