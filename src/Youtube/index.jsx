import React, { Component } from 'react'
import { Container,Wrapper,Catigory,Icons,Input,User} from './style'
import Sidebar from './Sidebar'
import Body from './Body'
import logo from '../essets/img/logo.png';
import user from '../essets/img/pp.png';
import {data} from '../utils/mock';

export default class Youtube extends Component {
  constructor(props){
    super (props)
    this.state ={
      data: data,
    };
  }
  render() {

    const onFilter = (e) =>{
      console.log(e.target.value)
      let res = data.filter((value) => value.title.toLowerCase().includes(e.target.value.toLowerCase()));
      console.log(res)
      this.setState({data: res});
    }

    const onDelete = (id) => {
      console.log(id)
      let res = data.filter(value => value.id !== id);
      this.setState({data: res});
    }
    return (
      <Container>
        <Wrapper>
           <Catigory>
               <Icons.Vector />
               <Icons.logo src={logo} alt='img'/>
           </Catigory>
           <Catigory>
            <Input placeholder='search....' onChange={onFilter}/>
            <Icons.search />
           </Catigory>
           <Catigory end='true'>
             <Icons.camera />
             <Icons.menu />
             <Icons.bell />
             <User src={user}  alt='user img'/>
           </Catigory>
        </Wrapper>
        
        <Container flex>
            <Sidebar />
            <Body onDelete={onDelete} data={this.state.data}/>
        </Container>
      </Container>
    )
  }
}

