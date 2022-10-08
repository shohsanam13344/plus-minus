import styled from "styled-components";


export const Container = styled.div`
       /* border: 1px solid white; */
       /* display: flex; */
       height: 100vh;
       width: 240px;
       background: #18181818;
       color: white;
       overflow-y: scroll;
`
export const Wrapper = styled.div`
       border-bottom: 1px solid #4D4D4D;
       margin: 30px 0px;
`
export const Title = styled.div`
        display: flex;
        align-items: center;
        font-family: 'Roboto';
        font-style: normal;
        font-size: 14px;
        line-height: 30px;
        height: 40px;
        margin-left: 24px;
        color: ${({title}) =>  (title ? 'rgba(255,255,255,0.6)' : '#fffff')};
`;

export const IconWrapper = styled.div`
        display: flex;
        align-items: center;

`
export const Icon = styled.img`
       width: 24px;
       height: 24px;
       cursor: pointer;
`




