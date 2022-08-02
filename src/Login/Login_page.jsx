import React, {useState, useEffect }from 'react'
import Login from './Login'
import Loginok from './Loginok'
import axios from 'axios'
import cookies from 'react-cookies'

const Login_page = () => {

    const [login_info, setLogin_info] = useState([]);
    const [login_key, setLogin_key] = useState([]);

    useEffect(()=>{
      async function a(){
        const response = await axios.get('/api/login')
        setLogin_info(response.data.rows);
        // console.log('aaa: ', cookies.load('loginId'));
      }
      a()
      }, [])
    

      // console.log('key: ', cookies.load('key'));

      const List = () => {

        // console.log('localStorage: ', localStorage.getItem('token'));

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