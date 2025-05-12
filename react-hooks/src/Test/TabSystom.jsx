import { useState } from "react";


function TabSystom(){

    const [Items, setItems] =useState('');

    const tabs= ['R', 'J', 'P', 'M']

    return(

        <>
        <ul>
           {tabs.map( (tab)=> 
            <li key={tab}>
        <button onClick={()=> setItems(tab)} className="inline-block px-4 py-2 transition font-semibold cursor-pointer">{tab}</button>
            </li>
            )}
        </ul>

        <div id="react">
        <div class="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden md:flex">

    <div class="md:w-1/2 relative">
      <img src="https://picsum.photos/id/1060/300/200" alt="MERN Stack Course" class="w-full h-full object-cover" />
    </div>

    <div class="md:w-1/2 p-8">
      <h2 class="text-2xl font-bold mb-2">MERN Stack</h2>
      <div class="flex items-center mb-4">
        <div class="flex text-yellow-400">
          <span>★</span><span>★</span><span>★</span><span>★</span><span class="text-gray-300">★</span>
        </div>
        <span class="ml-2 text-gray-700 font-semibold">4.5</span>
        <span class="ml-2 text-sm text-gray-500">Student Rating</span>
      </div>

      <p class="text-gray-700 mb-4">
        Master the MERN stack with our comprehensive course covering MongoDB, Express.js, React, and Node.js.
        Build full-stack applications from scratch and deploy them to production.
      </p>

      <h3 class="font-semibold text-gray-800 mb-2">💡 What you'll learn:</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 mb-6">
        <div class="flex items-center">
          <span class="text-blue-600 mr-2">➤</span> React frontend development
        </div>
        <div class="flex items-center">
          <span class="text-blue-600 mr-2">➤</span> Node.js & Express backend
        </div>
        <div class="flex items-center">
          <span class="text-blue-600 mr-2">➤</span> MongoDB database integration
        </div>
        <div class="flex items-center">
          <span class="text-blue-600 mr-2">➤</span> Full-stack project deployment
        </div>
      </div>

      <div class="flex space-x-4">
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md">
          💬 Enquire Now
        </button>
        <button class="bg-blue-100 hover:bg-blue-200 text-blue-600 px-5 py-2 rounded-lg shadow-md">
          ✈️ Chat Now
        </button>
      </div>
    </div>
  </div>
        </div>
        </>
    )
}
export default TabSystom;