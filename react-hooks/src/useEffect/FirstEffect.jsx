import React from "react"
import {useState ,useEffect} from "react"

function FirstEffect() {

   const [count, setCount] = useState(0);

  useEffect(() => {
    // alert('Component mounted');
    console.log(`Count badla: ${count}`)
  }, [count]); 

    return (
    <div className="m-20 text-center">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">Increase</button>
    </div>
  );

}
export default FirstEffect;