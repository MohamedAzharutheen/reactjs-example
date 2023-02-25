import React from 'react'

const Nav = () => {

  return (
    <>


      <body class="p-5 md:p-10 text-gray-800">
        <section class="bg-purple rounded-2xl p-5 mb-10 ">
          <div class="container  mx-auto ">
            <div class="flex sticky top-0">
              <a class="text-2xl font-semibold pr-5 border-r border-blue-300" href="">Agency</a>
              <div class=" my-auto">
                <button class="lg:hidden" onclick="navClick()">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" ml-1 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>

                </button>
                <ul class=" hidden  lg:flex font-bold text-gray-600">
                  <li class="pr-5"><a class="px-3 py-2  hover:text-blue-800 hover:underline " href="./web.html">Home</a></li>
                  <li class="pr-5"><a class="px-3 py-2 hover:text-blue-800  hover:underline" href="./web1.html">About</a></li>
                  <li class="pr-5"><a class="px-3 py-2 hover:text-blue-800  hover:underline" href="#">Contact</a></li>
                  <li class="pr-5"><a class="px-3 py-2 hover:text-blue-800  hover:underline" href="./our service.html">Our services</a></li>
                  <li class="pr-5"><a class="px-3 py-2 hover:text-blue-800  hover:underline" href="./form.html">Login</a></li>

                </ul>
              </div>

              <a class="flex ml-auto bg-red-500 font-bold text-white px-3 py-2 rounded-2xl"><span class="pr-1 pb-1 hidden lg:block">Get a quote </span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              </a>
            </div>
            <div class="hidden" id="mobileMenu">
              <ul class=" lg:hidden font-bold text-gray-600">
                <li class="mt-1"><a class="py-2 " href="">Home</a></li>
                <li class="mt-1"><a class="py-2 " href="">About</a></li>
                <li class="mt-1"><a class="py-2 " href="">Contact</a></li>
                <li class="mt-1"><a class="py-2 " href="./our service.html">Our services</a></li>
                <li class="mt-1"><a class="py-2 " href="">portfolio</a></li>
                <li class="mt-1"><a class="py-2 " href="./form.html">Login</a></li>


              </ul>
            </div>
            <div class="flex py-12 lg:py-32">
              <div class="w-full lg:w1/2">

                <h2 class=" text-center text-2xl lg:text-left lg:text-6xl font-bold  lg:font-semibold drop-shadow-lg text-white shadow-black">Web Designer</h2>
                <p class="mt-4 text-center lg:text-left lg:mt-8 text-2xl text-gray-600">We don't just sell websites, we create websites that SELL.” </p>
                <div class="flex  mt-12 justify-center lg:justify-start">
                  <a class="bg-blue-500 text-white p-2 mr-5 rounded hover:bg-blue-300 hover:font-bold bg-rose" href="">Login </a>
                  <a class="bg-red-500 text-white p-2 mr-5  rounded hover:bg-red-300 hover:font-bold  bg-rose " href="">Contact Us</a>
                </div>
              </div>
              <div class="w-1/2 hidden lg:flex">
                <img class="transform transition duration-500 hover:scale-110 cursor-default" src="" />
              </div>
            </div>
            <div class="flex justify-center">
              <a href="">   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" id="scrolldown" class="animate-bounce w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
              </svg></a>
              <span for="scrolldown" class=" cursor-pointer animate-bounce ml-2">Scroll down</span>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Nav;