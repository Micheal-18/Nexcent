import React from 'react'
import img3 from "../assets/logo7.png"
import img4 from "../assets/Vector.png"
import img5 from "../assets/Logo2.png"
import img6 from "../assets/Logo3.png"
import img7 from "../assets/Logo4.png"
import img8 from "../assets/Logo5.png"
import img9 from "../assets/Logo6.png"
import img10 from "../assets/icon.png"
import img11 from "../assets/icon1.png"
import img12 from "../assets/icon2.png"
import img13 from "../assets/damn.png"
import img14 from "../assets/head.png"
import img15 from "../assets/aka.png"
import img16 from "../assets/purse.png"
import img17 from "../assets/sokka.png"
import img18 from "../assets/pana.png"
import img19 from "../assets/image9.png"
import img20 from "../assets/cream.png"
import { FaArrowRight } from 'react-icons/fa'
import img21 from "../assets/image18.png"
import img22 from "../assets/image19.png"
import img23 from "../assets/image20.png"

const Heroimg2 = () => {
  return (
  <>  
       <div className='w-full h-[30vh] bg-white flex-col top-0 mt-6 md:mt-10 flex justify-center'>
            <div className=' bg-white-700 w-full mt-2 md:mt-20 lg:mt-0 h-60vh text-center flex flex-col  justify-center text-[#263238]'>
                    <h2 className='font-bold text-4x1'>Our Client
                    </h2>
                    <p className='mt-4 text-4x1 md:text-2x1'>We have been working with some Fortune 500+ clients
                    </p>
                <div className='flex justify-between items-center flex-wrap gap-0 md:gap-3 mt-4 px-4'>
                  <img src={img3} alt="Logo 1" className='w-[40px] h-[40px] object-contain' />
                  <img src={img4} alt="Logo 2" className='w-[50px] h-[50px] object-contain' />
                  <img src={img5} alt="Logo 3" className='w-[50px] h-[50px] object-contain' />
                  <img src={img6} alt="Logo 4" className='w-[50px] h-[50px] object-contain' />
                  <img src={img7} alt="Logo 5" className='w-[50px] h-[50px] object-contain' />
                  <img src={img8} alt="Logo 6" className='w-[50px] h-[50px] object-contain' />
                  <img src={img9} alt="Logo 7" className='w-[50px] h-[50px] object-contain' />
                </div>
            </div>  
              <div className='flex flex-col items-center justify-center '>
                <h1 className='text-2xl font-semibold md:text-3x1 text-[#263238]'>Manage your entire community <span className='flex justify-center'>in a single system</span>
                </h1>
                <p className='text-[#717171] mt-2'>
                    Who is Nextcent suitable for?
                </p>
              </div>   
        </div>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-40 mt-10 px-8 max-w-[1200px] mx-auto'>
                <div className='bg-white p-4 opacity-[100%]  rounded-md shadow-md'>
                    <img src={img10} alt="Icon 1" className='w-12 h-12 mb-2 mx-auto' />
                    <h3 className='text-lg font-bold text-[#263238] mx-auto flex justify-center'>Membership Organisations
                    </h3>
                    <p className='text-[#717171] mt-1 mx-auto flex justify-center max-w-[300px]'>
                        Our membership management software provides full automation of membership renewels and payments
                    </p>
                </div>

                <div className='bg-white p-4 rounded-md opacity-[100%] shadow-md'>
                    <img src={img11} alt="Icon 1" className='w-12 h-12 mb-2 mx-auto' />
                    <h3 className='text-lg font-bold text-[#263238] flex justify-center '>
                        National Association
                    </h3>
                    <p className='text-[#717171] flex mx-auto justify-center max-w-[300px] mt-1'>
                        Our membership management software provides full automation of membership renewels and payments
                    </p>
                </div>                
                
                <div className='bg-white p-4 rounded-md opacity-[100%] shadow-md'>
                    <img src={img12} alt="Icon 1" className='w-12 h-12 mb-2 mx-auto' />
                    <h3 className='text-lg font-bold flex justify-center text-[#263238]'>
                        Clubs And Groups
                    </h3>
                    <p className='text-[#717171] flex justify-center max-w-[300px] mx-auto mt-1'>
                        Our membership management software provides full automation of membership renewels and payments
                    </p>
                </div>                
            </div> 

             <div className='flex  text-[#263238] flex-col items-center justify-between max-w-[1200px] md:flex-row w-full px-6'>
                {/*right section*/}
                <div>
                    <img src={img13} alt="damn" className='w-[400px] h-[400px]  object-contain' />
                </div>

                {/*left section*/}
                <div className='text-[#263238] text-left md:text-left mb-8 md:mb-0'>
                 <h1 className='text-3xl md:text-5xl max-w-[300px] md:max-w-[700px] font-bold'>
                    The unseen of spending three years at Pixelgrade
                 </h1> 
                 <p className='mt-4 max-w-[400px]'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla optio repellendus similique quae perferendis rem magnam, quidem repellat! Sed suscipit ut amet corporis iusto nostrum aliquid error et quas.
                 </p>  
                 <button className='bg-[#43A046] flex text-white px-6 py-3 rounded-md mt-6 hover:bg-[#388E3B]'>Learn more</button>                                  
                </div>
            </div>

             <div className='flex flex-col md:flex-row justify-between bg-gray-100 py-10'>
                {/*left section*/}
                <div className='text-[#263238] text-left mx-10  md:text-left mb-8 md:mb-0'>
                 <h1 className='text-3xl md:text-5xl max-w-[300px] md:max-w-[500px] font-bold'>Helping a local <span className='text-[#43A046]'>business reinvent itself</span>
                 </h1>
                 <p className='mt-4 max-w-[400px]'>We reached here with our hard work and dedication</p>                    
                </div>

                {/*center section*/}
                <div className=' flex items-center mx-auto justify-center ml-40 mt-6 w-[100px] h-[100px] bg-[#717171] opacity-50'></div>

                {/*right section */}
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 mx-20 md:mx-4'>
                    <div className='flex flex-row p-4 items-center gap-4 '> 
                     <img src={img14} alt='head' className='w-12 h-12'/>
                     <div className='flex flex-col'>
                        <h1 className='text-[#263238] font-bold text-3xl md:text-4x1'>2,245,341</h1>
                        <p className='text-[#717171]'>Members</p>
                     </div>
                    </div>

                    <div className='flex flex-row gap-4 items-center p-4 '>
                    <img src={img15} alt='head' className='w-12 h-12' />
                    <div className='flex flex-col'>
                    <h1 className='text-[#263238] font-bold text-3xl md:text-5x1'>
                        46,328
                    </h1>
                    <p className='text-[#717171]'>Clubs</p>                        
                    </div>
                    </div>

                    <div className='flex flex-row gap-4 items-center p-4'>
                    <img src={img17} alt='head' className='w-12 h-12' />
                    <div className='flex flex-col'>
                    <h1 className='text-[#263238] text-3xl md:text-5x1 font-bold'>
                        828,867
                    </h1>
                    <p className='text-[#717171]'>Event Bookings</p>                        
                    </div>
                    </div>  

                    <div className='flex flex-row gap-4 items-center p-4'>
                    <img src={img16} alt='head' className='2-12 h-12' />
                    <div className='flex flex-col'>
                    <h1 className='text-[#263238] font-bold text-3xl md:text-5x1'>
                        1,926,436
                    </h1>
                    <p className='text-[#717171]'>Payments</p>                        
                    </div>
                    </div>                                      
                </div> 
             </div> 

           <div className='flex text-[#263238] flex-col items-center justify-between max-w-[1200px] md:flex-row py-10 px-6'>
                {/*right section*/}
                <div>
                    <img src={img18} alt="damn" className='w-[300px] h-[300px]  object-contain' />
                </div>

                {/*left section*/}
                <div className='text-[#263238] text-left md:text-left mb-8 md:mb-0'>
                 <h1 className='text-3xl md:text-4xl max-w-[300px] md:max-w-[700px] font-bold'>
                    How to design your site footer like we did
                 </h1> 
                 <p className='mt-4 max-w-[400px]'>
                    Donac Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla optio repellendus similique quae perferendis rem magnam, quidem repellat! Sed suscipit ut amet corporis iusto nostrum aliquid error et quas.
                 </p>   
                 <button className='bg-[#43A046] flex text-white px-6 py-3 rounded-md mt-6 hover:bg-[#388E3B]'>Learn more</button>                                 
                </div>
            </div>

             <div className='flex px-2 bg-gray-100  text-[#263238] flex-col items-center mt-4 py-6 justify-between md:flex-row w-full px-0 md:px-10 md:px-0'>
                {/*right section*/}
                
                    <img src={img19} alt="damn" className='w-[400px] h-[400px]  object-contain mt-8' />
                

                 {/*left section*/}
                <div className='text-[#263238] px-6 mb-1 md:mb-0'>
                  <p className='mt-4 max-w-[400px] md:max-w-[700px]'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                  </p>                         

                  <h1 className='text-2xl md:text-3xl text-[#43A046] max-w-[300px] md:max-w-[700px] font-bold mt-4'>
                     Tim Smith 
                  </h1>  

                  <p  className='mt-4 max-w-[400px]'>
                     British Dragon Boat Racing Association
                  </p>         
                 <div className='flex flex-col md:flex-row gap-2 mt-0'>
                  <div className='flex-row flex gap-4 mt-5 md:gap-10'>
                    <img src={img20} alt="Logo 1" className='w-[20px] md:w-[40px] h-[20px] md:h-[40px] object-contain' />
                    <img src={img4} alt="Logo 2" className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-contain' />
                    <img src={img5} alt="Logo 3" className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-contain' />
                    <img src={img6} alt="Logo 4" className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-contain' />
                    <img src={img7} alt="Logo 5" className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-contain' />
                    <img src={img8} alt="Logo 6" className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-contain' />
                    <img src={img9} alt="Logo 7" className='w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-contain' />                      
                    </div>
                  
                   <div className='flex items-center max-w-[400px] mt-2 cursor-pointer md:justify-end'>
                      <span className='text-[#43A046] hover:text-[#388E3B] font-semibold'>Meet all customer</span>
                      <FaArrowRight className='text-[#43A046] text-xl' />
                   </div>                  
                 </div>
               </div>  
            </div>

       <div className='w-full h-[30vh] bg-white flex-col mt-4 md:mt-10 flex justify-center'>
            <div className=' bg-white-700 w-full mt-10 md:mt-0 h-60vh text-center flex flex-col  justify-center text-[#263238]'>
                    <h2 className='font-bold text-2xl  md:text-3xl'>Caring is the new marketing
                    </h2>
                    <p className='mt-3 mx-auto max-w-[700px] md:max-w-[600px]'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
                    </p>
            </div>
       </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12  mt-6 max-w-[1200px] mb-8 mx-10 md:mx-50 lg:mx-20 my-auto'>
                <div className='relative flex items-center justify-center mx-auto mt-2 py-8 bottom-5 w-80 h-60'>
                    <img src={img21} alt="lap" className='z-0 w-60 h-50 rounded-md object-cover' />
                
                <div className='absolute z-0  bg-white bg-opacity-90 w-50 h-30 -bottom-10 shadow-sm rounded-sm backdrop-blur-sm p-3 flex flex-col mx-5 items-center justify-center text-center  '>
                    <h2 className='text-[#717171] text-sm leading-snug mb-2 font-semibold'>Creating Streamlined Safeguarding Processes with OneRen
                    </h2>
                    <div className='flex items-center justify-center gap-2 cursor-poniter'>
                      <span className='text-[#43A046] hover:text-[#388E3B] font-semibold'>Read More</span>
                      <FaArrowRight className='text-[#43A046] text-lg' />                        
                    </div>
                </div>                    
                </div>

                <div className='relative flex items-center justify-center mx-auto mt-2 py-8 bottom-5 w-80 h-60'>
                    <img src={img22} alt="lap" className='z-0 w-60 h-50 rounded-md object-cover' />
                
                <div className='absolute z-0  bg-white bg-opacity-90 w-50 h-30 -bottom-10 shadow-sm rounded-sm backdrop-blur-sm p-3 flex flex-col mx-5 items-center justify-center text-center  '>
                    <h2 className='text-[#717171] text-sm leading-snug mb-2 font-semibold'>What are your safeguarding responsibilities and how can you manage them?
                    </h2>
                    <div className='flex items-center justify-center gap-2 cursor-poniter'>
                      <span className='text-[#43A046] hover:text-[#388E3B] font-semibold'>Read More</span>
                      <FaArrowRight className='text-[#43A046] text-lg' />                        
                    </div>
                </div>                    
                </div>

                <div className='relative flex items-center justify-center mx-auto mt-2 py-8 bottom-5 w-80 h-60'>
                    <img src={img23} alt="lap" className='z-0 w-60 h-50 rounded-md object-cover' />
                
                <div className='absolute z-0  bg-white bg-opacity-90 w-50 h-30 -bottom-10 shadow-sm rounded-sm backdrop-blur-sm p-3 flex flex-col mx-5 items-center justify-center text-center  '>
                    <h2 className='text-[#717171] text-sm leading-snug mb-2 font-semibold'>Revamping the Membership Model with Triathlon Australia
                    </h2>
                    <div className='flex items-center justify-center gap-2 cursor-poniter'>
                      <span className='text-[#43A046] hover:text-[#388E3B] font-semibold'>Read More</span>
                      <FaArrowRight className='text-[#43A046] text-lg' />                        
                    </div>
                </div>                    
                </div>                                
            </div>
            <div className='flex flex-col w-full h-[60vh] items-center justify-center mx-auto bg-gray-200'>
                <h3 className='text-4xl tracking-tight md:tracking-wide text-center max-w-[400px] font-semibold text-[#263238]'>Pellentesque suscipit fringilla libero eu.</h3>
                 <button className='bg-[#43A046] flex items-center justify-center text-white px-6 py-3 rounded-md mt-6 hover:bg-[#388E3B]'>Get a Demo <FaArrowRight className='ml-2' /></button>                 
            </div>
                   
    </>   
  )
}

export default Heroimg2