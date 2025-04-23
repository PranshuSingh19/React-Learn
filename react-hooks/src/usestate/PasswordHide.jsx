import React from "react"
import { useState } from "react"
import { FaRegEye ,FaRegEyeSlash } from "react-icons/fa6";


// ShowPass/HidePass Password 

function Hidepassword(){
    


    const [ HidePass, ShowPass ] = useState(false);

    // this is Toggle for buttons 
    const togglePassword = ()=>{
        ShowPass(!HidePass)
    };
  
    return(
        <>

        <div
        
        style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // use Ternary operator for bg color 
            backgroundColor:'#fff',
            transition: "all 0.4s ease",
            fontFamily: "sans-serif",
          }}
        >

    <form>
        <input
          type={HidePass ? 'text' : 'password'}
          placeholder="Enter Password"
          style={{
            backgroundColor:"#000",
            color:"#fff",
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "all 0.4s ease",
            fontFamily: "sans-serif",
          }}
        />
        <text
        
        type="botton"
        onClick={togglePassword}
        style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            transition: "all 0.4s ease",
            fontFamily: "sans-serif",
        }}

        > 

        {HidePass ?  <FaRegEye /> : <FaRegEyeSlash />}    
        </text>
      </form>

        </div>
        
        </>
    )
}
export default Hidepassword;