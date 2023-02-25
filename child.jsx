import React from 'react'

function child(props) {

 const handler=(e) =>{
   props.getValue(e.target.value);
 }


  return (
    <div className='flex justify-center mt-10'>
      <input className="border" type={"text"} onChange={handler}/>
    </div>
  )
}

export default child
