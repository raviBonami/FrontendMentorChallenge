
import React,{useState,useEffect} from 'react'
import {useParams,useLocation} from 'react-router-dom'
import axios from 'axios'
import {useSelector} from 'react-redux'

function Product() {
    const params = useParams();
    const {state} = useLocation();
    console.log(params.id)
    console.log(state)
    const storeProducts = useSelector((state) => state)
    console.log(storeProducts)

    const [individualProject, setIndividualProject] = useState({})


  return (
    <div>Individual Product </div>
  )
}

export default Product