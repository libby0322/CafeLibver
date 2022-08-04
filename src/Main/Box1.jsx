import React from 'react'
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import "aos/dist/aos.css"

const Container = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  margin: auto;
`
const Box1_left = styled.div`
  flex: 0 0 30%;
`
const Title = styled.div`
  border-bottom: 1px solid black;
  padding: 30px;
  font-size: 2rem;
`
const Content = styled.div`
  padding: 50px;
`
const Hash = styled.div`
  width: 100px;
  height: 50px;
  line-height: 50px;
  border: 1px solid black;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;

  &:hover{  
    background-color : rgba(250, 100, 100);
    color : rgba(250, 250, 100);
  } 
`
const Box1_right = styled.div`
  flex: 0 0 70%;
  display: flex;
  position: relative;
  background-image: url('image/K_image/board.jpg');
  background-size : 100% 700px;
`
const Content2 = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
  background-color: white;
  cursor: pointer;
  
  &:hover{  
    background-color: skyblue;
  } 
`
const Content2_box = styled.div`
  width: 180px;
  height: 280px;
  background-color: rgba(250, 250, 100);
  padding-top: 20px;
`

const Box1 = () => {
  return (
    <Container>
        <Box1_left>
          <Title>
            <h1>인기 검색어</h1>
            <p style={{fontSize: "18px", color: "gray", paddingLeft: "10px"}}>오늘은 ... 뭐 먹지 ..</p>
          </Title>
          <Content>
            <Hash>#연유라떼</Hash>
            <Hash style={{marginLeft: "20px"}}>#콜드브루</Hash>
            <Hash style={{width: "130px"}}>#부드러운 크림</Hash>
            <Hash style={{marginLeft: "30px", width: "120px"}}>#레몬 그라스</Hash>
            <Hash style={{marginLeft: "30px", width: "140px"}}>#블루베리 스무디</Hash>
            <Hash>#친환경</Hash>
            <Hash style={{marginLeft: "20px"}}>#홈카페</Hash>
            <Hash style={{width: "150px"}}>#시그니처 블렌드</Hash>
          </Content>
        </Box1_left>
        <Box1_right>
          <Content2 style={{right: "500px", top: "100px", transform: "rotate(-10deg)"}} data-aos="fade" data-aos-duration="2000">
            <Content2_box><img src="image/coffee/(hot-)연유.png" width="180px"></img></Content2_box>
          </Content2>
          <Content2 style={{right: "300px" , top: "130px", transform: "rotate(10deg)"}} data-aos="fade" data-aos-duration="2000">
          <Content2_box><img src="image/coffee/콜드브루.png" width="180px"></img></Content2_box>
          </Content2>
          <Content2 style={{right: "100px", top: "100px", transform: "rotate(-10deg)"}} data-aos="fade" data-aos-duration="2000">
          <Content2_box><img src="image/Non coffee/블루베리스무디.png" width="180px"></img></Content2_box>
          </Content2>
          <Content2 style={{right: "400px", top: "300px"}} data-aos="fade" data-aos-duration="3000">
          <Content2_box><img src="image/Non coffee/레몬에이드.png" width="180px"></img></Content2_box>
          </Content2>
          <Content2 style={{right: "150px", top: "300px", transform: "rotate(7deg)"}} data-aos="fade" data-aos-duration="3000">
          <Content2_box><img src="image/Non coffee/망고주스.png" width="180px"></img></Content2_box>
          </Content2>
        </Box1_right>
    </Container>
  )
}

export default Box1