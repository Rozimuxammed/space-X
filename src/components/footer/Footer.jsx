import React from 'react'

function Footer() {
  return (
    <footer className='py-32'>
      <div className="container m-auto flex flex-col items-center justify-center">
        <div className="mb-10">
            <img src="./public/logo.svg" alt="" />
        </div>
        <div className="text-white sm:px-3">
            <ul className='flex items-center gap-7 mb-5 sm:flex-wrap sm:justify-center sm:text-sm'>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Youtube</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Flickr</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Policy</a></li>
            </ul>
            <p className='mb-5 text-center text-grey sm:text-xs'>For additional questions, contact rideshare@spacex.com</p>
            <button className='ml-[50%] translate-x-[-50%] py-3 px-20 rounded-md border sm:px-10 sm:py-2 sm:text-xs'>Contact us</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
