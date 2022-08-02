import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  border: 3px solid black;
  width: 1000px;
  height: 300px;
  margin-top: 150px;

`

const Loginok = (props) => {

  const logout = () => {
    console.log('logout');
    if(props.token !== true){
      window.location.href=`/api/logout`;
    }else {
      localStorage.removeItem('token');
      window.location.href='/';
    }
  }
  // window.location.href=`/api/logout?kakao=${2}`;

  return (
    <Container>
      <button onClick={logout}>로그아웃</button>
    </Container>
  )
}

export default Loginok