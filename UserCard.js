import React from 'react'

const UserCard = (props) => {
  return (
    <div className='container flex p-10 mx-auto mb-10 bg-silver'>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-tahiti ml-4 ">
        <div class="px-6 py-4 ">
          <div class="font-bold text-xl mb-2 text-center "></div>
          <p class="text-gray-700 text-base">
            {props.children}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 w-full bg-oranage ">
          <a className='flex items-center justify-center w-full' href='/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
            add</a>

        </div>



      </div>

    </div>
  )
}

export default UserCard;