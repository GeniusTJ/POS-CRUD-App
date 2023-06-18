import React from 'react'
import classes from './CustomerDetails.module.css'
const CustomerDetails = ({ customerId, name, onNameChange }) => {
  return (
    <div className={classes.form}>
        <form action="">
            <label htmlFor="name">Customer Name :</label>
            <input 
              type="text" 
              id='name' 
              name='name' 
              placeholder='Tilan Jayaweera' 
              value={name}
              onChange={(event) => onNameChange(event.target.value)}
            /><br />
            <label htmlFor="phone">Contact Number :</label>
            <input type="tel" id='phone' name='phone' placeholder='071-7570524' /><br />
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" placeholder='zonex@gamail.com' /><br />
            <label htmlFor="customerId">Customer ID :</label>
            <input type="text" id="customerId" name="customerId" value={customerId} disabled />
        </form>
    </div>
  )
}

export default CustomerDetails;
