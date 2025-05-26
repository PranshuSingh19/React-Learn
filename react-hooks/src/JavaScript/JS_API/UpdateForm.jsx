import { useState, useEffect } from "react";
import axios from "axios";

function UpdateForm() {
  const [editData, setEditData] = useState(false);
  const [editPutData, setPutData] = useState("");

  const [userinfo, setUserinfo] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);
    else if (name === "city") setCity(value);
  };

  // Fetch data for frontend
  const Getdata = async () => {
    try {
      const response = await axios.get("http://localhost:4000/user");
      setUserinfo(response.data);
    } catch (error) {
      console.error("Users not found:", error);
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const Userdata = { name, email, phone, city };

    try {
      if (editData) {
        await axios.put(`http://localhost:4000/user/${editPutData}`, Userdata);
        alert("Update Successfully");
      } else {
        await axios.post(`http://localhost:4000/user`, Userdata);
        alert("Inserte Successfully");
      }

      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setEditData(false);
      setPutData("");
      Getdata();
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something wrong");
    }
  };

  // delete data function 
  const handleDelete = async (email) => {
  try {
    await axios.delete(`http://localhost:4000/user/${email}`);
    alert("delete successfully");
    Getdata();
  } catch (err) {
    console.error("Delete Error:", err);
    alert("Failed to delete user");
  }
};

  // set Edit data reset function
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setPhone(user.phone);
    setCity(user.city);
    setEditData(true);
    setPutData(user.email);  
  };

  return (
    <div className="m-20">
      <form onSubmit={handleSubmit}>
       <div className="grid gap-6 mb-6 md:grid-cols-2">
         <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="name"
          placeholder="Enter your Full name"
          value={name}
          onChange={handleChange}
        />
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="email"
          name="email"
          placeholder="Enter your email id"
          value={email}
          onChange={handleChange}
        />
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          name="phone"
          placeholder="Enter your phone no"
          value={phone}
          onChange={handleChange}
        />
        <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="text"
          name="city"
          placeholder="Enter your city"
          value={city}
          onChange={handleChange}
        />

       </div>
        <button type="submit" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"> {editData ? 'Update User' : 'Add User'} </button>
      </form>

      <h2 style={{ textAlign: "center", color: "#333" }}>All Users</h2>
      <ul>
        {userinfo.map((user, index) => (
          <li key={index} style={{ border: "1px solid #ddd", padding: "8px", margin: "4px" }}>
            <div>
              <strong>{user.name}</strong> ({user.email})<br />
              {user.phone} |  {user.city}
            </div>
              <button onClick={() => handleEdit(user)}  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">
              Edit
            </button>

            <button onClick={() => handleDelete(user.email)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 cursor-pointer">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateForm;
