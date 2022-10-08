import React, { Component } from 'react'
import { Container, Wrapper,Title, IconWrapper, Icon } from '../Sidebar/style'
import { sidebar } from '../../utils/sitebar'


class Sidebar extends Component {
  render() {
    return (
      <Container>
             {sidebar.map(({id, icon, title, data}, index) => (
                <Wrapper key={index}>
                      {title && <Title title='true'>{title}</Title>}
                      {data.map(({icon, title}, index) =>(
                        <IconWrapper key={index}>
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
