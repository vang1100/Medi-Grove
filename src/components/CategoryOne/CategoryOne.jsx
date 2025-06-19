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
        </>
    )
}

export default CategoryOne;