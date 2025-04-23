import { useState } from 'react'
import './App.css'
import 'tailwindcss/index.css';
import Swiper_slider from './swiper/swiper-slider';
import Hidepassword from './usestate/PasswordHide';

function App() {

  return (
    <>
  

    <Swiper_slider />
    <Hidepassword />

    </>
  )
}

export default App;