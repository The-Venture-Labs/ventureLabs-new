import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Marketing from './pages/Marketing'
import Strategy from './pages/Strategy'
import Tech from './pages/Tech'
import { Route, Routes } from 'react-router-dom'
import Team from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="aboutUs" element={<AboutUs/>} />
      <Route path="services" element={<Service />} />
    
    {/* <Route path ="/#team" element={<Team/>} /> */}

    <Route to =":marketing" element = {<Marketing /> } />
    <Route to ="/strategy" element = {<Strategy /> } />
    <Route to ="/tech" element = {<Tech />  } />

    </Routes>
    {/* <Marketing /> */}

     
    <Footer/>
    </div>
  )
}

export default App
