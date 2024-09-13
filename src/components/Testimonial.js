import React, { useState } from 'react'
import Card from './Card';

const Testimonial = ({reviews}) => {

    const [index,setIndex]=useState(0);

  return (
    <div>
        <Card review={reviews[index]} setIndex={setIndex}></Card>
    </div>
  )
}

export default Testimonial;
