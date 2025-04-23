
import React from 'react';
import Propsarray from './Props-array.js'
import { PropsComponent } from './components/PropsComponent.jsx'

function App(){

    return(

        <>
         <div style={{display:'flex', gap: '10px'}}>

    {/* // props data ARRAY from  */}

    {/* this is my app.jsx file in react  */}
        <PropsComponent
        title={Propsarray[0].title}
        discreption={Propsarray[0].discreption}
        img={Propesarray[0].img}
        />
       
        {/* second way to show this  */}
        <PropsComponent  {...Propesarray[1]} />
        <PropsComponent  {...Propesarray[2]} />
        {/* (...) this is Javascript in wild function  */}

    </div>
        
        </>
    )
}

export default App;