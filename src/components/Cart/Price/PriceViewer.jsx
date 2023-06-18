import React from 'react'
import classes from './PriceViewer.module.css';
const PriceViewer = (props) => {
  return (
    <div className={classes.container}>
    <span style={{fontWeight : props.fontWeight,fontSize:props.size}}  className={classes.mainTitle}>{props.mainTitle}</span>
    <span className={classes.subTitle}>{props.subTitle}</span>
    </div>
 
  )
}

export default PriceViewer