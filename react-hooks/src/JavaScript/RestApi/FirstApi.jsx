import { useState, useEffect } from "react";


function Fristapi(){

    const [Apidata, setApidata] = useState([]);

    useEffect( ()=> { 
        
        fetch('https://fakestoreapi.com/products')
        .then( res => res.json())
        .then( data => {
            setApidata(data)
            console.log(data);
        })
        .catch( (e)=> {
            console.error( 'In Catch data not found', e)
        })

     }, []);


    return(

        <>
        <h2>All Data get by API</h2>

        {Apidata.map( (dataItem)=>

            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border"> 

                <div className="flex items-center gap-4">
                    <img src={dataItem.image} alt=""  className="w-20 h-20 object-contain rounded-lg border"/>
                        <div>
                        <h2>  {dataItem.title} </h2>
                    <p> {dataItem.category} </p>
                    <p> {dataItem.description} </p>
                    {/* <p> {'Product Rate Count' . $(dataItem.rating.count)} </p>
                    <p> {'Product Rating' . $(dataItem.rating.rate)} </p> */}
                        </div>
                </div>

            </div>
       )}
        </>
    )
}
export default Fristapi;