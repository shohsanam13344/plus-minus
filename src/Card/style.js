import styled from "styled-components";
import { ReactComponent as plus } from "../assetis/icons/plus.svg";
import { ReactComponent as minus } from "../assetis/icons/minus.svg";


export const Container = styled.div`
      border: 1px solid red;
      width: 400px;
      height: 600px;
      border-radius: 3px;
      background-color: #EC8171;
      margin: auto;
      margin-top: 10px;
      padding: 5px;
      box-shadow: 8px 4px 9px 7px #ABC6D9;
`

Container.Wrapper = styled.div`
       width: 100%;
       position: relative;
`

Container.Input = styled.input`
       font-family: 'Roboto';
       width: 100%;
       height: 45px;
       outline: none;
       border: none;
       background-color: #FDCEC6;
       border-radius: 8px;
       padding-left: 10px;
       font-size: 20px;
       color: #EC8171;
`

Container.Add = styled.div`
       font-family: 'Roboto';
       position: absolute;
       top: 50%;
       right: 5px;
       transform: translateY(-50%);
       width: 70px;
       height: 95%;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: 20px;
       color:  #EC8171;
       box-sizing: border-box;
       /* background: blue; */

`

Container.Products = styled.div`
       width: 100%;
`

Container.Item = styled.div`
       width: 100%;
`
Container.Checkbox = styled.input`
       border: 1px solid red;
`

Container.Title = styled.h4`
       color: white;
       font-size: 24px;
       margin-left: 10px;
`

Container.Box = styled.div`
      border: 1px solid red;
`
Container.Plus = styled(plus)`
      border: 1px solid red;
`
Container.Minus = styled(minus)`
      border: 1px solid red;
`
