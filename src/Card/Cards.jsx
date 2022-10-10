import React, {useState} from 'react';
import { Container } from './style';
import { data } from './data';

const  Cards = () => {
  const [state, setState] = useState(data);
  console.log(state.data)
  return (
    <Container>
            <Container.Wrapper>
                <Container.Input type="text" placeholder="Add an Itime......"/>
                <Container.Add>Add</Container.Add>
            </Container.Wrapper>
            <Container.Products>
            {
                  state.map((value) =>{
                    return(
                         <Container.Item key={value.id}>
                               <Container.Checkbox type="checkbox"/>
                               <Container.Title>{value.title}</Container.Title>
                               <Container.Box>
                                    <Container.Plus />
                                    <Container.Count>{value.quantitiy}</Container.Count>
                                    <Container.Minus />
                               </Container.Box>
                         </Container.Item>
                      );
                   })
                };
                <Container.Total>Total: 0</Container.Total>
            </Container.Products>
    </Container>
  );
};

export default Cards;
