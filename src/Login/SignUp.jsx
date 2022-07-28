import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DaumPostCode from 'react-daum-postcode';


const Container = styled.div`
    width: 80%;
    height: 600px;
    margin: auto;
    border: 1px solid black;
    margin-top: 50px;
`
const Header = styled.div`
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-bottom: 1px solid black;
`
const Main = styled.div`
    padding: 30px;
    height: 500px;
    position: relative;
`
const Id = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    
    div{
        width: 80px;
        line-height: 25px;
    }
`
const Password = styled(Id)`
    div{
        width: 80px;
        line-height: 28px;
    }
`
const Loginbutton = styled.div`
    height: 50px;
    background-color: yellow;

    input{
        width: 100%;
        height: 100%;
        background-color: yellow;
    }
`
const Overlap_box = styled(Id)``
const Overlap = styled.div`
    width: 80px;
    height: 30px;
    position: absolute;
    top: 30px;
    right: 270px;
`
const Daum = styled.div`
    width: 80px;
    height: 30px;
    position: absolute;
    top: 230px;
    right: 270px;
`

const SignUp = () => {

    useEffect(()=>{
        console.log('SignUp useEffect');
        async function a(){
          const response = await axios.get(`/api/login`);
          console.log('데이터받아왔니??');
          console.log(response.data);
          setMember_info(response.data);
        }
        a();
        }, []);

    const [member_info, setMember_info] = useState([]); // db member 정보
    const [id, setId] = useState(''); // 아이디 입력값 담기
    const [asociate, setAsociate] = useState(); // 중복 확인되었는지 알림창
    const [asociate_diplay, setAsociate_display] = useState('none');

    const overlap = () => {
        let count = 0;
        member_info.map(x=> { if(x.id === id){ count++; } })
        if(id.length === 0){
            alert('아이디를 확인해주세요.');
            setAsociate_display('none');
        }else{
        count === 0 ? setAsociate(true) : setAsociate(false);
        setAsociate_display('flex');
        }
    }

    const handleComplete = (data) => { // daum api
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        //fullAddress -> 전체 주소반환
    }
    
    
  return (
    <Container>
        <Header>회원가입</Header>
            <Main>
                <form action='/api/signup' method='post'>
                <Id><div>아이디: </div><input type="text" name="id" placeholder='아이디' onChange={(e) => setId(e.target.value)}></input></Id>
                <Overlap_box style={{display: asociate_diplay, color: asociate ? "green" : "red"}}><span>{asociate ? "사용가능한 아이디입니다." : "중복인 아이디 입니다."}</span></Overlap_box>
                <Password><div>비밀번호: </div><input type="password" name="password" placeholder='비밀번호'></input></Password>
                <Password><div>이름: </div><input type="text" name="name" placeholder='이름'></input></Password>
                <Password><div>나이: </div><input type="text" name="age" placeholder='나이'></input></Password>
                <Password><div>우편번호: </div><input style={{backgroundColor: '#ddd'}} type="text" name="address" readOnly></input></Password>
                <Password><div>주소: </div><input style={{backgroundColor: '#ddd'}} type="text" name="address" readOnly></input></Password>
                <Password><div>상세주소: </div><input type="text" name="" placeholder='상세주소'></input></Password>
                <Loginbutton><input type="submit" value="회원가입"></input></Loginbutton>
                </form>
                <Overlap>
                    <button onClick={overlap}>중복검사</button>
                    {/* <Modal>
                        <DaumPostCode onComplete={handleComplete} />
                    </Modal> */}
                </Overlap>
                <Daum>
                    <button onClick={handleComplete}>주소검색</button>
                </Daum>
            </Main>
    </Container>
  )
}

export default SignUp