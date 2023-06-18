import React from 'react'
import searchIcon from '../../../assests/search.png'
import classes from './SearchBar.module.css'
export const SearchBar = () => {
  return (
    <div className={classes.outer}>
        <img className={classes.image} src={searchIcon} alt="" />
        <input className={classes.input} type="text" placeholder={'Search'} />
    </div>
  )
}
 