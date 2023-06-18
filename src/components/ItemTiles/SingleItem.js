import React, { useEffect, useState } from 'react'
import api from '../axious'; 
import classes from './SingleItem.module.css'

const SingleItem = (props) => {
  const items = props.items;

  return (
    <>
    {items?.map((item)=>(
      <div className={classes.outer}>
        <span className={classes.time}>15 Minutes</span>
        <div className={classes.titleHolder}>
          <div className={classes.foodType} key={item.id}>
            <span className={classes.mainTitle}>{item.name}</span>
            <span className={classes.subTitle}>{item.price}</span>
          </div>
        </div>
    </div>
    ))}
    </>
    
  )
}

export default SingleItem