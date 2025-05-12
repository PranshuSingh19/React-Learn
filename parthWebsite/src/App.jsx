import { Route, Routes } from "react-router-dom"
import Layout from './Layout'
import HomePage from './Pages/Home'
// import AboutPage from './Pages/About'
import ContactPage from './Pages/Contact'
import GalleryPage from './Pages/Gallery'
import EventsPage from './Pages/Events'
import EventSingle from './Pages/EventSingle'

// all css files 
import '../assets/css/bootstrap.min.css'
import '../assets/css/jquery.fancybox.min.css'
import '../assets/css/jquery-ui.css'
import '../assets/css/owl.carousel.min.css'
import '../assets/css/owl.theme.default.min.css'
import '../assets/css/animate.css'
import '../assets/fonts/flaticon/font/flaticon.css'
import '../assets/css/aos.css'
import '../assets/css/style.css'


function App() {
 
  return (
    <>
      <Routes>

        <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        {/* <Route path='/pages/about' element={<AboutPage/>}/> */}
        <Route path='/pages/contact' element={<ContactPage/>}/>
        <Route path='/pages/gallery' element={<GalleryPage/>}/>
        <Route path='/pages/events' element={<EventsPage/>}/>
        <Route path='/pages/eventsingle' element={<EventSingle/>}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
