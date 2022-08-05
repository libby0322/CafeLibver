import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components"

const PayTop = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 30px;
    border-bottom: 3px solid #fa6464;
   h3{
    margin-left: 170px;
    font-weight: bold;
    font-size: 35px;
   }
`
const PayContainer = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  height: 700px;
  h3{
  margin-top: 30px;
  margin-left: 110px;
  color: #222;
  font-weight: bold;
}
`
const PayListBox = styled.div`
width: 90%;
height: 1000px;
display: flex;
justify-content: center;
margin: 10px auto;
padding: 0;
background: #fff;
border: 3px solid #fa6464;
border-radius: 10px;
`
const ListBox = styled.div`
display: block;
width: 250px;
height: 100px;
background: #fff;
border: 2px dashed #f5aaaa;
margin: 20px auto;
margin-top: 30px;
border-radius: 10px;
`
//이 위로는 스타일//






const P_Pay = (props) => {

  const info = useLocation().state; //카트 정보를 받아옴
 
  
  console.log('info: ', info);


  

  


  
 


  return (
    <>
    <PayTop>
      <h3>구매하기</h3>
    </PayTop>
    <PayContainer>
    <h3>🎁 Wish List 🎁</h3>
    <p>{info[0].title}</p>
    <PayListBox>
      
    </PayListBox>
    </PayContainer>
    </>
  )
}

export default P_Pay