import React from 'react'
import styled, {keyframes} from "styled-components"

const ani2 = keyframes`
    0% {
        visibility: hidden;
        transform: translateX(2000px);
    }
    100%{
        visibility: visible;
        transform: translateX(-150px);
    }
`
const Container = styled.div`
    position: absolute;
    width: 80%;
    height: 600px;
    border: 1px solid black;
    background-color: black;
    top: 150px;
    right: 0;
    visibility: hidden;
    color: white;
   
    animation: ${props => props.active ? ani2 : ""};
    animation-fill-mode: forwards;
    animation-duration: 2s;
`
const Header = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: end;
`
const Main = styled.div`
    display: flex;
    height: 570px;
`
const Left = styled.div`
    flex: 0 0 40%;
    border: 1px solid black;
    
`
const Right = styled.div`
    flex: 0 0 60%;
    border: 1px solid black;
    padding: 20px;
`
const Left_Top = styled.div`
    border: 1px solid black;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 200px;
    color: white;
`
const Left_Bottom = styled.div`
    height: 50px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`
const Title = styled.div`
    height: 50px;
    color: white;
    font-size: 30px;
`
const Content = styled.div`
    height: 100px;
    
    div{
        color: white;
        padding-bottom: 5px;
    }
`
const Title2 = styled(Title)``
const Content2 = styled(Content)``

const Lim = ({active1, setActive1, arr}) => {
  return (
    <Container active={active1} style={{display: arr[3]}}>
        <Header><button onClick={()=>setActive1(!active1)}>닫기</button></Header>
        <Main>
            <Left>
                <Left_Top>
                    <i className="fa-solid fa-user-large"></i>
                </Left_Top>
                <Left_Bottom>Developer: 임리비</Left_Bottom>
            </Left>
            <Right>
                <Title>SKILLS</Title>
                <Content>
                    <div>HTML, CSS, Javascript, React, React-Strap, Git, GitHub, Mui, Styled-Component </div>
                    <div>Node, MySQL, AWS, Linux</div>
                </Content>
                <Title2>POSITION</Title2>
                <Content2>
                    <div>ㅎㅎ</div>
                </Content2>
            </Right>
        </Main>
    </Container>
  )
}

export default Lim