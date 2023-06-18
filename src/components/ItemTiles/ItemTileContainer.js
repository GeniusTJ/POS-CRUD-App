import React,{ useState, useEffect } from 'react'
import classes from './ItemTileContainer.module.css'
import SingleItem from './SingleItem'
const ItemTileContainer = () => {
  
  return (
    <div className={classes.container}>

        <SingleItem foodtype={'breakfast'}/>
        
        {/* <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />

        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem /> */}
    </div>
  )
}

export default ItemTileContainer