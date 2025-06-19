import React from 'react'
import {BrowserRouter as Routes, Route } from 'react-router-dom'
import Home from './routes/home'
import Service from './routes/service'
import Features from './routes/features'
import Product from './routes/product'
import Testimonal from './routes/testimonal'
import Faq from './routes/faq'

const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/features" element={<Features />} />
          <Route path="/product" element={<Product />} />
          <Route path="/testimonial" element={<Testimonal />} />
          <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>

  )
}

export default App