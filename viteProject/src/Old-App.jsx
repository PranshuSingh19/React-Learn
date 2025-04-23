// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Propes from './components/Propes'
import Propesarray from './Propes-array.js'
import { PropesComponent } from './components/PropsComponent.jsx'
// import Profile from './components/Profile'
// import Client  from './components/client'


function App() {

{/* These Are all react Hooks  */}
  {/* const [count, setCount] = useState(0)
      let [value, Counter] = useState(20) // only useState is react Hook we are using.

      'value' is our current state && second value, 'Counter', is the function that is used to update our state

      let value = 20;

      let addvalue = () =>{
        Counter(value + 1)
      }

      let removevalue = () =>{
        Counter(value - 1)
      } */}
     {/* useEffect hook me ak component ke change ya update hone se dusre component me refelaction hota hay. */}
    //  const [count, setCounter] = useState(0)
     

  // varialbe for propes
  // const city = "Indore";

  return (
    <>
    {/* Propes by this route  */}
 {/* Method 1  */}
    {/* <Profile  users = {"This is Pranshu Singh"}/> */}

  {/* Method 2  */}
    {/* <Profile>
      <h1>this is h1 tag</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, natus repellendus. Eum, beatae! Quam, delectus pariatur voluptate accusamus qui sit.</p>
    </Profile> */}

 {/* Method 3  */}
    {/* <Profile users={city} /> */}


    <div style={{display:'flex', gap: '10px'}}>
      {/* ues Propes can create card  */}
      {/* <Propes
      name='Pranshu Singh'
      about='He is Top React Developer in India'
      image='https://avatars.githubusercontent.com/u/149379985?v=4'
      />

      <Propes  
      name='Singh Sahab'
      about='He is React Developer in Indore'
      image='https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/21079/SM1099768.jpg?date=Wed%20Apr%2016%202025%2020:38:36%20GMT+0530%20(India%20Standard%20Time)'
      /> */}

{/* // propes data ARRAY from  */}

{/* this is my app.jsx file in react  */}
        <PropesComponent
        title={Propesarray[0].title}
        discreption={Propesarray[0].discreption}
        img={Propesarray[0].img}
        />
       
        {/* second way to show this  */}
        <PropesComponent  {...Propesarray[1]} />
        <PropesComponent  {...Propesarray[2]} />
        {/* (...) this is Javascript in wild function  */}

    </div>

    {/* client info by CARD system */}
    {/* <p style={{display: 'flex'}}>
       <Client
        name= "Pranshu Singh1"
        age= {25}
        state= "Madhya Pradesh"
        designation= "React developer"
        image= "https://avatars.githubusercontent.com/u/115446879?v=4"
        />
         <Client
        name= "Pranshu Singh2"
        age= {25}
        state= "Madhya Pradesh"
        designation= "React developer"
        image= "https://avatars.githubusercontent.com/u/115446879?v=4"
        />
         <Client
        name= "Pranshu Singh3"
        age= {25}
        state= "Madhya Pradesh"
        designation= "React developer"
        image= "https://avatars.githubusercontent.com/u/115446879?v=4"
        />
       </p> */}


  {/* These Are all react Hooks  */}
    {/* const [counter, set Counter] = Hooks(0); 
     variable be Name , function   = Initial Value  */}


      {/* <h2>  this is home page {value}</h2>
      <button onClick={addvalue}> add no {addvalue}</button>
      <br />
      <button onClick={removevalue}> remove {removevalue}</button> */}

    </>
  )
}

export default App
