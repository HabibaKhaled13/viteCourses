import React, { createContext, useState } from 'react'


export let DataUser = createContext()
export default function UserLoginProvider(props) {
    const [userLogin, setuserLogin] = useState(null)
  return <DataUser.Provider value={{setuserLogin, userLogin}}>
{props.children}

</DataUser.Provider>
}
