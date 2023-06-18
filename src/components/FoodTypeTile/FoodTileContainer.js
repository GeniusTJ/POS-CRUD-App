import React,{useState,useEffect} from 'react'
import classes from './FoodTileContainer.module.css';
import FoodTypeTile from './FoodTypeTile'
import SingleItem from '../ItemTiles/SingleItem';
import api from '../axious'; 
import img1 from '../../assests/breakfast.png'
import img2 from '../../assests/desserts.png'
import img3 from '../../assests/dinner.png'
import img4 from '../../assests/drinks.png'
import img5 from '../../assests/lunch.png'
import img6 from '../../assests/soup.png'
// import SingleItem from '../ItemTiles/SingleItem';
// this is foodtile
//second branch

const FoodTileContainer = (props) => {
  const [items,setItems] = useState([])

  const fetchItems = (foodType) => {
    
    api 
      .get(`/api/${props.foodtype}`)
      .then((response) => {
        const fetchedItems = response.data;
        console.log(fetchedItems);
        setItems(fetchedItems);
      })
      .catch((error) => {
        console.error(`Failed to fetch ${foodType} items:`, error);
      });
  };

  const handleClick = () => {
    const { foodType } = props;
    fetchItems(foodType);
    console.log("clicked");
  };
  
useEffect(()=>{
  fetchItems(props.foodType);
},[]);
  return (
    <div className={classes.container}>
        <FoodTypeTile  onClick={handleClick} foodType="breakfast" source={img1} heading="Breakfast" defColor="#B4FFF6" onColor="#2FFFE6" />
        <FoodTypeTile foodType="dinner" source={img3} heading="Dinner" defColor="#A4FFB8" onColor="#45FF6E"/>
        <FoodTypeTile foodType="lunch" source={img5} heading="Lunch" defColor="#FFF6A4" onColor="#FFEA2C"/>
        <FoodTypeTile foodType="drinks" source={img4} heading="Drinks" defColor="#9BB7FF" onColor="#2764FF"/>
        <FoodTypeTile foodType="desserts" source={img2} heading="Desserts" defColor="#FFB4B4" onColor="#FF8282"/>
        <FoodTypeTile  foodType="soups" source={img6} heading="Soup" defColor="#FDB4FF" onColor="#FC7CFF"/>

        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
    </div>
  )
}

export default FoodTileContainer