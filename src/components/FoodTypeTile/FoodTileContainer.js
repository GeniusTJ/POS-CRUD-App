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
<<<<<<< Updated upstream
// import SingleItem from '../ItemTiles/SingleItem';
// this is foodtile
=======

>>>>>>> Stashed changes

const FoodTileContainer = (props) => {
  const [type,setType] = useState('breakfast');
  const [items, setItems] = useState([]);

const fetchItems = (foodType) => {
    api 
      .get(`/api/${foodType}`)
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
        
      })
      .catch((error) => {
        console.error(`Failed to fetch ${foodType} items:`, error);
      });
  };

  return (
    <div className={classes.container}>
        <FoodTypeTile  foodType="breakfast" source={img1} heading="Breakfast" defColor="#B4FFF6" onColor="#2FFFE6" onPress={(e) => {      
        fetchItems(e);
        console.log(e);
  }}/>
        <FoodTypeTile foodType="dinner" source={img3} heading="Dinner" defColor="#A4FFB8" onColor="#45FF6E" onPress={(e) => {
        setType(e);
        fetchItems(e);
        console.log(e);
  }}/>
        <FoodTypeTile foodType="lunch" source={img5} heading="Lunch" defColor="#FFF6A4" onColor="#FFEA2C" onPress={(e) => {
        setType(e);
        fetchItems(e);
        console.log(e);
  }}/>
        <FoodTypeTile foodType="drinks" source={img4} heading="Drinks" defColor="#9BB7FF" onColor="#2764FF" onPress={(e) => {
        setType(e);
        fetchItems(e);
        console.log(e);
  }}/>
        <FoodTypeTile foodType="desserts" source={img2} heading="Desserts" defColor="#FFB4B4" onColor="#FF8282" onPress={(e) => {
        setType(e);
        fetchItems(e);
        console.log(e);
  }}/>
        <FoodTypeTile  foodType="soups" source={img6} heading="Soup" defColor="#FDB4FF" onColor="#FC7CFF" onPress={(e) => {
        setType(e);
        fetchItems(e);
        console.log(e);
  }}/>

        <SingleItem items={items}/>
    </div>
  )
}

export default FoodTileContainer