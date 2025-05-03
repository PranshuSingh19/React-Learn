// use useState create multi inputs form for submit data 

import { useState } from "react";

function ManyInput(){

    const [data, setData] = useState({
        name: '',
        email: '',
        date: '',
    });

 // handleChange for input value change
    const handleChange = (e)=>{
        setData(e.target.value);
        console.log(e.target.value);
    }

      //  handleChange for input value change
    //   const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // handleClick for submit button events
    const handleClick = (e)=>{
        e.preventDefault();
        console.log(data)
    }


    // alert(`Name: ${data.name}\nEmail: ${data.email}`);

    return(
        <div className="px-10 py-10">
        <h2> This is Mult Input Contact form by useState </h2>
        <form>
            <input type="text" onChange={handleChange} className="appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5" name="name" id="" /> <br/>
            <input type="email" onChange={handleChange} className="appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5" name="email" id="" /> <br/>
            <input type="date" onChange={handleChange} className="appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5" name="date" id="" />  <br/>  <br/>
            {/* onClick={handleClick}  */}
            <button type="submit" onClick={handleClick} className="bg-green-500 hover:bg-green-200 py-1.5 pr-7 pl-3 cursor-pointer border-x-2"> Submit Data </button>
        </form>

        </div>
    )
}
export default ManyInput;