
import React,{useState, useContext} from 'react'
import { Form, Input, Divider, Typography, Card, Checkbox, Button, Row, Col,Space} from 'antd'
import 'antd/dist/antd.css';
import "./login.css"
import {useNavigate, Navigate} from 'react-router-dom'
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import ReqAuth from '../auth/ReqAuth';
import AuthContext from '../context/AuthProvider';

function Login() {
    const [form] = Form.useForm()
    const { Title ,Text} = Typography
    const navigate = useNavigate()
    const [auth, setAuth] = useState(false)
    const {authUser,setAuthUser} = useContext(AuthContext)
    const localStorage = window.localStorage

    
    const handleLogin = async (user) => {
        //console.log(user) // {username: 'example@gmail.com', password: '1234567'}
        const users = await axios.get('http://localhost:4000/users');
        // console.log(users.data)
        let validUser = false;
        const userList = JSON.parse(localStorage.users)
        for(const key in userList){
            if(user.username === userList[key].username && user.password === userList[key].password){
                validUser = true
                console.log(validUser)
                break;
            }
        }

        if(validUser){
            console.log(validUser)
            navigate('/product')
        }else{
            console.log(validUser)
            navigate('/signup')
        }
        // for(let i=0;i<users.data.length;i++){
        //     console.log(users.data[i])
        //     if(users.data[i].username === user.username && users.data[i].password === user.password){
        //         console.log('inside if')
        //         // await setAuthUser(true);
        //         // setAuth(true)
        //         // console.log(authUser)
        //         // setAuth(true)
        //         // console.log(auth)
        //         navigatePage('/product')
        //         break;
        //     }
        // }
        // if(!auth){
        //     navigatePage('/signup')
        // }
        // if(authUser){
        //     navigatePage('/product')
        // }else{
        //     navigatePage('/notfound')
        // }
        // useNavigate(<ReqAuth auth={validUser} />)
        // console.log(auth)
            // navigatePage('/notfound')
        
    }

    const handleBlur = () => {
        // console.log(values)
    }

    const handleSignUp = () => {
        navigate("/signup")
    }


    // if(auth){
    //     return <ReqAuth />
    // }else{
    return (
        <>
            <Row className='row_login'  justify="center" align='middle' >
                <Col  className="columnOne_login" span={12}  >
                    <Card className='welcome_card_login' >
                        <Title type='secondary' >Welcome To Threads</Title>
                        <Title type='secondary' level={4} italic  >An online store for all your clothing shopping destination</Title>
                        {/* <Space size="large"></Space> */}
                        {/* <Divider></Divider> */}
                        <Divider />
                        <Button className='sign_up_btn_login' shape='round' onClick={handleSignUp} >Sign Up</Button>
                    </Card>
                </Col>
                <Col className="columnTwo_login" span={12} >
                    <Form 
                        form={form}
                        onFinish={(user) => handleLogin(user)}
                        layout='vertical'
                        className='login_form'
                        // onBlur={handleBlur}
                        validateTrigger="onBlur"
                        >
                        <Form.Item  
                            label={<h2 className='username_login'>Username</h2>} 
                            name="username"      
                            rules={[{required:true,message:"Please input your user name"}]} >
                            <Input className='username_input_login' placeholder='Username' />
                        </Form.Item>
                        <Form.Item label={<h2 className='password_login'>Password</h2>} name="password" rules={[{required:true, message:'Please enter your password'}]} >
                            <Input.Password className='password_input_login' placeholder='Password'/>
                        </Form.Item>
                        <Form.Item>
                            <Button  className='login_btn_login'  shape='round'  htmlType='submit' >Login</Button>
                        </Form.Item>
                        <Form.Item>
                            <Title type='secondary' level={5} >Forgot your Password ?</Title>
                        </Form.Item>
                    </Form>
                </Col>
                <Col className='sign_up_option_login' span={24} offset={16} >
                    {/* <Divider/> */}
                    <Title type='secondary' level={4} >Don't have an account ? <Link to='/signup' > Sign Up now </Link></Title>
                    
                </Col>
                <Col>
                <Text type='secondary' >Copyright @Threads | 2022</Text>
                </Col>
            </Row>
        </>
     
    )
    // }
}


export default Login


























   //     <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center',alignItems:'center',border:'2px solid black ',
        //     marginTop:'20px',marginBottom:'20px'}} >
        //     <div style={{width:'50%',height:'100%',border:'2px solid red',textAlign:'center'}}>
        //         <h1 style={{fontFamily:'cursive'}}>Hello</h1>
        //         <Button type="primary" size='large' shape="round" htmlType='submit' >Sign Up</Button>
        //     </div>
        // <Form
        //     name="basic"
        //     // labelCol={{ span: 16 }}
        //     // wrapperCol={{ span: 20 }}
        //     // style={{position:'absolute',top:'30%', transform:'TranslateY(-50%)',left:'40%', transform:'TranslateX(-50%)',width:'100%',height:'30%'}}
        //     layout="vertical"
        //     style={{border:'2px solid yellow',width:'50%'}}
        // // initialValues={{ remember: true }}
        // // onFinish={onFinish}
        // // onFinishFailed={onFinishFailed}
        // // autoComplete="off"
        // >
        //     <Form.Item
        //         label={<p style={{fontSize:'30px',fontFamily:'cursive'}} >Username</p>}
        //         name="username"
        //         rules={[{ required: true, message: 'Please input your username!' }]}
                
        //     >
        //         <Input style={{borderRadius:'25px',margin:'0',padding:'0'}} />
        //     </Form.Item>

        //     <Form.Item
        //         label={<p style={{fontSize:'30px',fontFamily:'cursive'}} >Password</p>}
        //         name="password"
        //         rules={[{ required: true, message: 'Please input your password!' }]}
        //     >
        //         <Input.Password style={{borderRadius:'25px',height:'45px'}} />
        //     </Form.Item>

        //     <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        //         <Checkbox>Remember me</Checkbox>
        //     </Form.Item>

        //     <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        //         <Button type="primary" htmlType="submit" shape='round' size="large" >
        //             Submit
        //         </Button>
        //     </Form.Item>
        // </Form>
        // </div>
        
        



        // <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', margin: '50px' }}>

        //     <Card
        //         type='secondary'
        //         hoverable={true}
        //         loading={false}
        //         bordered={true}
        //         title={<Title style={{display:'flex', alignItems:'center',justifyContent:'center'}} level={1} >Login</Title>}
        //         // style={{position:'absolute', left:'30%', top:'30%'}}
        //         style={{ height: '500px', width: '50%'}}

        //     >

        //         <Form
        //             form={form}
        //             onFinish={(values) => handleLogin(values)}

        //             layout="vertical"
        //             // style={{ margin: '5px', padding: '5px', position: 'absolute', left: '30%', transform: 'translateX(-50%)', top: '120%', transform: 'translateY(-50%)' }}
        //         >
        //             <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please enter your username" }]} >
        //                 <Input size='large' style={{ borderRadius: '25px', height: '50px', width: '450px' }} />
        //             </Form.Item>
        //             <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]} >
        //                 <Input.Password size="large" style={{ borderRadius: '25px', height: '50px', width: '450px' }} />
        //             </Form.Item>
        //         </Form>
        //     </Card>
        // </div>