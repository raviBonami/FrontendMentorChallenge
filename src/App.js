import logo from './logo.svg';
import './App.css';
import React , {useContext} from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Landing from './components/landing/Landing';
import ReqAuth from './components/auth/ReqAuth';
import User from './components/user/User';
import NotFound from './components/notFound/NotFound';
import Products from './components/products/Products';
import Product from './components/products/Product';
import AuthContext from './components/context/AuthProvider';

function App() {
  const {authUser,setAuthUser} = useContext(AuthContext)
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Products />} ></Route>
        <Route path="/signup" exact element={<Signup />} ></Route>
        {/* <Route path='/product' element={<ReqAuth><Products /></ReqAuth>} /> */}
        
        
        {/* <Route element={<ReqAuth />} >
          <Route path="/product" exact element={<Products />} ></Route>
          <Route path="/user" exact element={<User />} ></Route>
        </Route> */}
        <Route path='/product/:id' element={<Product />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>

    </>

  );
}

export default App;

// npm add antd
// npm add yup
// npm add formik
// npm react-router-dom
// npm add axios
// npm install --save @ant-design/icons


// Json server - 
// npm init
// npm install -g json-server
// Add this in scripts in package.json = “json:server”:”json-server --watch db.json”
// To run on port 3000 - npm run json:serve
// To run on any other server - json-server -p 4000 db.json

// Unique ID - 
// npm i react-uuid

// Requests - 
// npm i axios