import { useState } from "react";

import JsonData from './data.json';



function Mapdata(){

    const [Data, setData] = useState('');

    const FilterData = JsonData.filter( (studentdata)=> 

        studentdata.name.toLowerCase().includes(Data.toLowerCase()) ||
        studentdata.email.toLowerCase().includes(Data.toLowerCase())

    )

   

    return(

        <>
        <h2>This is User Data</h2>

        <input type='text' onChange={(e) => setData(e.target.value)} className="border rounded"/>



        <div>
            {FilterData.map( (item, index)=> 
            <div key={index}>
                <h3>Name: {item.name} </h3>
                <h3>Email: {item.email} </h3>
             </div>
        ) }
        </div>
        </>
    )
}
export default Mapdata;