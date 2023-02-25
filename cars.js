import React, { useState } from 'react'

function cars() {

    const[color,setColor]=useState=({
        car:"BMW",
        model:2022,
        
})
  return (
    <div>
      <h1>My car is  {color.car} </h1>
    </div>
  )
}

export default cars
