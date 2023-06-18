import React from 'react'
import PriceViewer from './PriceViewer'
import Button from './Button'
import classes from './PriceViewerContainer.module.css'

function PriceViewerContainer() {
  return (
    <div className={classes.container}>
        <PriceViewer size={'1.2rem'} fontWeight={700} mainTitle={'Sub Total'} subTitle={'Rs.7500.00'} />
        <PriceViewer size={'1rem'} fontWeight={400} mainTitle={'Tax (10%)'} subTitle={'Rs.750.00'} />
        <span className={classes.title}>Total Payment</span>
        <Button type='button'>Rs:9500</Button>
    </div>
  )
}

export default PriceViewerContainer