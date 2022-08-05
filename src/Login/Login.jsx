import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    height: 800px;
`
const Box1 = styled.div`
    border: 2px solid black;
    margin: auto;
    width: 700px;
    height: 500px;
    margin-top: 150px;
`
const Box2 = styled.div`
    border: 1px solid black;
    padding: 30px;
    height: 300px;
`
const Id = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
`
const Password = styled(Id)``

const Result = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    cursor: pointer;
`
const SignUp = styled.div`
    height: 30px;
    
`

const Login = () => {

   
    const [maintain, setMaintain] = useState(); // 로그인 상태유지 색상

    const color1 = () => {
        setMaintain(!maintain);
    }
    const test = () => {
        console.log('test입니다.');
        var str = document.getElementById('id');
        console.log(str.value.length);
        if(str.value.length !== 0 ){ }
        
    }
  return (
    <Container>
        <Box1>
            <h2 style={{textAlign: "center"}}>로그인</h2>
            <Box2>
                <form name= 'loginform' action='/api/login' method='post'>
                <Id><div style={{width: "80px"}}>아이디: </div><input type="text" id="id" name="id" placeholder='아이디'></input></Id>
                <Password><div style={{width: "80px"}}>비밀번호: </div><input type="password" name="password" placeholder='비밀번호'></input></Password>
                <div style={{color: "gray", cursor: "pointer"}} onClick={color1}><i className="fa-solid fa-circle-check" style={{color: maintain ? "black" : "gray"}}></i>로그인 상태 유지</div>
                <Result onClick={test}><input type="submit" value="로그인" style={{backgroundColor: "yellow", width: "100%", height: "100%", cursor: "pointer"}}></input></Result>
                <SignUp><Link to={"/signup"}><button>회원가입</button></Link></SignUp>
                </form>
            </Box2>
        </Box1>
    </Container>
  )
}

export default Login