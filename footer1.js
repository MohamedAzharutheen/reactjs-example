import React from 'react'
import Insta from './images/insta.png'
function footer1() {
    return (
        <footer className='p-5 bg-metal'>
     
         <div className='flex justify-center w-full sm:font-bold'>
           <button className='px-5 py-1 font-semibold text-white border-2 border-white hover:bg-opacity-5 ' >SIGN IN</button>
         </div>
         <div className='flex justify-center mt-5'>
            <img className='h-5 bg-white rounded-full' src={Insta} alt=''/>
            </div>
         <div className='flex justify-center mt-5'>
            <h1>fihf</h1>
            </div>
        </footer>
    )
}

export default footer1
