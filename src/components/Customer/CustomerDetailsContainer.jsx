import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import CustomerDetails from './CustomerDetails';
import CustomerDisplay from './CustomerDisplay';
import classes from './CustomerDetailsContainer.module.css'


const CustomerDetailsContainer = () => {
    const [isOpen, setIsOpen]= useState(false);
    const [customerId, setCustomerId]=useState('');
    const [customerName, setCustomerName] = useState('');

    const handleOpen = () => {
        setCustomerId(uuidv4());
        setIsOpen(true);
      };

      const handleCustomerDetailsSubmit = (name) => {
        setCustomerName(name);
        setIsOpen(false);
      };

      const handleCustomerNameChange = (name) => {
        setCustomerName(name);
      }
    
  return (
    <div className={classes.parent}>
       <button className={classes.glowOnHover} type="button" onClick={handleOpen}>Enter Customer Details</button>
    <div className={classes.container}>
        
       

        {isOpen && (
            <div>
                <div>
                    <CustomerDetails 
                      customerId={customerId} 
                      name={customerName}
                      onNameChange={handleCustomerNameChange}
                    />
                    <p>Generated Customer ID: {customerId}, customerName: {customerName}</p>
                </div>
                <button className={classes.submitBtn} role="button"  onClick={()=> setIsOpen(false)}>Submit</button>
            </div>
        )}
        <div className={classes.customerDisplayContainer}>
        {customerName && (
        <CustomerDisplay customerId={customerId} customerName={customerName} />
      )}
        </div>
       
   
    </div>
    </div>
  )
}

export default CustomerDetailsContainer;
