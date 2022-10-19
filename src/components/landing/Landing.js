
import React, {useState} from 'react'
import Login from '../login/Login'
import Signup from '../signup/Signup'

function Landing() {
    const [defaultPage, setDefaultPage] = useState(true)
  return (
    <>
       <Login />
    </>
  )
  
}

export default Landing