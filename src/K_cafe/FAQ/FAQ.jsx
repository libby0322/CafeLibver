import React from 'react'
import styled, { keyframes } from "styled-components"
import {Row, Col} from 'reactstrap'

const ani = keyframes`
    0% {transform: translateY(-300px);}
    100% {transform: translateY(0px);}
`

const Container = styled.div`
  width: 80%;
  border: 1px solid black;
  height: 1300px;
  margin: auto;
`
const Header = styled.div`
  border: 1px solid black;
  height: 50px;
  padding: 15px;
`
const Main = styled.div`
  height: 1150px;
`
const Box = styled.div`
  border: 1px solid black;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Bar = styled.div`
  border: 1px solid black;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: grey;
`
const Bar1 = styled(Bar)``
const Box1 = styled(Box)``

const Res = styled.div`
  background-color: pink;
  height: 300px;
  animation: ${ani} 1s 1s;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  display: none;
`

const FAQ = () => {

  return (
    <Container>
      <Header>FAQ</Header>
      <Main>
        <Box1>자주하는 질문 1.</Box1>
        <Bar1><i className="fa-solid fa-angle-down"></i></Bar1>
        <Res></Res>
        <Box1>자주하는 질문 2.</Box1>
        <Bar1><i className="fa-solid fa-angle-down"></i></Bar1>
        <Box1>자주하는 질문 3.</Box1>
        <Bar1><i className="fa-solid fa-angle-down"></i></Bar1>
      </Main>

    </Container>
  )
}

export default FAQ