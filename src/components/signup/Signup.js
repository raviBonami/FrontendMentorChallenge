
import React from 'react'
import { Form, Input, Divider, Typography, Card, Checkbox, Button, Row, Col, Space } from 'antd'
import 'antd/dist/antd.css';
import './signup.css'
import { StarOutlined,FacebookOutlined,AppleOutlined,GoogleOutlined} from '@ant-design/icons';
import {useNavigate, Link} from 'react-router-dom'
import uuid from 'react-uuid';
import axios from 'axios';

function Signup() {
  const [form] = Form.useForm()
  const { Title, Text } = Typography
  const navigatePage = useNavigate()
  const localStorage = window.localStorage

  const handleLogin = () => {
    navigatePage('/')
  }

  const handleSignup = async (newUser) => {
    // {username: 'abcd', email: 'abc@gmail.com', password: '123456789'}
    newUser.id = uuid()

    let userList = JSON.parse(localStorage.getItem('users')) || [];
    // localStorage.setItem()
    console.log(newUser)
    form.resetFields()
    userList.push(newUser)
    localStorage.setItem('users',JSON.stringify(userList) );
    await axios.post('http://localhost:4000/users',newUser)
    

  }


  return (
    <>
      <Row className='row' justify="center" align='middle' >
        <Col className="columnOne" span={12} >
          <Card className='welcome_card' >
            <Title type='secondary' >Welcome To Threads</Title>
            <Title type='secondary' level={4} italic  >An online store for all your clothing shopping destination</Title>
            <Title type='secondary' level={4} italic >Join us and explore the world of amazing products at best prices</Title>
            {/* <Space size="large"></Space> */}
            {/* <Divider></Divider> */}
            <Divider />
            <Button className='login_btn' shape='round' onClick={handleLogin} >Login</Button>
          </Card>
        </Col>
        <Col className="columnTwo" span={12} >
          <Form
            form={form}
            layout='vertical'
            className='signup_form'
            validateTrigger="onBlur"
            onFinish={(newUser) => handleSignup(newUser)}
          >
            <Form.Item
              label={<h2 className='username'>Username</h2>}
              name="username"
              rules={[{ required: true, message: "Please input your user name" }]} >
              <Input className='username_input' placeholder='Username' />
            </Form.Item>

            <Form.Item
              label={<h2 className='email'>Email</h2>}
              name="email"
              rules={[{ required: true, message: "Please input your email", type: "email" }]}
            >
              <Input className='user_email_input' placeholder='Email' />

            </Form.Item>
            <Form.Item label={<h2 className='password'>Password</h2>} name="password" rules={[{ required: true, message: 'Please enter your password' }]} >
              <Input.Password className='password_input' placeholder='Password' />
            </Form.Item>
            <Form.Item>
              <Button className='signup_btn' shape='round' htmlType='submit' >Sign Up</Button>
            </Form.Item>
          </Form>
        </Col>
        <Col style={{padding:'20px'}} >
          <Title level={4} style={{color:'rgb(139, 136, 136)'}} >Already have an account ? <Link to='/' >Login</Link></Title>
        </Col>
        <Divider ><Text className='sign_in_options' >Or Sign in with </Text></Divider>
        <Col >
            
              <Text style={{padding:'2px',margin:'25px',color:'rgb(139, 136, 136)'}} ><GoogleOutlined style={{margin:'2px'}} />Google</Text>
              <Text style={{padding:'2px',margin:'25px',color:'rgb(139, 136, 136)'}} ><AppleOutlined style={{margin:'2px'}} />Apple ID</Text>
              <Text style={{padding:'2px',margin:'25px',color:'rgb(139, 136, 136)'}} ><FacebookOutlined style={{margin:'2px'}} />Facebook</Text>
            
        </Col>
        <Divider />
        <Col>
          <Text type='secondary' >Copyright @Threads | 2022</Text>
        </Col>
      </Row>
    </>
  )
}

export default Signup