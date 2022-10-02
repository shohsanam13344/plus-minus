import React, { Component } from 'react'
import {Container,Boxs, Box1, Box2, Title, Input,Input1,Div,Div1,P,Button,P1,P2} from './style'

class Task extends Component {
  render() {
    return (
      <Container>
          <Boxs>
             <Box1>
                <Div>
                       <Title>Login I Register</Title>
                       <P>Enter your username and password to login.</P>
                     <Div1>
                         <Input type="email" placeholder='almamun_uxui@outlook.com' />
                         <Input type="possword" placeholder='...' />
                         <P2>Forgot Password?</P2>
                    </Div1>
                    <Button>Login</Button>
                    <P1>Or register with</P1>
                    <Input1 type="text" placeholder='Continue with Google' />
                    <Input1 type="text" placeholder='Continue with Facebook' />
                </Div>
             </Box1>
             <Box2>
             <Div>
                       <Title>Login I Register</Title>
                       <P>Enter your email and password to register.</P>
                     <Div1>
                         <Input type="text" placeholder='Username' />
                         <Input type="email" placeholder='Enter your email address' />
                         <Input type="password" placeholder='Password' />
                         <Input type="password" placeholder='Confirm Password' />
                    </Div1>
                    <Button>Register</Button>
                    <P1>Or register with</P1>
                    <Input1 type="text" placeholder='Continue with Google' />
                    <Input1 type="text" placeholder='Continue with Facebook' />
                </Div>
             </Box2>
          </Boxs>
      </Container>
    )
  }
}

export default Task;
