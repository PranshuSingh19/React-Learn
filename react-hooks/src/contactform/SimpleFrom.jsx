// use useState create form for submit data 

import { useState } from "react";

function SimpleForm() {

//   const [aValue, UpdatedValue] = useState('');  
  const [name, setName] = useState("");

  // handleChange for input value change
  const handleChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  // handleClick for submit button events
  const handleClick = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="px-10 py-10 m-20 shadow-xl rounded-md rounded-2xl bg-sky-500 text-white-200">
      <h3>This is a Simple Contact Form by useState</h3>
      <form onSubmit={handleClick}>
        <input className="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5"
          type="text"
          name="name"
          onChange={handleChange}
          value={name}
        />

        {/* there is two way to submit data by button  */}
        {/* <button className="bg-green-500 hover:bg-green-200 py-1.5 pr-7 pl-3 cursor-pointer border-x-2" type="submit" onClick={handleClick}> */}
        <button className="bg-green-500 hover:bg-green-200 py-1.5 pr-7 pl-3 cursor-pointer border-x-2" type="submit">
          Send Info
        </button>
      </form>
    </div>
  );
}

export default SimpleForm;