
// Filename - App.js

// import React, { useState } from "react";

// function Example() {
//     const [file, setFile] = useState();
//     function handleChange(e) {
//         console.log(e.target.files);
//         setFile(URL.createObjectURL(e.target.files[0]));
//     }

//     return (
//         <div className="App">
//             <h2>Add Image:</h2>
//             <input type="file" onChange={handleChange} className="border bg-gray-200"/>
//             <img src={file}/>
//         </div>
//     );
// }

// export default Example;
import React, { useState } from 'react';

function Example() {
  const [myOptions, setMyOptions] = useState([]);

  const getDataFromAPI = async () => {
    console.log('Options Fetched from API');

    try {
      const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');
      const res = await response.json();
      const names = res.data.map((item) => item.employee_name);
      setMyOptions(names);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div
      freeSolo
      options={myOptions}
      style={{ width: 500 }}
      renderInput={(params) => (
        <p
          {...params}
          onFocus={getDataFromAPI}
          variant="outlined"
          label="Search Box"
        />
      )}
    />
  );
}

export default Example;
