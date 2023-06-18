import React, { useState, useEffect } from 'react';
import api from '../axious'; 
import classes from './FoodTypeTile.module.css';

const FoodTypeTile = (props) => {
  const [mouseState, setMouseEntered] = useState(false);
  const foodtype = props.foodType;
  const onPress = props.onPress;
  const mouseEnterHandler = () => {
    setMouseEntered(true);
  };

  const mouseLeaveHandler = () => {
    setMouseEntered(false);
  };
 
  const fetchItems = (foodType) => {
    console.log("fetch items");
    api 
      .get(`/api/${foodType}`)
      .then((response) => {
        const items = response.data;
        console.log(items);
      })
      .catch((error) => {
        console.error(`Failed to fetch ${foodType} items:`, error);
      });
  };



  return (
    <div
      
      className={classes.outer}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      style={{ backgroundColor:   !mouseState ? props.defColor : props.onColor }}
    
      onClick={() => {
        fetchItems(foodtype);
        onPress(foodtype);
  }}
    >
      <img className={classes.image} src={props.source} alt="" />
      <div className={classes.titleHolder}>
        <span className={classes.mainTitle}>{props.heading}</span>
        <span className={classes.subTitle}>13 Items</span>
      </div>
    </div>
  );
};


export default FoodTypeTile;
