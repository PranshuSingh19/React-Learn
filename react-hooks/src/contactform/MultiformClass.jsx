import { useState } from "react";

function MultiInputForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Simple explanation: यह कोड formData को update करता है — सिर्फ उसी field को change करता है जो user ने input किया है।
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,   // update jo change hua hai
      
    }));

  //  [ Simple explanation: यह कोड cart में नया product जोड़ता है और पुराना सामान भी रखता है।

  //   const handleAddToCart = (product) => {
  //     setCartItems([...cartItems, product]); // पुराना cart + नया item जोड़ना
  //   };]

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    console.log(e.target);
    
    alert(`Name: ${formData.name}\nEmail: ${formData.email}`);

  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>User Info Form</h2>

      <form  onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>   
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: "10px", fontSize: "16px" }}
        />

        <button
          
          style={{
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
      </div>
    </div>
  );
}

export default MultiInputForm;