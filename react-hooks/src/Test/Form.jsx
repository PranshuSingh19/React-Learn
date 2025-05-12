import { useState } from "react";


function Form(){

    const [data, setData] = useState('');

    const handleChange = (e)=>{
        setData(e.target.value);
        console.log(e.target.value)
    } 

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`this data sumbited:-  ${data}`)
        console.log(data)
    }

    return(

        <>
        <h2>This is form with submitation</h2>

        <form>
            <input type="text" name="" id="" value={data} onChange={handleChange} className="border rounded px-2 py-1 bg-gray-200"/>

            <button type="submit" onClick={handleSubmit} className="border rounded-2xl bg-green-500 px-3 py-1 mx-2 cursor-pointer">Submit Button</button>
        </form>

        </>
    )
}
export default Form;