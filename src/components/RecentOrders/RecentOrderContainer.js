import React from "react";
import RecentOrderRecord from './RecentOrderRecord';
import classes from './RecentOrderContainer.module.css'



const RecentOrderContainer = () => {
  return (
    <div className={classes.container}>
        <span className={classes.title}>RECENT ORDERS</span>
        <RecentOrderRecord />
        <RecentOrderRecord />
        <RecentOrderRecord />
        <RecentOrderRecord />
        <RecentOrderRecord />
        <RecentOrderRecord />
        <RecentOrderRecord />

    </div>
  )
}

export default RecentOrderContainer