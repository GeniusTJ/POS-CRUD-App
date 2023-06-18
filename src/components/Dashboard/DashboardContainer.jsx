import React from 'react'
import classes from './DashboardContainer.module.css'
import Dashboard from './Dashboard'
import Orders from './Orders'
import Tables from './Tables'

const DashboardContainer = () => {
  return (
    <div className={classes.container}>
        <Dashboard />
        <Orders />
        <Tables />
    </div>
  )
}

export default DashboardContainer