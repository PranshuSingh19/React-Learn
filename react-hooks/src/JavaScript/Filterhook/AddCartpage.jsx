import { useState } from "react";
import Ecommerce from "./eCommerce.json"
import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";


function Addcart(){

    const [ProductData, setProductData] = useState('');

    const FindData = Ecommerce.filter( (product)=> 
    
        product.name.toLowerCase().includes(ProductData.toLowerCase()) ||
        product.category.toLowerCase().includes(ProductData.toLowerCase()) ||
        // filter is not working for rating and price because those values are likely numbers
        // esline number filter karne ke liye toString ka use karte hay
        product.rating.toString().toLowerCase().includes(ProductData.toLowerCase()) ||
        product.price.toString().toLowerCase().includes(ProductData.toLowerCase()) 
    );

    const handleChange= (e)=> setProductData(e.target.value);


    // for cart udate ke liye 
    const [CartItems, SetCartItems] = useState([]); //[] sets up an empty array to hold the items in the cart.

    const handleCartClick= (items)=>{
      SetCartItems([...CartItems, items]) // [...cartItems] is a copy of the current cart array
      // setCartItems([...cartItems, item]) tells React to update the state with the new list
    };
    
    const CartCount = CartItems.length;

    return(
        <>
   <nav class="bg-white border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

            <a href="#" class="text-lg font-semibold text-gray-800">Pranshu</a>


            <button class="lg:hidden text-gray-500 focus:outline-none" aria-label="Toggle navigation" onclick="document.getElementById('navbarNav').classList.toggle('hidden')">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:space-x-6" id="navbarNav">
            <ul class="flex space-x-4">
                <li>
                <a href="#" class="text-blue-600 font-medium">Home <span class="sr-only">(current)</span></a>
                </li>
                <li>
                <a href="#" class="text-gray-700 hover:text-blue-600">Features</a>
                </li>
                <li>
                <a href="#" class="text-gray-700 hover:text-blue-600">Pricing</a>
                </li>
            </ul>
            </div>

            <ul class="hidden lg:flex items-center space-x-4">
            <li>
                <a href="#cartpage" class="text-gray-700 hover:text-blue-600 flex items-center gap-1">
                <CiShoppingCart />
                Cart &nbsp;
                {CartCount}
                </a>
            </li>
            <li>
                <a href="#" class="text-gray-700 hover:text-blue-600 flex items-center gap-1">
                <i class="bi bi-person-circle"></i> Login
                </a>
            </li>
            </ul>
        </div>
        </nav>
    

 <div className="text-center"> 
        <input type="text"
            placeholder="Search by name, category, rating and price..."
            className="w-150 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 my-10"
            onChange={handleChange} value={ProductData}
          />
        </div>
        {/* All Product data show by map function and Ternary oprater */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {FindData.map((item, index) => (    
  <div
    key={index}
    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
  >
    <img
      src={item.image}
      alt={item.name}
      className="h-60 w-full object-contain p-5 bg-gray-50"
    />

    <div className="p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
        {item.name}
      </h2>

      <p className="text-green-600 text-xl font-bold mb-1">₹{item.price}</p>
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
      <p className="text-xs text-blue-600 mb-2 capitalize">{item.category}</p>

      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>⭐ {item.rating}</span>
      </div>

      <button
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
        onClick={() => handleCartClick(item)}
      >
        Add to Cart
      </button>
    </div>
  </div>
))}
</div>


{/* display cart items with totle price and Products  */}
<div className="max-w-4xl mx-auto my-16 px-4">
  <h1 className="text-2xl font-bold text-center mb-6">Your Cart Page</h1>

  <div id="cartpage" className="space-y-4">
    {CartItems.length > 0 ? (
      CartItems.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain rounded-lg border"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
          </div>
          <p className="text-green-600 font-bold text-lg">₹{item.price}</p>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500 text-lg mt-10">No data found in the cart.</p>
    )}
  </div>

  {CartItems.length > 0 && (
    <div className="flex items-center justify-between mt-8 bg-white p-4 rounded-lg shadow-md border text-right">
      <h4>Totle Items Price</h4>
      <p className="text-xl font-bold text-gray-800">
        Total: ₹
        {CartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
      </p>
    </div>
  )}
</div>
        </>
    )
    }
export default Addcart;