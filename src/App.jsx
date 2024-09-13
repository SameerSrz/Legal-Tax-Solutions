import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Services/>
      <Slider/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
