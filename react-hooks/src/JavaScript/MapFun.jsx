export default function Mapfun() {
    // const Data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//     const PersonDetails = [
//       {id: 1, name: "Kyle", age: 23},
//       {id: 2, name: "Taylor", age: 45},
//       {id: 3, name: "Anna", age: 30}
// ]
  

// {/* Map function syntax: const map = array.map((x) => x * 2); */}
//   return (
//     <div className="p-10 divide-gray-100">
//       {PersonDetails.map((PersonData) => (
//       <div key={PersonData.id} className="flex justify-between gap-x-6 py-5">
//       <div className="min-w-0 flex-auto">
//       <h1 className="text-gray-900  text-500">{PersonData.name}</h1>
//       <p className="text-gray-900">{PersonData.age}</p>
//     </div>
//     </div>

//   ))}
//   </div>
//   ); 


// second code for differante type data show (Contact form)

  // const fromdata = ['Name', 'Email', 'Phone', 'Address'];
  
  // json data 
  const Data = [
    {
        id: 1,
        name: 'KL. Rahul',
        image : "https://documents.iplt20.com/ipl/IPLHeadshot2025/19.png"
    },

    {
        id: 2,
        name: 'Virat Kohali',
        image : "https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"
    },

    {
        id: 3,
        name: 'Rohit Sharma',
        image : "https://images.indianexpress.com/2024/07/Rohit-Sharma.jpg"
    }

]

  return(

    <>
      {/* <form>

      {fromdata.map((data, i) =>(
       <div key={i} className="bg-orange-200">
        <label className="text-2xl bg-clip-text"> {data} </label>
        <input type="text"  placeholder={`Enter your ${data}`}/>
       </div>

      ))}

      </form> */}

      {
        Data.map((Data, Index)=>(
          <>
          <h3>Crikter Name Is {Data.name}</h3>
          <img src={Data.image} alt="" />
          <a className="text-blue-500 hover:text-blue-700 mt-2 block text-center" target="_blank" href={Data.image}>View Full Image</a>
          </>

        ))
      }
    </>

  );
}