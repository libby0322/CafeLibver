import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    background-color: rgba(250, 100, 100);
    width: 40%;
    height: 500px;
    position: absolute;
    z-index: 100;
`
const Header = styled.div`
    height: 30px;
    display: flex;
    justify-content: end;
`
const Main = styled.div`
    padding: 15px;
    height: 470px;
`
const Box1 = styled.div`
    display: flex;
    height: 100px;
    border: 1px solid white;
`
const Left = styled.div`
    flex: 20%;
    display: flex;
    align-items: center;
    justify-content: center;

    div{
        font-size: 20px;
        background-color: pink;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
`
const Right = styled(Left)`
    flex: 80%;
    font-size: 20px;
`
const Info = styled(Box1)`
    display: block;
    padding: 5px;
    
    div{
        color: white;
        font-size: 15px;
    }
`

const Rank = ({rank_display, setRank_display}) => {
  return (
    <Container style={{display: rank_display ? "block" : "none"}}>
        <Header><button onClick={()=>setRank_display(!rank_display)}>닫기</button></Header>
        <Main>
            <Box1>
                <Left><div>1</div></Left>
                <Right>-</Right>
            </Box1> 
            <Box1>
                <Left><div>2</div></Left>
                <Right>활동점수 200점 이상</Right>
            </Box1>
            <Box1>
                <Left><div>3</div></Left>
                <Right>활동점수 500점 이상</Right>
            </Box1>
            <Info>
                <div style={{marginBottom: "10px"}}>활동점수 기준</div>
                <div>- 게시글 20점</div>
                <div>- 댓글 5점</div>
            </Info>
        </Main>
    </Container>
  )
}

export default Rank