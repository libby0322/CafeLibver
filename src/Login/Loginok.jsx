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

  const {loginid} = props;
  console.log('loginok에서 loginid: ', loginid);


  return (
    <Container>
      {loginid.name}
      <form action="/api/logout" method='get'>
      <input type="submit" value="로그아웃"></input>
      </form>
    </Container>
  )
}

export default Loginok