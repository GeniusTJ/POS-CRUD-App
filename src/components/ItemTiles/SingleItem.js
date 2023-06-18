import React, { useEffect, useState } from 'react'
import api from '../axious'; 
import classes from './SingleItem.module.css'

const SingleItem = (props) => {
//   console.log(props + "props");
//   const [items,setItems] = useState([])

//   const fetchItems = (foodType) => {
    
//     api 
//       .get(`/api/${props.foodtype}`)
//       .then((response) => {
//         const fetchedItems = response.data;
//         console.log(fetchedItems);
//         setItems(fetchedItems);
//       })
//       .catch((error) => {
//         console.error(`Failed to fetch ${foodType} items:`, error);
//       });
//   };
// useEffect(()=>{
//   fetchItems(props.foodType);
// },[]);

  return (
    <div className={classes.outer}>
        <span className={classes.time}>15 Minutes</span>
        <div className={classes.titleHolder}>
        {/* {items
        .filter((item) => item.foodType === props.foodType) // Filter items based on food type
        .map((item) => (
          <div className={classes.foodType} key={item.id}>
            <span className={classes.mainTitle}>{item.name}</span>
            <span className={classes.subTitle}>{item.price}</span>
          </div>
        ))} */}
        </div>
    </div>
  )
}

export default SingleItem