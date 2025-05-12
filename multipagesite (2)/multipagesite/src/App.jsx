import { Route, Routes } from "react-router-dom"
import Home from "./camponent/Home"
import OurCars from "./camponent/OurCars"
import About from "./camponent/About"
import Contact from "./camponent/Contact"
import Layout from "./camponent/Layout"

// slick slider css import 
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import SlickSlider from "./SlickSlider"

function App() {

  return (
    <>

  <Routes>
 
    {/* Layout is the nested route components */}
    <Route path="/" element={<Layout/>} >
      {/* All pages routes  */}
      <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/ourcar" element={<OurCars />}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/slickSlider" element={<SlickSlider/>}/>
      {/* P:\My Projects\ReactCourseClasses\multipagesite\src\SlickSlider.jsx */}
      </Route>

  </Routes>
    </>
  )
}

export default App
