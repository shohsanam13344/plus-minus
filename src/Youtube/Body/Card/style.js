import styled from "styled-components";

export const Container = styled.div`
        flex-wrap: wrap; 
        width: 300px;
        height: 280px;
        margin-right: 20px;
        margin-bottom: 40px;
`

export const Video = styled.img`
        width: 100%;
        height: 200px;
`

export const Wrapper = styled.div`
        display: flex;
`

export const User = styled.img`
        width: 36px;
        height: 36px;
        border-radius: 50%;
        margin-right: 15px;
`

export const Title = styled.div`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: ${({desc}) => desc ? 'rgba(255,255,255,0.6)': '#fffff'};
`