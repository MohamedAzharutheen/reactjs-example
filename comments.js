import React from 'react'


function comments(props) {
  return (

    <div className='justify-center mt-2 sm:flex'>

      <img className='w-auto h-16 p-2 rounded-2xl ' src={props.img} alt='profile' />
      <div className=' sm:pl-3'>
        <a className='text-2xl' href='/'>{props.name}</a> <span className='pl-2 text-gray'>{props.time}</span>
        <div className=''>
          <h1 className=''>{props.cmnt}</h1>
        </div>
      </div>

    </div>


  )
}

export default comments
