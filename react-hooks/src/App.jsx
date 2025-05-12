import { useState } from 'react'

import 'tailwindcss/index.css';
import Result from './JavaScript/Filterhook/StudentResult';
import Ausers from './JavaScript/Filterhook/ActiveUsers';
import FirstEffect from './useEffect/FirstEffect';
import Filterfun from './JavaScript/Filterhook/FilterFun';
import Counter from './Test/Conter';
import ShowHide from './Test/ShowHide';
import Form from './Test/Form';
import Mapdata from './Test/Map';
import FormData from './Test/Form';
import ListData from './JavaScript/ListData';
import ProductData from './JavaScript/RealProduct';
import Mapfun from './JavaScript/MapFun';
import ColorChange from './usestate/ColorChange';
import MultiInputForm from './contactform/MultiformClass';
import Swiper_slider from './swiper/swiper-slider';
import Hidepassword from './usestate/PasswordHide';
import SimpleFrom from './contactform/SimpleFrom';
import ManyInput from './contactform/ManyInputForm';
import Example from './JavaScript/Filterhook/Example';
import Addcart from './JavaScript/Filterhook/AddCartpage';
import TabSystom from './Test/TabSystom';
import Tabs from './Test/Tab';
import Fristapi from './JavaScript/RestApi/FirstApi';
import Second from './JavaScript/RestApi/ApiWithSearch';




function App() {

  return (
    <>
    {/* <Swiper_slider /> */}
    {/* <Hidepassword /> */}

    {/* date: 23/04/2025 */}
    {/* <SimpleFrom /> */}
    {/* <ManyInput /> */}
    {/* <ColorChange/> */}
    {/* <MultiInputForm/> */}
    {/* <Mapfun/> */}
    {/* <ProductData /> */}
    {/* <ListData /> */}
    {/* <FirstEffect /> */}
    {/* <Filterfun /> */}
    {/* <Ausers /> */}
    {/* <Result /> */}
    {/* <Counter /> */}
    {/* <ShowHide /> */}
     {/* <Form /> */}
     {/* <Mapdata /> */}
     {/* <Example /> */}
     {/* <Addcart /> */}
     {/* <TabSystom /> */}
     {/* <Fristapi /> */}
     <Second />
    </>
  )
}

export default App;