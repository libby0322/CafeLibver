import React, {useState, useEffect} from 'react'
import styled, { keyframes } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import './app.css';
import {CSSTransition} from 'react-transition-group';

const BoxSlide1 = keyframes`
  0% {left: -1000px;}
  100% {left: 0px;}
`
const BoxSlide2 = keyframes`
  0% {right: -1000px;}
  100% {right: 0px;}
`
const opacity = keyframes`
  0% {opacity: 0;}
  100% {opacity: 1;}
`
const scale = keyframes`
  0% {transform: scale(1);}
  100% {transform: scale(1.2);}
`
const Container = styled.div`
  width: 80%;
  margin: auto;
`
const Header = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  font-size: 25px;
  padding-left: 30px;
  border-bottom: 1px solid black;
`
const Main = styled.div`
  height: 1000px;
`
const MainBox1 = styled.div`
  height: 500px;
`
const MainBox1Top = styled.div`
  height: 50%;
  padding: 20px;
  display:flex;
  justify-content: space-around;
  overflow: hidden;
`
const MainBox1Bottom = styled.div`
  height: 50%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
`
const SelectBox1 = styled.div`
  width: 300px;
  height: 200px;
  animation: ${BoxSlide1} 2s 0s;
  background-color: yellow;
  position: relative;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  &:hover{  
    transform: scale(1.2);
    transition: .5s;
  } 
`
const Step = styled.div`
  width: 100px;
  margin-top: 30px;
  font-size: 20px;
  border-bottom: 2px solid red;
  color: red;
`
const Content = styled.div`
  margin-top: 40px;
  font-size: 25px;
`
const SelectBox2 = styled.div`
  width: 300px;
  height: 200px;
  background-color: yellow;
  animation: ${BoxSlide2} 2s 0s;
  position: relative;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  &:hover{  
    transform: scale(1.2);
    transition: transform .5s; 
  } 
`
const MainBox2 = styled.div`
  width: 100%;
  height: 745px;
  border: 3px solid black;
  border-radius: 15px;
  overflow: hidden;
  background-color: black;
`
const MainBox2Top = styled.div`
  flex: 0 0 100%;
  height: 705px;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Box1 = styled.div`
  width: 150px;
  border: 1px solid black;
  height: 300px;
`
const SubBox1 = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 100px;
  transform: scale(1.2);
  transition: 2s;
`
const MainBox2Bottom = styled.div`
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  height: 40px;
  color: white;
  justify-content: center;
`
const MainBox3 = styled.div`
  height: 300px;
  background-color: skyblue;
  margin-top: 50px;
`
const TestBox = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 200px;
`
const TestBox2 = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 200px;
`
const A_main = () => {

const arr = [
    {id: 1, number: "Step 1", content: "빠르고 스마트한 주문"},
    {id: 2, number: "Step 2", content: "스탬프 적립"},
    {id: 3, number: "Step 3", content: "간단한 결제 서비스"},
    {id: 4, number: "Step 4", content: "다양한 쿠폰 발급"},
    {id: 5, number: "Step 5", content: "멤버십에 따른 혜택"},
    {id: 6, number: "Step 6", content: "선물하기"}
  ]

const arr2 = [
    {id: 1, content: "핸드폰화면1"},
    {id: 2, content: "핸드폰화면2"},
    {id: 3, content: "핸드폰화면3"},
    {id: 4, content: "핸드폰화면4"},
    {id: 5, content: "핸드폰화면5"},
    {id: 6, content: "핸드폰화면6"}
]

useEffect(() => {
  
})

  useEffect(() => {
    AOS.init();
  }, [])

  const scroll = (number) => {

    window.scroll({top:(0, 770), behavior: 'smooth'}) // 화면 바로 전환 'auto'
    setNumber(number);
  }
  const animation = () => {
    setTest(true);
  }
  const animation2 = () => {
    setTest('scale(1)');
  }

  let [number, setNumber] = useState(1);
  let [ani, setAni] = useState('');
  let [test, setTest] = useState(false);

  return (
    <Container>
      <Header>앱</Header>
      <Main>
        <MainBox1>
          <MainBox1Top>
            <SelectBox1 onClick={()=>scroll(1)}>
              <Step>Step 1</Step>
              <Content>빠르고 스마트한 주문</Content>
            </SelectBox1>
            <SelectBox1 onClick={()=>scroll(2)}>
            <Step>Step 2</Step>
              <Content>스탬프 적립</Content>
            </SelectBox1>
            <SelectBox2 onClick={()=>scroll(3)}>
            <Step>Step 3</Step>
              <Content>간단한 결제 서비스</Content>
            </SelectBox2>
          </MainBox1Top>
          <MainBox1Bottom>
            <SelectBox1 onClick={()=>scroll(4)}>
            <Step>Step 4</Step>
              <Content>다양한 쿠폰 발급</Content>
            </SelectBox1>
            <SelectBox2 onClick={()=>scroll(5)}>
            <Step>Step 5</Step>
              <Content>멤버십에 따른 혜택</Content>
            </SelectBox2>
            <SelectBox2 onClick={()=>scroll(6)}>
            <Step>Step 6</Step>
              <Content>선물하기</Content>
            </SelectBox2>
          </MainBox1Bottom>
      </MainBox1>

      <MainBox2>
        <MainBox2Top>
          <Box1 onClick={animation} data-aos="fade-up" data-aos-duration="500"></Box1>
          <Box1 onClick={animation2} data-aos="fade-up" data-aos-duration="1000"></Box1>
          <Box1 data-aos="fade-up" data-aos-duration="1500"></Box1>
          <Box1 data-aos="fade-up" data-aos-duration="2000"></Box1>
          <Box1 data-aos="fade-up" data-aos-duration="2500"></Box1>
          <Box1 data-aos="fade-up" data-aos-duration="3000"></Box1>
        </MainBox2Top>
        <MainBox2Bottom>
          <div><i className="fa-solid fa-bars" style={{color: "white"}}></i></div>
          <div style={{width: '15px', height: '15px', border: '3px solid white', borderRadius: '5px', margin: '0px 50px 2px'}}></div>
          <div><i className="fa-solid fa-angle-left" style={{color: "white"}}></i></div>
        </MainBox2Bottom>
      </MainBox2>
      <MainBox3>지금 다운로드 하시오</MainBox3>
      <CSSTransition in={test} timeout={300} classNames="wow">
      <TestBox></TestBox>
      </CSSTransition>
      <TestBox2></TestBox2>
      <button onClick={()=>setTest(true)}>Click to Enter</button>
      </Main>
    </Container>
  )
}

export default A_main