import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import Slider from './components/Slider'
import Testimonials from './components/Testimonials'
import OurTeam from './components/OurTeam'

import './App.css'
import History from './components/History'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Slider/>
      <About/>
      <Services/>
      <History/>
      <OurTeam/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
