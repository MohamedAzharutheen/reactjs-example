import React from 'react'



function header() {
    return (
        <div className='p-4 bg-gray'>
            <header className='flex justify-between '>
                <div className='pl-6'>
                    <a href='/'>LOGO</a>
                </div>
                <button className='block sm:hidden' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" ml-1 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
                <div className='hidden sm:block'>
                    <a className='p-10' href='/'> HOME</a>
                    <a className='p-10 uppercase' href='/'>login</a>
                    <a className='p-10 uppercase' href='/'>singup</a>

                </div>

            </header>
        </div>
    )
}

export default header
