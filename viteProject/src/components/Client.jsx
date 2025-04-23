import React from 'react'


function Client_data({name, age, state, designation, image}){

    return(
        <>
        <div style={{
              border:"1px solid black",
              padding:"10px",
              margin:"10px",
              borderRadius:"10px",
              width:"250px"      
        }}>
        <img src={image} alt={name} style={{ width: "100%" }} />
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{state}</p>
        <p>{designation}</p>
        </div>
        </>
    )
}
export default Client_data;