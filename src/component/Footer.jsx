import React from 'react'
import img1 from '../assets/woah.png';
import { Link } from 'react-router-dom';
import { FaBasketballBall, FaInstagram, FaPaperPlane, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex flex-col md:grid absolute grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full bg-[#263238] py-10 px-6 gap-8'>
      {/*left section */}
      <div className='flex flex-col'>
        {/* logo */}
            <div className='flex'> 
                <img src={img1} alt="logo" className='w-8 h-8 pt-2 mt-3 mr-5' />
                <h1 className='text-3xl Roboto flex font-bold text-white py-3'>Nexcent</h1> 

            </div>                   
                <p className='text-white  py-3'>Copyright © 2020 Nexcent ltd.</p>
                <p className='text-white py-3'>All rights reserved</p>
                <div className='flex gap-4 '>
                  <a href='#'><FaInstagram size={20} className='text-white hover:text-gray-300' /> </a>
                  <a href='#'><FaBasketballBall size={20} className='text-white hover:text-gray-300' /> </a>
                  <a href='#'>< FaTwitter size={20} className='text-white hover:text-gray-300' /> </a>
                  <a href='#'><FaYoutube size={20} className='text-white hover:text-gray-300' /> </a>
                </div>        
      </div>
      {/* center */}
        <div>
        <h1 className='font-semibold text-white text-2xl'>Company</h1>
        <ul className='text-white flex flex-col'>
          <li><Link to="/">About us</Link></li>
          <li><Link to="/">Blog</Link></li>
          <li><Link to="/">Contact us</Link></li>
          <li><Link to="/">Pricing</Link></li>
          <li><Link to="/">Testimonals</Link></li>
        </ul>
        </div>

        <div>
        <h1 className='font-semibold text-white text-2xl'>Support</h1>
        <ul className='text-white flex flex-col'>
          <li><Link to="/">Help center</Link></li>
          <li><Link to="/">Terms of service</Link></li>
          <li><Link to="/">Legal</Link></li>
          <li><Link to="/">Privacy policy</Link></li>
          <li><Link to="/">Status</Link></li>
        </ul>        
        </div>

        <div>
          <h1 className='font-semibold text-white text-xl mb-3'>Stay up to date</h1>
          <form className='flex flex-col gap-3'>
            <label htmlFor='email' className='text-white'></label>
            <div className='flex items-center border border-gray-300 rounded overflow-hidden'>
            <input type="email" name="email" placeholder="Your email address" require className='p-2 text-white w-full outline-none'/>
            <button type='submit' className='p-2'>
              <FaPaperPlane className='text-white' />
            </button>              
            </div>
          </form>
        </div>
    </div>
  )
}

export default Footer