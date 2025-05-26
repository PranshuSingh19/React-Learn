import { useState } from "react";

function ContactForm() {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [phone,  setPhone]  = useState('');
  const [city, setCity]     = useState('')


  const HandleSubmint = async(e) =>{
    e.preventDefault();
      console.log({name, email, phone, city});

    try {
    const response = await fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      
      body: JSON.stringify({ name, email, phone, city })
    });

    const result = await response.json();
    console.log('Success:', result);
  
  
  setName("");
  setEmail("");
  setPhone("");
  setCity("");
  ContactForm();

  }

   catch (error) {
      console.error('error someting' , error);      
    }  

  }

  return (

    <div style={{maxWidth:"700px", margin:"50px"}}>
          <div className="bg-white dark:bg-white-800 rounded-lg px-6 py-8 ring shadow-xl">
    <form onSubmit={HandleSubmint}>
      <h1>Add New User</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required 
        className="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5"
      />
      <br /><br />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required 
        className="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5"
      />
      <br /><br />

      <input
        type="tel"
        placeholder="Enter your phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required 
        className="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5"
      />
      <br /><br />

      <input
        type="text"
        placeholder="Enter your city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required 
        className="w-full appearance-none rounded-md py-1.5 pr-7 pl-3 border-t-5 border-b-5 border-l-5 border-r-5"
      />
      <br /><br />

      <button type="submit" className="bg-green-500 hover:bg-green-200 py-1.5 pr-7 pl-3 cursor-pointer border-x-2">Submit</button>
    </form>
          </div>
      </div>

  );
}

export default ContactForm;
