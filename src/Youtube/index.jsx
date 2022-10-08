import React, { Component } from 'react'
import { Container,Wrapper,Catigory,Icons,Input,User} from './style'
import Sidebar from './Sidebar'
import Body from './Body'
import logo from '../essets/img/logo.png';
import user from '../essets/img/pp.png';


class Youtube extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
           <Catigory>
               <Icons.Vector />
               <Icons.logo src={logo} alt='img'/>
           </Catigory>
           <Catigory>
            <Input placeholder='search....' />
            <Icons.search />
           </Catigory>
           <Catigory end>
             <Icons.camera />
             <Icons.menu />
             <Icons.bell />
             <User src={user}  alt='user img'/>
           </Catigory>
        </Wrapper>
        
        <Container flex>
            <Sidebar />
            <Body />
        </Container>
      </Container>
    )
  }
}

export default Youtube;
