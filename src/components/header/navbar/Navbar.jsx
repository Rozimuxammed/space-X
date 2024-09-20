import React from 'react'

function Navbar() {
  return (
    <nav className='p-6'>
      <div className="container m-auto flex items-center justify-between text-white font-roboto">
        <div className="">
            <img className='sm:w-[100px] md:w-[120px]' src="./public/logo.svg" alt="logo image" />
        </div>
        <div>
            <ul className='flex items-center gap-8 sm:hidden md:inline-flex md:text-xs md:gap-3'>
                <li><a href="#">Falcon 9</a></li>
                <li><a href="#">Falcon Heavy</a></li>
                <li><a href="#">Dragon</a></li>
                <li><a href="#">Updates</a></li>
            </ul>
        </div>
        <div>
            <ul className='flex items-center gap-5 text-grey sm:hidden md:inline-flex md:text-xs md:gap-2'>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Shop</a></li>
            </ul>
        </div>
        <img className='w-5 h-5 hidden sm:block md:hidden' src="./public/menu.svg" alt="" />
      </div>
    </nav>
  )
}

export default Navbar
