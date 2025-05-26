
import axios from "axios";
import { useState, useEffect, use } from "react";

function Updefunction(){

    const [edituser, setUser]        = useState(false)
    const [editPutuser, setPutUser]  = useState("")

    const [getuserinfo, setUserinfo] = useState([]);

    // name, email, phone, city state 
    const [name, setName]    = useState("")
    const [email, setEmail]  = useState("")
    const [phone, setPhone]  = useState("")
    const [city, setCity]    = useState("")
    
    // http://localhost:4000/user
    // fetch Data in frantand
    var Getusedata = async ()=> {
        try {
            var resource = await axios.get("http://localhost:4000/user")
                setUserinfo(resource.data);
            
        } catch (error) {
            console.log('User not found', error);
        }
    }
    useEffect( ()=> { Getusedata();  }, []);

    // Submit Data handle 
    const handleSubmit = async (e)=> {
          e.preventDefault();  
        var Userdatainfo = {name, email, phone, city}

        try {
            if (edituser) {
                await axios.put(`http://localhost:4000/user/${editPutuser}`, Userdatainfo)
                alert(`Updated Successfully Name is:  ${name}`);
            }
            else{
                await axios.post(`http://localhost:4000/user`, Userdatainfo)
                alert(`Added Successfully Name is: ${name}`);
            }

            // updating function for all field
            setName('')
            setEmail('')
            setCity('')
            setPhone('')

            setUser(false)
            setPutUser('')
            Getusedata();

        } 
        catch (error) {
            console.error('submitation error', Userdatainfo)
            alert('Something wrong')
        }
    };

    // Edit handle User data
    const handleEdit = (users)=>{
        setName(users.name)
        setEmail(users.email)
        setPhone(users.phone)
        setCity(users.city)

        setUser(true)
        setPutUser(users.email)
    }

    // delete handle for all user 
    const handleDelete = async (email)=>{
          try {
            await axios.delete(`http://localhost:4000/user/${email}`)
            alert(`Delete Successfully Name is: ${email}`);
          } catch (error) {
            console.error('Someting error from deletation', error);
          }
    }

    return(

        <>
        <div className="bg-black-200">
           
        <form className="max-w-sm mx-auto">
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
            <input type="email" id="email"  
            value={email} onChange={ (e)=> setEmail(e.target.value) } 
            className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name</label>
            <input type="text" id="name" 
             value={name} onChange={ (e)=> setName(e.target.value) } 
             className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone No</label>
            <input type="number" id="phone-no" 
             value={phone} onChange={ (e)=> setPhone(e.target.value) } 
             className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">City Name</label>
            <input type="text" id="city-name" 
             value={city} onChange={ (e)=> setCity(e.target.value) } 
             className="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-xs-light" required />
        </div>
        {/* <div className="flex items-start mb-5">
            <div className="flex items-center h-5">
            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
            </div>
            <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
        </div> */}
        <button type="submit" onClick={handleSubmit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">{edituser ?  'Update User' : 'Register User'}</button>
        </form>

        </div>

        <div className="max-w-sm mx-auto">
            <ul>
                {/* /data.map(({ key, value }) */}
                {getuserinfo.map( (user, index)=> (
                    <li key={index}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.city}</div>

                        <button 
                        onClick={ ()=> handleEdit(user) }  
                        className="cursor-pointer text-black bg-blue-700 hover:bg-blue-800">Edit</button>
                        <button
                         onClick={ ()=> handleDelete(user.email) } 
                        className="cursor-pointer focus:outline-none text-black bg-red-700 hover:bg-red-800">Delete</button>
                    </li>
                ))}
               
            </ul>
        </div>
        
        </>
    )
}
export default Updefunction;