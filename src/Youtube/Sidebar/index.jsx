import React, { Component } from 'react'
import { Container, Wrapper,Title, IconWrapper, Icon } from '../Sidebar/style'
import { sidebar } from '../../utils/sitebar'


class Sidebar extends Component {
  render() {
    return (
      <Container>
             {sidebar.map(({id, icon, title, data}) => (
                <Wrapper key={id}>
                      {title && <Title title>{title}</Title>}
                      {data.map(({icon, title}) =>(
                        <IconWrapper key={id}>
                           <Icon src={icon} />
                          <Title>{title}</Title>
                        </IconWrapper>
                      ))}
                </Wrapper>

              ))}    
      </Container>
    );
  }
}

export default Sidebar;
