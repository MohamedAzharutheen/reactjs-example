import React from 'react'
import Hero from './images/hero2.svg'

function body() {
  return (
    <div>
      <section className='justify-between m-10 sm:flex'>
        <div className='mt-10 '>
          <h1 className='font-semibold text-gray'>Turn your big idea into</h1>
          <h1 className='font-semibold '>something <span className='font-bold'> BIGGER! </span></h1>
          <p className='mt-6 font-semibold'>Welcome To Our Software Development Website</p>
          <button className='px-5 py-1 text-white bg-purple mt-14'>Join Now</button>
        </div>

        <div className='flex flex-col mt-10 sm:mt-5'>
           
           <img className='h-32 mt-5 mr-auto sm:h-52 md:h-60 'src={Hero} alt='icon'/>
           <h1 className='mt-10 font-bold '>Welcome To Our WebSite</h1>
          
        </div>
        
        
      
      </section>
    </div>
  )
}

export default body
