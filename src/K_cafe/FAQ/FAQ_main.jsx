import React from 'react'
import styled, { keyframes } from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Col} from 'reactstrap'
import { Link } from 'react-router-dom'



const activeAnim = keyframes`
  0% {opacity: 1;}
  100% {
    opacity: 0;
    visibility:hidden;}
`

const Container = styled.div`
  margin: auto;
`
const Header = styled.div`
  width: 80%;
  height: 120px;
  margin: auto;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-left: 30px;
`
const Main = styled.div`
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const Box1 = styled(Link)`
  flex: 0 0 50%;
  height: 600px;
  border: 1px solid black;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  // animation: ${props => (props.active ? activeAnim : "")} ${props => (props.active2 ? activeAnim : "")};
  // animation-duration: 1s; 
  // animation-fill-mode: forwards;
  // transition: background-color 1s cubic-bezier(0.31, -0.105, 0.43, 1.4);

  @media screen and (max-width: 768px) {
    height: 600px;
    font-size: 50px;
  }
  &:hover{  
    background-image: url('/image/K_image/coffee4.jpg');
  } 
`
const Box2 = styled(Box1)``

const FAQ_main = () => {
  
  return (
    <Container>
      <Row>
        <Header>FAQ/게시판</Header>
      </Row>
      <Main>
        <Box1 to={'/membership/faq/faq'}>FAQ</Box1>
        {/* <Box2 info={info} as="a" href={`/membership/faq/board/1`}>게시판</Box2> */}
        <Box2 to={`/membership/faq/board/1`}>게시판</Box2>
      </Main>
    </Container>
  )
}

export default FAQ_main