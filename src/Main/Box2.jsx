import React from 'react'
import styled from "styled-components"
import Box3 from './Box3'
import {Row, Col} from 'reactstrap'

const Container = styled.div`
  width: 80%;
  margin: auto;
  height: 600px;

  @media screen and (max-width: 768px) {
    height: 1300px;    
}
`
const Box = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 100px;
  padding: 0px 50px;

  background-size : cover;
  background-position: center;
`
const Box1 = styled.div`
  width: 100%;
  height: 180px;
  border: 1px solid black;

  background-size : cover;
  background-position: center;
`
const Title = styled.div`
  height: 50px;
  min-width: 220px;
  margin-top: 50px;
  font-size: 30px;
  color: white;
`
const Content = styled.div`
  height: 30px;
  padding: 5px 10px;
  font-size: 15px;
  color: white;
  cursor: pointer;
`
const Details = styled(Content)`
  display: flex;
  justify-content: end;
  cursor: pointer;
  margin-top: 10px;
`


const Box2 = () => {
  return (
    <Container>
      <Row>
        <Col md="4" xs="12">
          <Box style={{backgroundImage: "url('https://libby0322.github.io/CafeLibver/image/K_image/coffee6.jpg')", paddingTop: "20px"}}>
            <Title><i className="fa-solid fa-bullhorn"></i>&nbsp;&nbsp;CHK 소식</Title>
            <Content></Content>
            <Content>22년 하반기 이벤트 안내</Content>
            <Content>애플리케이션 사전안내</Content>
            <Content>가맹점 개설 안내</Content>
            <Content>CHK 멤버쉽 약관 공지</Content>
            <Details>자세히보기</Details>
          </Box>
        </Col>
        <Col md="4" xs="12">
          <Box style={{backgroundImage: "url('https://libby0322.github.io/CafeLibver/image/K_image/coffee7.jpg')"}}></Box>
        </Col>
        <Col md="4" xs="12">
          <Box style={{padding: "0px"}}>
            <Box1 style={{backgroundImage: "url('https://libby0322.github.io/CafeLibver/image/K_image/coffee8.jpg')"}}></Box1>
            <div style={{height: "40px"}}></div>
            <Box1 style={{backgroundImage: "url('https://libby0322.github.io/CafeLibver/image/K_image/coffee10.jpg')"}}></Box1>
          </Box>
        </Col>
       </Row>
    </Container>
  )
}

export default Box2