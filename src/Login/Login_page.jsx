import React, {useState, useEffect }from 'react'
import Login from './Login'
import Loginok from './Loginok'
import axios from 'axios'
import cookies from 'react-cookies'

const Login_page = () => {

    const [loginid, setLoginid] = useState([]);

    useEffect(()=>{
      async function a(){
        const response = await axios.get('/api/login')
        setLoginid(response.data.rows);
        // console.log('aaa: ', cookies.load('loginId'));
      }
      a()
      }, [])
      
      for(let i=0; i<loginid.length; i++){
        if(loginid[i].id === cookies.load('key')){
          setLoginid(loginid[i]);
        }
      }
      console.log('key: ', loginid);

      const List = () => {
        if(cookies.load('key') === undefined){return <Login />}
          else return <Loginok loginid={loginid} />
      }

     
  return (
    <>
    <List />
        {/* <Loginok loginid={loginid} /> */}
    </>
  )
}

export default Login_page