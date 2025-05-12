import { useState, useEffect } from "react";


function Second(){

    const [activeData, setdata] = useState([]);
    // for filer data crate new state 
    const [serchData, setSearch] = useState('');

    // API Fatch with use useEffect hook
    useEffect( ()=> {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then( data=> data.json()) // this line only convert data ROW to JSON data.
            .then( mydata=> {
                setdata(mydata) // update the state activeData with the array of product objects fetched from the API.

                // console.log(mydata);
            })
            .catch( (errordata)=>{
                console.log('This is error data' , {errordata});
                
            })
    }, []);

    // fileterdata from the filter hooks
    const filterdata = activeData.filter(  (product)=>
      product.title.toLowerCase().includes(serchData.toLowerCase()) ||
      product.category.name.toLowerCase().includes(serchData.toLowerCase())
    );

    // onChange action 
    const handleChange = (e)=> setSearch(e.target.value);

    return(
        <>
       
          <div className="text-center my-10">
            <h1 className="font-bold text-2xl">API Fetch data with search filter</h1>
          <input type="text" placeholder="Search by Title & Category name" onChange={handleChange} className="w-150 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 my-2" />
          </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
       {/* {filterdata === product ? (    */}
        {filterdata.map((item) => (
         <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
            <img
              src={item.category.image}
              alt={item.title}
              className="h-60 w-full object-contain p-5 bg-gray-50"
            />
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
               Name: {item.title}
              </h2>
              <p className="text-green-800 text-xl font-semibold mb-1">Category:  {item.category.name}</p>
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
               Price: {item.price}
              </h2>
            </div>
          </div>
         ))}
         {/* )} */}
      </div>
       
      </>
    )
}
export default Second;