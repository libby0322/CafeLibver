import React, {useState} from 'react'
import axios from 'axios'
import qs from 'qs'


// https://dev-seolleung2.netlify.app/Final%20Project/FinalProject-KakaoLogin/
const Auth2 = () => {

    const REST_API_KEY ="1ab930298baa3406dee898231822f512";
    const REDIRECT_URI = "	http://localhost:3000";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const REACT_APP_KAKAO_CLIENT_SECRET = "S20zCpXbh8zpkAq1eg6OTBKVlC7ubEoP";

    const code = new URL(window.location.href).searchParams.get("code");

    console.log('code: ', code);
    const [info, setInfo] = useState([]);

    async function a(){
        const response = await axios.get(`/api/oauth/kakao/callback?code=${code}`);
        console.log(response.data.rows);
      }

    async function b(){
        const response = await axios({
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
              grant_type: 'authorization_code',
              client_id: REST_API_KEY,
              client_secret: REACT_APP_KAKAO_CLIENT_SECRET,
              redirectUri: REDIRECT_URI,
              code: code
            })
          })
        setInfo(response);
      }
      a();
      b();
    
   
  return (
    <div>Auth2</div>
  )
}

export default Auth2