import { createContext, useState } from "react";

export const Authcontext = createContext()

export const  ContextProvider = ({children})=>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)

    

    return(
        <Authcontext.Provider value={{user ,setUser,loading,setLoading}}>
            {children}
        </Authcontext.Provider>
    )



}