import React, {useState, useEffect} from 'react'
import styled, { keyframes } from "styled-components"
import {Row, Col} from 'reactstrap'

const ani = keyframes`
    0% {opacity: 0;}
    100% {opacity: 1;}
`

const Container = styled.div`
  width: 80%;
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
const Bar1 = styled(Bar)`
  background-color: #ddd;

  i{
    cursor: pointer;
  }
`
const Box1 = styled(Box)``

const Res = styled.div`
  border: 1px solid black;
  background-color: pink;
  height: 300px;
  animation: ${ani} 1s 0s;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  display: none;
`

const FAQ = () => {

  const [arrow, setArrow] = useState([]);

  const slide = (e) => {
    console.log(`slide ${e} 입니다.`);
    let arr = [...arrow];
    arr[e] = !arr[e];
    console.log('arr후: ', arr);
    setArrow(arr);
  }
  console.log('arrow: ', arrow);

  return (
    <Container>
      <Header>FAQ</Header>
      <Main>
        <Box1>자주하는 질문 1.</Box1>
        <Bar1><i className="fa-solid fa-angle-down" onClick={()=>slide(0)}></i></Bar1>
        <Res style={{display: arrow[0] ? "flex" : "none"}}>대답1</Res>

        <Box1>자주하는 질문 2.</Box1>
        <Bar1><i className="fa-solid fa-angle-down" onClick={()=>slide(1)}></i></Bar1>
        <Res style={{display: arrow[1] ? "flex" : "none"}}>대답2</Res>
        
        <Box1>자주하는 질문 3.</Box1>
        <Bar1><i className="fa-solid fa-angle-down" onClick={()=>slide(2)}></i></Bar1>
        <Res style={{display: arrow[2] ? "flex" : "none"}}>대답3</Res>
      </Main>

    </Container>
  )
}

export default FAQ