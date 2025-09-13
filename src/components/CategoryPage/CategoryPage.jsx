import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom';
import CategoryItem from '../CategoryItem/CategoryItem';


function CategoryPage() {

   

    const category = useSelector((store) =>store.categoryReducer);

   

    return (
        <>
      

{Array.isArray(category) && category.map((category =>{
    return(
        <li className="box-style" key={category.id}>
            <h2>{category.type}</h2><Link to={`/category-item/${category.id}`}><br/><img src={category.img}/></Link>
        </li>
    )
}))}

        </>
        
    )
}

export default CategoryPage;