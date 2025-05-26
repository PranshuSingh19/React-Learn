// import { useState, useEffect } from "react";

// function Getapi(){

//   const [Getdata, setdata] = useState([]);

//    useEffect( ()=> {

//       fetch('https://jsonplaceholder.typicode.com/posts/')
//       .then( result => result.json())
//       .then( updata => 
//       {
//         setdata(updata)
//         console.log(updata);
        
//       }).catch(error => {
//           console.log(error);
//       }); 

//   }, []);


//   return<> Fatch API data by the only useEffect 
//     <div>
//       {Getdata.map( (item)=>
//         <>
//          <div key={item.id}>
//                <h3>{item.title}</h3>
//           <h3>{item.body}</h3>
//          </div>
//         </>
//       )}
//     </div>
//   </>
// }
// export default Getapi();

import { useEffect } from "react";

function Getapi() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10");
        const data = await response.json();
        console.log("Post:", data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, []);

  return <h1>Async Await in React</h1>;
}

export default Getapi;