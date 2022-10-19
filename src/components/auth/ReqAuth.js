import React, { useContext } from 'react'
import AuthContext from '../context/AuthProvider';
import Login from '../login/Login';
import Signup from '../signup/Signup';
import { Routes, Route, Navigate,Outlet } from 'react-router-dom'

const ReqAuth = ({ authUser, component: Component, children,...rest }) => {

    // return (
    //     <Routes>
    //         <Route
    //             {...rest}
    //             render={(props) => {
    //                 if (authUser) return <Component {...props} />
    //                 if (!authUser) return (<Navigate path= "/" />)
    //             }}
    //         >

    //         </Route>
    //     </Routes>
    // )
    // const { authUser, setAuthUser } = useContext(AuthContext)
    // console.log(authUser, '=====')
    // console.log(auth, "---------------")
    // if(authUser){
    //     return <Navigate to="/product" />
    // }else{

    //     return <Navigate to="/notfound" />
    // }

    // return authUser ? <Outlet /> : <Signup />
    return <>{children}</>
}

export default ReqAuth