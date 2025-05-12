import { useState } from "react"

function Counter(){


    const [data, setdata] = useState(0);



    return(
        <div className="m-20 d-flax ">
<button onClick={ ()=> setdata(data + 1)} className="border-2 cursor-pointer m-5">
    Increment
</button>

<button onClick={ ()=> setdata(data - 1)} className="border-2 cursor-pointer">
    Decrement
</button>
        
        <h1> {data} </h1>
        </div>
    )

}
export default Counter