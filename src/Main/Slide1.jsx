import React, {useEffect} from 'react'
import styled, {keyframes} from "styled-components"
import {Row, Col} from 'reactstrap'
import AOS from "aos";
import "aos/dist/aos.css"

const opacity = keyframes`
  0% {transform: scale(1);}
  100% {transform: scale(1.2);}
`

const Container = styled.div`
  height: 700px;
  background-image: url('image/K_image/coffee1.jpg');
  background-size : 100% 700px;
`
const Box1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  padding-top: 100px;
`
const Box2 = styled.div`
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Option = styled.div`
  width: 250px;
  height: 300px;
  padding: 20px;
`
const Top = styled.div`
  height: 100px;
  font-size: 80px;
  text-align: center;
  cursor: pointer;
`
const Bottom = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
`

const Slide1 = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <Container>
        <Box1>
          <h1 style={{fontFamily: "GmarketSans-Bold"}}>CHK BENEFIT</h1>
        </Box1>
      <Box2>
      <Row>
        <Col md="3" xs="6" data-aos="fade-up" data-aos-duration="500">
            <Option>
                <Top><i class="fa-solid fa-child-reaching"></i></Top>
                <Bottom>MemberShip</Bottom>
              </Option>
        </Col>
        <Col md="3" xs="6" data-aos="fade-up" data-aos-duration="1000">
            <Option>
              <Top><i class="fa-solid fa-tablet-screen-button"></i></Top>
              <Bottom>App</Bottom>
            </Option>
        </Col>
        <Col md="3" xs="6" data-aos="fade-up" data-aos-duration="1500">
            <Option>
              <Top><i class="fa-solid fa-bookmark"></i></Top>
              <Bottom>FAQ</Bottom>
            </Option>
        </Col>
        <Col md="3" xs="6" data-aos="fade-up" data-aos-duration="2000">
            <Option>
              <Top><i class="fa-solid fa-chalkboard-user"></i></Top>
              <Bottom>Board</Bottom>
            </Option>
        </Col>
      </Row>
      </Box2>
    </Container>
  )
}

export default Slide1