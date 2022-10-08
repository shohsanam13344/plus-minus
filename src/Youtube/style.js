import styled from "styled-components";
import {ReactComponent as Vector} from '../essets/icons/Vector.svg'
import {ReactComponent as search} from '../essets/icons/search.svg'
import {ReactComponent as camera} from '../essets/icons/camera.svg'
import {ReactComponent as menu} from '../essets/icons/menu.svg'
import {ReactComponent as bell} from '../essets/icons/bell.svg'


export const Container = styled.div`
        /* border: 1px solid white; */
        display: flex;
        flex-direction: ${({ flex })=>!flex && 'column'};
        background: #181818;
        color: #f1f1f1;
        width: 100%;
        height: 110vh; 
        padding: ${({ flex })=>!flex && '0 30px'}; 
`;

export const Wrapper = styled.div`
        /* border: 1px solid yellow; */
        height: 60px;
        background: #181818;
        display: flex;
        align-items: center;  
        justify-content: space-between;
        position: sticky;   
        top: 0;
`;

export const Catigory =styled.div`
       /* border: 1px solid yellow; */
       display: flex;
       flex: 2;
       align-items: center;
       justify-content: ${({end}) => end ? 'flex-end' : 'flex-start'};
`;

export const Icons = styled.div`
       
`;

Icons.Vector = styled(Vector)`
       width: 24px;
       height: 24px;
`;

Icons.logo = styled.img``;
Icons.search = styled(search)`
       width: 30px;
       height: 30px;
       color: #ffffff;
       /* padding: 10px 20px; */
       background-color: rgba(255, 255, 255, 0.2);
       border-radius: 0px 2px 2px 0px;
       cursor: pointer;
`;

Icons.camera = styled(camera)`
       width: 24px;
       height: 30px;
       margin-left: 10px;
       cursor: pointer;
`;
Icons.menu = styled(menu)`
       width: 24px;
       height: 24px;
       margin-left: 10px;
       cursor: pointer;
`;
Icons.bell = styled(bell)`
       width: 24px;
       height: 24px;
       margin-left: 10px;
       cursor: pointer;
`;

export const Input = styled.input`
       height: 32px;
       background: #000000;
       width: 100%;
       border: 1px solid rgba(255, 255, 255, 0.2);
       box-sizing: border-box;
       max-width: 500px;
       font-size: 15px;
       border-radius: 2px 0px 0px 2px;
       color: rgba(255, 255, 255, 0.7);
       padding-left: 10px;
       :focus{
        outline: none;
       }
`;

export const User = styled.img`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 20px;
        cursor: pointer;
`