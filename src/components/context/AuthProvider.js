
import React,{useState, createContext} from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [authUser,setAuthUser] = useState(false)
    
  return (
    <AuthContext.Provider value={{authUser, setAuthUser}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext