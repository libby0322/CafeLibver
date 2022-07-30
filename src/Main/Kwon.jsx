import React, {useState, useEffect} from 'react'
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
    border: 1px solid white;
`
const Right = styled.div`
    flex: 0 0 60%;
    border: 1px solid black;
    padding: 20px;
`
const Left_Top = styled.div`
    border: 1px solid white;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 300px;
        height: 300px;
        border-radius: 50%;
    }
`
const Left_Bottom = styled.div`
    height: 50px;
    border: 1px solid white;
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
const Title2 = styled(Title)`
`
const Content2 = styled(Content)`
`

const Kwon = ({active1, setActive1, arr}) => {
    
    const [info, setInfo] = useState([]);

    const {Kakao} = window;

    const code = new URL(window.location.href).searchParams.get("code");

    try {
        if (Kakao) {
            Kakao.init('6cc73febe66d6d7f80acd90ecd7d4d85');
        };
    } catch(e) {}; // 한번만 실행되야해서 그리고 밑에 코드에 kakao.init 필요해서 try catch문 사용

    useEffect(()=> {

    
    Kakao.Auth.login({
        scope: 'profile_nickname, profile_image', // 동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
        success: function(response) {
            console.log('response: ', response) // 로그인 성공하면 받아오는 데이터
            Kakao.API.request({ // 사용자 정보 가져오기 
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    console.log('kakao_account: ', kakao_account);
                    const nickname = kakao_account.profile.nickname;
                    const profile = kakao_account.profile.profile_image_url;
                    console.log(nickname);
                    console.log(profile);
                    let member = [nickname, profile];
                    console.log('member: ', member);
                    setInfo(member);
                }
            });
            // window.location.href='/ex/kakao_login.html' //리다이렉트 되는 코드
        },
        fail: function(error) {
            console.log(error);
        }
    });
}, [])

  return (
    <Container active={active1} style={{display: arr[0]}}>
        <Header><button onClick={()=>setActive1(!active1)}>닫기</button></Header>
        <Main>
            <Left>
                <Left_Top>
                    <img src={info[1]}></img>
                    {/* <i className="fa-solid fa-user-large"></i> */}
                </Left_Top>
                <Left_Bottom>Developer: {info[0]}</Left_Bottom>
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

export default Kwon