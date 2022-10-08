import React, { Component } from 'react'
import { Container, Video, Wrapper, User, Title } from './style'

export default class Card extends Component {
  render() {
    const {id, user,video, name, view, time, title} = this.props.value;
    const {onDelete} = this.props
    return (
      <Container>
        <Video src={video} alt='bbb'/>
        <Wrapper >
            <User src={user.img} alt='fff'/>
            <div>
                <Title>{title}</Title>
                <Title desc>{id} {name}</Title>
                <div style={{display: 'flex'}}>
                 <Title desc>
                   {view} {time} <button onClick={() => onDelete(id)}>delete</button>
                 </Title>
                </div>
            </div>
        </Wrapper>
      </Container>
    )
  }
}
