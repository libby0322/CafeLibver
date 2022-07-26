import React, {useState} from 'react'
import styled, {keyframes} from "styled-components"
import {Row, Col} from 'reactstrap'
import Info from './Info'

const ani1 = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0;}
`
const ani2 = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

const Container = styled.div`
    width: 100%;
    height: 800px;
    border: 1px solid black;
    background-image: url('image/K_image/computer.jpg');
    background-size: cover;
    position: relative;
`
const Title = styled.div`
    padding: 50px;
    font-size: 50px;
    font-weight: bold;
    color: white;
`
const Dev = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Dev_box = styled.div`
    width: 300px;
    height: 400px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    animation: ${props => props.active ? ani1 : ani2};
    animation-duration: 1s; 
    animation-fill-mode: forwards;

    @media screen and (max-width: 768px) {
        width: 250px;
        height: 250px;
        margin-bottom: 50px;
    }
`
const Profile = styled.div`
    
    
`
const Box3 = () => {
    
    const [active1, setActive1] = useState(false); // DevBox 애니메이션 on off
    const [active2, setActive2] = useState(false); // info display on off

    const slide = () => {
        setActive1(!active1);
        setActive2(!active2);
    }

    console.log('active1: ', active1);
    console.log('active2: ', active2);

  return (
   <Container>
    <Title>Cooperation!!</Title>
    <Dev>
        <Row>
        <Col md="3" xs="6">
            <Dev_box active={active1} onClick={slide}>
                <Profile>Developer : 권~태~훈~</Profile>
            </Dev_box>
        </Col>
        <Col md="3" xs="6">
            <Dev_box active={active1} onClick={slide}>
            <Profile>Developer : 최◆보◆은</Profile>
            </Dev_box>
            
        </Col>
        <Col md="3" xs="6">
            <Dev_box active={active1} onClick={slide}>
            <Profile>Developer : 홍★지★우</Profile>
            </Dev_box>
        </Col>
        <Col md="3" xs="6">
            <Dev_box active={active1} onClick={slide}>
            <Profile>Developer : 임♪리♪비</Profile>
            </Dev_box>
        </Col>
        </Row>
        <Info active1={active1} active2={active2} setActive1={setActive1} setActive2={setActive2}></Info>
    </Dev>
   </Container>
  )
}

export default Box3