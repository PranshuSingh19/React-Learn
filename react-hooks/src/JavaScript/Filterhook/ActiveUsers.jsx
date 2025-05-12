import { useState } from "react";
import UserData from './UserData.json'

function Ausers(){

    const [userActive, userInactive] = useState(false);
    
    const Userinfo = UserData.filter( (users) =>
    {
        //Active or inactive data by ternary operator  {HidePass ? 'text' : 'password'} 
        return userActive ? users.status === 'active' : true;

    } );


    return(
        <div className="text-center">
        
        <h1>All Users Data</h1>

        <button onClick={() => userInactive(!userActive)} className="px-4 py-2 border rounded mb-4 curser-pointer" >
        {/* User Data */}
        {userActive ? "Show All Users" : "Show Only Active Users"}
        </button>

          <div>
            {/* get data by ternary operator  {HidePass ? 'text' : 'password'} */}
          {Userinfo.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Userinfo.map((users, index) => (
              <div key={index} className="bg-white p-4 rounded shadow">
                <h2 className="mt-2 font-bold"> { users.name } </h2>
                <p> { users.email } </p>
                <p> { users.phone } </p>
                <p> { users.address.city } </p>
                <p> { users.company.name } </p>
                <p>{ users.summery.substring(0, 100) }</p>
                <p>{ users.summery.slice(0, 50) }</p>
              </div> 
             ))}  
            </div>
            ) : (
             <p className="text-center"> No data found This is Inactive position </p>
            )}
          </div>
        </div>
    )
}
export default Ausers;