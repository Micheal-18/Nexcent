import React from 'react'
import Navbar from '../component/Navbar'
import Heroimg from '../component/Heroimg'
import Footer from '../component/Footer'
import Heroimg2 from '../component/Heroimg2'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <Heroimg2 />
        <Footer />

        {/* You can add more components or content here */}
    </div>
  )
}

export default Home