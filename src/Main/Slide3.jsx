import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 700px;
    background-image: url('image/K_image/coffee5.jpg');
    opacity: 0.9;
    padding-top: 100px;
`
const Top = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 50px;

    @media screen and (max-width: 768px) {
        font-size: 48px;    
    }
`
const Middle = styled(Top)`
    height: 100px;
    color: red;

    div{
        width: 500px;
        height: 100px;
        border: 2px solid white;
    }
`
const Middle2 = styled(Top)`
    font-size: 30px;
`
const Bottom = styled(Top)`
    height: 120px;
    font-size: 30px;

    div{
        width: 130px;
        border: 2px solid white;
        margin: 20px;
        text-align: center;
        color: white;
        cursor: pointer;
        line-height: 60px;

        &:hover{
            background-color: white;
            color: black;
        }
    }
`
const Slide3 = () => {

  return (
    <Container>
        <Top>EVERY DAY IS CHK DAYS</Top>
        <Middle>
            <div></div>
        </Middle>
        <Middle2>CHK의 다양한 메뉴와 상품을 이용해보세요.</Middle2>
        <Bottom>
            <Link to="/coffee"><div>메뉴</div></Link>
            <Link to="/productMain"><div>상품</div></Link>
        </Bottom>

    </Container>
  )
}

export default Slide3