import React from 'react'
import styled from "styled-components"

const Foot = styled.div`
margin:0;
padding:0;
box-sizing: border-box;
background-color: rgba(250, 250, 100);
width: 100%;
height: 400px;
position: relative;
transform: translatY(-100%);
`
const In = styled.div`
width: 50%;
height: 400px;
margin: 0 auto;
text-align:center;
padding-top: 30px;
img{
    width: 500px;
    padding-bottom: 30px;
}
span{ 
    font-size: 150px;
    color: white;
    padding-top:-100px;
}
.fa-minus{
    transform:rotate(90deg);
    color: #fa6464;
}
select{
    width: 290px;
    height: 30px;
    border: 2px solid #fa6464;
    border-radius: 4px;
    margin-right: 5px;
}
button{
    width: 50px;
    height: 30px;
    border:none;
    border-radius: 4px;
    background-color: #fa6464;
    color: white;
    margin-left: 5px;
}
button:hover{
    color: rgba(250, 250, 100);
}
p:last-child{
    margin-top: 20px;
}
`
// const Select = styled.div`


// `

const Footer = () => {

  return (
    <>
        <Foot>
            <In>
                <img src={process.env.PUBLIC_URL +"/image/Logo/Logo.png" }alt="로고"></img>
                <p>회원약관 <i className="fa-solid fa-minus"></i> 개인정보처리방침 <i className="fa-solid fa-minus"></i> 회원안내 <i className="fa-solid fa-minus"></i> 채용안내 <i className="fa-solid fa-minus"></i> 광고/임대문의 <i className="fa-solid fa-minus"></i> 기업정보</p>
                <p>경기도 김포시 김포한강로 CHK타워 10층 <i className="fa-solid fa-minus"></i> 고객센터 1544-1234</p>
                <p>임원진 CHK(주) <i className="fa-solid fa-minus"></i> 사업자등록번호 123-45-67890 <i className="fa-solid fa-minus"></i> 개인정보 보호 최고 책임자 CHK(주)</p>
             


                <div>
                    <select>
                        <option value="A">======= 계열사 바로 가기 =======</option>
                        <option value="B">CHK 시네마</option>
                        <option value="B">CHK 전자</option>
                        <option value="C">CHK 식품</option>
                        <option value="D">CHK 생명</option>
                        <option value="F">CHK 뷰티</option>
                    </select>  
                    <button type="submit">Go!</button>
                </div>
                   <p>copyright &#169; Cafe HK all right reserved.</p>
            </In>
            
        </Foot>
    </>
  )
}

export default Footer