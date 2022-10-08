import React, { Component } from 'react'
import { Btn, Container } from '../Body/style'
import Card from  './Card'

export default class Body extends Component {
  render() {
    const {data , onDelete} = this.props
    return (
        <Container>
          {data.length ? (
             data.map((value) => <Card key={value.id} onDelete={onDelete} value={value}/>)
          ) : (
              <h1>Not Found</h1>
            )}
        </Container>
    );
  }
}
