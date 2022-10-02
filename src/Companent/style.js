import styled from "styled-components";

export const Container = styled.div`
     width: 100%;
     height: 700px;
`
export const Boxs = styled.div`
     width: 910px;
     height: 700px;
     display: grid;
     grid-template-columns: auto auto;
     gap: 10px;
     margin-left: 50px;
`
export const Box1 = styled.div`
     border: 1px solid grey;
     width: 400px;
     height: 600px;
     margin-left: 30px;
     margin-top: 40px;
     display: grid;
     align-items: center;
     justify-content: center;
`

export const Box2 = styled.div`
     border: 1px solid grey;
     width: 400px;
     height: 600px;
     margin-top: 40px;
     display: grid;
     align-items: center;
     justify-content: center;
`
export const Title = styled.a`
     font-style: normal;
     margin-left: 50px;
     font-weight: 500;
     font-size: 20px;
     line-height: 16px;
     color: #3D3D3D;
     :hover{
        color: #46A358;
     }
`
export const P = styled.p`
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      color: #3D3D3D;
`

export const Div = styled.div`
      height: 450px;
      padding-left: 100px;
      align-items: center;
      margin-bottom: 90px;
`
export const Div1 = styled.div`
      margin-top: 20px;
      margin-right: 50px;
`
export const Button = styled.button`
      border: 1px solid grey;
      width: 295px;
      height: 45px;
      background: #46A358;
      border-radius: 5px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #FFFFFF;
`
export const P1 = styled.p`
      margin-left: 85px;
      font-weight: 400;
      font-size: 13px;
      color: #3D3D3D;
`
export const Input = styled.input`
     margin: 7px 0px;
     border-radius: 5px;
     border: 1px solid grey;
     width: 290px;
     height: 40px;
     ::placeholder {
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        text-align: start;
        color: #727272;
        padding-left: 20px;
     }
`
export const Input1 = styled.input`
     margin: 7px 0px;
     border-radius: 5px;
     border: 1px solid grey;
     width: 290px;
     height: 40px;
     ::placeholder {
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        text-align: center;
        color: #727272;
     }
`
export const P2 = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #46A358;
    margin-left: 170px;
`