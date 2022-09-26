import React from 'react'
import styled, {keyframes} from "styled-components"
import {Row, Col} from 'reactstrap'
import "aos/dist/aos.css"

const Container = styled.div`
    background: linear-gradient(40deg, rgba(250, 250, 100) 50%, rgba(250, 100, 100) 50%);
    height: 700px;
    padding: 50px;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 1000px;
    }
`
const Title = styled.div`
    position: absolute;
    right: 300px;
    width: 530px;
    height: 180px;
    text-align: center;
    font-size: 55px;
    line-height: 150px;
    color: orange;
    font-family: 'OKDDUNG';

    @media screen and (max-width: 768px) {
        left: 50px; 
    }
`
const Box1 = styled.div`
    width: 450px;
    height: 450px;
    position: absolute;
    left: 200px;

    @media screen and (max-width: 768px) {
        left: 0;
        top: 100px;
    }
`
const Box2 = styled.div`
    width: 450px;
    height: 450px;
    bottom: 50px;
    right: 200px;
    position: absolute;

    @media screen and (max-width: 768px) {
        right: 0;
    }

`
const ImageBox = styled.div`
`
const Subtitle = styled.div`
    font-size: 30px;
    font-family: 'CookieRunOTF-Bold';

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    span{
        font-family: 'CookieRunOTF-Bold';
    }
`

const slide2 = () => {
  return (
   <Container>
        <Title>ㅁ Summer Taste</Title>
    <Row>
        <Col md="12">
            <Box1>
                <ImageBox data-aos="fade-right" data-aos-duration="2000"><img src={process.env.PUBLIC_URL + "/image/desert/치즈.png"} width="550px" style={{cursor: "pointer"}}></img></ImageBox>
                <Subtitle data-aos="fade-left" data-aos-duration="2000" >치즈 <span style={{color: "red"}}>"조각"</span> 케이크 6200원</Subtitle>
            </Box1>
        </Col>
    </Row>
    <Row>
        <Col md="12">
            <Box2>
            <ImageBox data-aos="fade-left" data-aos-duration="2000"><img src={process.env.PUBLIC_URL +"/image/desert/딸기치즈라운드.png"} style={{cursor: "pointer"}}></img></ImageBox>
            <Subtitle data-aos="fade-right" data-aos-duration="2000"><span style={{color: "red"}}>"딸기"</span> 생크림 홀 케이크 39000원</Subtitle>
            </Box2>
        </Col>
    </Row>
   </Container>
  )
}

export default slide2