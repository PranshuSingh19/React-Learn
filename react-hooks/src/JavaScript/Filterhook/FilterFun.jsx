import { useState } from 'react'
import ProductData from '../RealProduct.json'

function Filterfun() {

const  [CardValue, CardUpvalue] = useState(" ");

const CardData = ProductData.filter((productitem) => 
       
            productitem.title.toLowerCase().includes(CardValue.toLowerCase()) ||
            productitem.category.toLowerCase().includes(CardValue.toLowerCase())
        );

    return(
        <div className='p-10'>
          <h1 className='text-center text-lg'>Products Details - You can search your products</h1>
    
          <input
            type="text"
            onChange={(e) => CardUpvalue(e.target.value)}
            className='w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black my-10'
            placeholder="Search by title or category"
          />

          {/* <div className='bg-black-200'>
            
              <input type="checkbox" name="" id=""  value={productitem.price}/>
              <input type="checkbox" name="" id=""  value={productitem.category}/>
           
          </div> */}
    
          <div className="bg-gray-200">
            {CardData.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {CardData.map((productitem, index) => (
                  <div key={index} className="bg-white p-4 rounded shadow">
                    <img src={productitem.image} alt={productitem.title} className="w-full h-48 object-cover rounded" />
                    <h4 className="mt-2 font-bold"> {productitem.title}</h4>
                    <h6 className="text-sm text-gray-600">CATGY {productitem.category}</h6>
                    <p className="text-sm mt-1">{productitem.description.length> 50 ?
                       productitem.description.substring(0, 100) : productitem.description} 
                    </p>
                    <a href={productitem.image} className="text-blue-500 underline mt-2 inline-block">View More</a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center p-4">Data not found</p>
            )}
          </div>
        </div>
      );
        }
export default Filterfun;

// ternary operator
// {HidePass ? 'text' : 'password'}