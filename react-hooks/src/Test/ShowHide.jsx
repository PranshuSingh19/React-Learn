import { useState } from "react";


function ShowHide(){

    const text = 'lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda perferendis sequi quidem dolorum debitis amet deleniti explicabo libero? Molestias numquam vel velit soluta sit consequatur maxime corporis quae architecto adipisicing elit. Magni assumenda perferendis sequi quidem dolorum debitis amet deleniti explicabo libero? Molestias numquam vel velit soluta sit consequatur maxime corporis quae architectoadipisicing elit. Magni assumenda perferendis sequi quidem dolorum debitis amet deleniti explicabo libero? Molestias numquam vel velit soluta sit consequatur maxime corporis quae architectoadipisicing elit. Magni assumenda perferendis sequi quidem dolorum debitis amet deleniti explicabo libero? Molestias numquam vel velit soluta sit consequatur maxime corporis quae architecto.'
    
    const [show , setShow ] = useState('');


    return(
        
        <>
            {/* {show ? text : `${text.substring(0, 100)}`} */}
            {show ? text : `${text.slice(0, 100)}`} 
            {/* slice & substring both are use to show & hide point of words data  */}

        <button onClick={ ()=> setShow(!show) } className="p-2 border bg-gray-200 rounded-3xl cursor-pointer"> 
         {show ? 'Hide value' : 'Show Value'}
        </button>
        </>
    )
}
export default ShowHide;