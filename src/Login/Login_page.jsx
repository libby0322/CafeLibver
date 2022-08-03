import React from 'react'
import Login from './Login'
import Loginok from './Loginok'
import cookies from 'react-cookies'

const Login_page = () => {

      const List = () => {

        switch(true){
          case cookies.load('key') !== undefined: return <Loginok />
          case localStorage.getItem('token') !== null: return <Loginok token={true}/>
          default: return <Login />
        }
      }

  return (
    <>
    <List />
        {/* <Loginok loginid={loginid} /> */}
    </>
  )
}

export default Login_page