import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'
import Service from './pages/Service'
import Marketing from './pages/Marketing'
import Strategy from './pages/Strategy'
import Tech from './pages/Tech'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
    <Navbar/>
    {/* <Home/> */}
    {/* <AboutUs/> */}
    {/* <Service /> */}

    <Marketing />
    {/* <Strategy /> */}
    {/* <Tech /> */}
    <Footer/>
    </div>
  )
}

export default App
