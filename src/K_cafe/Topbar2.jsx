import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom';
import Subbar from './Subbar'

const Container = styled.div`
    width: 100%;
    height: 160px;
    background-color: white;
`
const Header = styled.div`
    border-bottom: 1px solid #ddd;
    height: 110px;
`
const Top = styled.div`
    height: 10px;
    background-color: black;
`
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
    padding-top: 10px;
`
const Nav = styled.div`
    background-color: white;
    height: 50px;
    display: flex;
`
const Nav_left = styled.div`
    flex: 0 0 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #ddd;

    div{
        height: 30px;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        font-family: 'GmarketSans-Bold';

        &:hover{
            border-bottom: 2px solid rgba(250, 100, 100);
        }
    }
`
const Nav_right = styled.div`
    flex: 0 0 30%;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    div{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        margin-right: 10px;
        border: 1px solid black;
        border-radius: 50%;
        cursor: pointer;
    }
`
const Topbar2 = () => {

    const [display, setDisplay] = useState(false);
  return (
    <Container>
        <Header>
            {/* <Top /> */}
            <Bottom><Link to="/"><img src={process.env.PUBLIC_URL +'/image/Logo/Logo.png'} width="300px"></img></Link></Bottom>
        </Header>
        <Nav>
            <Nav_left>
                <div><i className="fa-solid fa-bars-staggered" onClick={() => setDisplay(!display)}></i></div>
                <Link to="/menu"><div>메뉴</div></Link>
                <Link to= "/product"><div>상품</div></Link>
                <Link to="/membership/faq"><div>게시판</div></Link>
                <Link to="/login/"><div>마이페이지</div></Link>
            </Nav_left>
            <Nav_right>
                <div><i className="fa-brands fa-facebook-f"></i></div>
                <div><i className="fa-brands fa-instagram"></i></div>
                <div><i className="fa-brands fa-twitter"></i></div>
                <div><i className="fa-brands fa-youtube"></i></div>
                <div><i className="fa-solid fa-location-dot"></i></div>
            </Nav_right>
            <Subbar display={display} setDisplay={setDisplay}/>
        </Nav>
    </Container>
  )
}

export default Topbar2