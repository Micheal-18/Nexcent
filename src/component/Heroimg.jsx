import React from 'react'
import img2 from "../assets/Illustration.png"

const Heroimg = () => {
  return (
    <>
     <div className='w-full pt-40 h-[100vh] md:h-[100vh] bg-[#F5F5F5] flex-col flex items-center justify-center'>
             
       <div className='flex  text-[#263238] flex-col items-center justify-between max-w-[1200px] md:flex-row w-full px-8 pt-20'>
             {/* left section */}
                <div className='text-[#263238]   text-left md:text-left mb-2 md:mb-0'>
                 <h1 className='text-4xl md:text-6xl max-w-[400px] md:max-w-[600px] font-bold'>Lessons and insights <span className='text-[#43A046]'>from 8 years</span>
                 </h1>
                 <p className='mt-2 max-w-[400px]'>Where to grow your business as a photographer site or social media?</p>
                 <button className='bg-[#43A046] flex text-white px-6 py-3 rounded-md mt-2 hover:bg-[#388E3B]'>Get Started</button>
                </div>

                  {/* right section */}

                <div>
                    <img src={img2} alt="Illustration" className='w-[300px] h-[300px] md:w-[400px] md:h-[400px]  object-cover' />
                </div>
        </div>
                <div className='flex  justify-center  font-bold font-w-[600] pb-27 md:pb-18  text-2xl right-0 left-0 md:text-3xl mb-16 md:mb-8'>
                  <h1 className='text-green-400 '>.<span className='text-green-300'>.</span><span className='text-green-200'>.</span></h1>
                </div>                               
      </div>  
  </>
  )
}

export default Heroimg