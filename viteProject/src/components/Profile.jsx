import React from 'react'

// Propes users in this Profile page

export default function Profile({users})
{
    return(
        <>
                 <h2> This is Propes Profile page: {users}  </h2>
        </>
    )
}

// function Profile({users}){
//     return(
//         <>
//             <h2>
//                 Correct address is : {users} 
//             </h2>
//         </>
//     )
// }
// export default Profile;