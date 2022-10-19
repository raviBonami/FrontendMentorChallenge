

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col, Card, Typography, Divider, Space,Modal,Layout,Menu,Button } from 'antd'
import 'antd/dist/antd.css';
import {Link, useNavigate, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {addProduct} from '../../store/store'

function Products() {
  const [singleP, setSingleP] = useState({})
  const [productsList, setProductsList] = useState([])
  const { Meta } = Card
  const { Text } = Typography
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})
  const {Header,Content} = Layout
  const navigatePage = useNavigate()
  const storeProducts = useSelector((state) => state)
  const dispatch = useDispatch()

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    console.log(response)
    const data = await response.data;
    // console.log(data)
    // setSingleP(data[0]) // object
    setProductsList(data)
    dispatch(addProduct(data))
  }

  useEffect(() => {
    console.log("inside use effect")
    getProducts();
  }, [])

  const handleProduct = (product) => {
      navigatePage(`/product/${product.id}`)
      // <Navigate to={`/product/${product.id}`   product={product} } />
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <Layout>
      <Header style={{position: 'fixed', zIndex: 1, width: '100%',marginTop:'0',marginBottom:'10px'}} >
        <Menu theme="dark"  mode='horizontal' defaultSelectedKeys={[]} >
          <Menu.Item key="1" >
              <span>THREADS</span>
              <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2" >
              <span>Home</span>
              <Link to="/notfound" />
          </Menu.Item>
          <Menu.Item key="3" >
              <span>Products</span>
              <Link to="/" />
          </Menu.Item>
          <Menu.Item key="4" >
              <span>Cart</span>
              <Link to="/" />
          </Menu.Item>
        </Menu>
      </Header>
        <Content style={{marginTop:'20px'}} >
      <Row style={{ padding: '5px', marginTop: '20px' }} align="middle" justify='center' wrap >
        {productsList.map((product) => (
          <>
          <Col 
            key={product.id}
            // onClick={() => handleProduct(product)}
            xs={24} 
            md={12}
            lg={12}
            xl={6}
            span={6} style={{ display: 'flex', margin: '10px' }} >
            <Card
              style={{ height: 'auto', width: '300px', margin: '10px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
              title={product.title}
              hoverable
              cover={<img style={{ height: '200px', width: '200px', margin: '10px' }} src={product.image} 
              
              />}
            >
              <Meta style={{ height: '100px' }} title={product.category.toUpperCase()} description={product.description} />
              <Divider />
              <div style={{ display: 'flex' , justifyContent:'space-evenly'}} >

                <p>Price: {product.price} </p>
                <p> Rating: {product.rating.rate} </p>
              </div>
                <Button 
                  // onCLick={() => handleProduct(product)}
                  style={{
                    borderRadius:'25px', backgroundColor:'black',color:'white',
                    height:'50px',width:'150px', position:"relative", left:'50%', transform:'TranslateX(-50%)'}}  >Buy Now</Button>
            </Card>
          </Col>
          </>
          
        ))}

      </Row>
      </Content>
      
    </Layout>
  )
}

export default Products