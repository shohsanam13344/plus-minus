import React, { Component } from 'react'
import { Container } from '../Body/style'
import Card from  './Card'
import { data } from '../../utils/mock'

export default class Body extends Component {
  render() {
    return (
        <Container>
          {data.map((value) =>(
            <Card 
              view={'1k million  /'}
              time={'10 minuts defoult'}
              name={'LOREM IPSUM'}
              user={
                'https://img1.goodfon.ru/original/1600x1200/a/47/sensual-foto-dama-pomada.jpg'
              } 
              video={
                'https://www.posterior.ru/products/detailed/34/[35x50]-charlie-and-the-chocolate-factory-01.jpg'
              } 
              />
            ))}
        </Container>
    );
  }
}
