import React, {useState, useEffect} from 'react'
import styled, {keyframes} from "styled-components"
import {Row, Col} from 'reactstrap'

const ani2 = keyframes`
    0% {
        visibility: hidden;
        transform: translateX(2000px);
    }
    100%{
        visibility: visible;
        transform: translateX(-150px);
    }
`

const Container = styled.div`
    position: absolute;
    width: 80%;
    height: 600px;
    border: 1px solid black;
    background-color: white;
    top: 150px;
    right: 0;
    visibility: hidden;
   
    animation: ${props => props.active ? ani2 : ""};
    animation-fill-mode: forwards;
    animation-duration: 2s;
`
const Header = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: end;
`

const Info = (props) => {

    const [test, setTest] = useState(false);

    console.log('test: ', test);

    const slide = (e) => {
        // e.setActive2(!e.active2);
        setTest(!test);
        e.setActive1(!e.active1);
    }



  return (
    <Container  active={props.active1} test={test}>
        <Header><button onClick={()=>slide(props)}>닫기</button></Header>
    </Container>
  )
}

export default Info