import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/woah.png';
import { FiX, FiMenu } from 'react-icons/fi';



const Navbar = () => {


    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMenu = () => {
        setClick(false);
    }

  return (
    <nav className='w-full fixed shadow-sm  top-0 z-50 opacity-90 bg-[#F5F5F5] p-4'>
        <div className='flex Roboto justify-between max-w-7x1 items-center mx-auto px-4 '> 
            {/* logo */}
            <div className='flex items-center gap-2'> 
                <img src={img1} alt="logo" className='w-8 h-8 pt-2' />
                <h1 className='text-3xl Roboto flex font-bold text-[#263238] '>Nexcent</h1>
            </div>
            {/* Desktop Menu */}
                <ul className=' hidden md:flex items-center gap-10 text-lg text-[#263238]'>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
                    <li><Link to="/features" onClick={closeMenu}>Features</Link></li>
                    <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
                    <li><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></li>
                    <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                </ul>

                {/* Button (desktop only) */}
                <div className='hidden md:flex items-center'>
                    <button className= 'text-[#43A046] text-center px-4 py-2 rounded-md ml-2 hover:bg-grey-100'>Login</button>
                   <button className='bg-[#43A046] text-white px-4 py-2 rounded-md ml-2 hover:bg-[#388E3B]'>Sign Up</button>
                </div>

                {/* Mobile Menu Icon */}
                <div className='md:hidden text-3xl text-black cursor-pointer' onClick={handleClick}>
                    {click ? <FiX /> : <FiMenu />}
                </div>
              </div>
            
             {/* Mobile Menu  */}
             {click && (
                <ul className='flex flex-col gap-4 items-center mt-4 text-lg text-[#263238]-100 transition-all duration-300 md:hidden'>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/service" onClick={closeMenu}>Service</Link></li>
                    <li><Link to="/features" onClick={closeMenu}>Features</Link></li>
                    <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
                    <li><Link to="/testimonial" onClick={closeMenu}>Testimonial</Link></li>
                    <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                    <div className='flex flex-col gap-2'>
                        <button className=' text-[#43A046] px-2 py-2 rounded-md ml-2 hover:bg-gray-100'>Login</button>
                        <button className='bg-[#43A046] text-white px-4 py-2 rounded-md ml-2 hover:bg-[#388E3B]'>Sign Up</button>
                    </div>
                </ul>
             )}    
    </nav>

    
  )
}

export default Navbar