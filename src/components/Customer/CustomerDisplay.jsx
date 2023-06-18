import React from 'react';

const CustomerDisplay = ({ customerId, customerName }) => {
  return (
    <div>
      {customerId && <p>Customer ID: {customerId}</p>}
      {customerName && <p>Customer Name: {customerName}</p>}
    </div>
  );
};

export default CustomerDisplay;
