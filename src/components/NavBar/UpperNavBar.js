import React from 'react'
import classes from './UpperNavBar.module.css'
import MainLogo from './MainLogo'
import { SearchBar } from './SearchBar/SearchBar'
import CustomerDetailsContainer from '../Customer/CustomerDetailsContainer'
const UpperNavBar = () => {
  return (
    <div className={classes.container}>
        <MainLogo />
        <SearchBar />
       
    </div>
  )
}

export default UpperNavBar