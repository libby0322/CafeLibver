import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components"

const PayTop = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 30px;
    border-bottom: 3px solid #fa6464;
   h3{
    margin-left: 170px;
    font-weight: bold;
    font-size: 35px;
   }
`
const PayContainer = styled.div`
  border: 1px solid #ddd;
  width: 100%;
  height: 700px;
  h3{
  margin-top: 30px;
  margin-left: 110px;
  color: #222;
  font-weight: bold;
}
`
const PayListBox = styled.div`
width: 90%;
height: 1000px;
display: block;
justify-content: flex-start;
margin: 10px auto;
padding: 0;
background: #fff;
border: 3px solid #fa6464;
border-radius: 10px;
`
const ListBox = styled.div`
display: flex-start;
width: 80%;
height: 150px;
background: #fff;
border: 2px dashed #f5aaaa;
margin-left: 100px;
margin-top: 50px;
border-radius: 10px;
.subListBox{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
}
img{
  width: 90px;
  height: 70px;
}
.listPrice{
  margin: 0;
  padding-right: 20px;
  font-size: 15px;
  float: right;
}
.pmbtn{
  margin-left: 10px;
}
button{
  background: #fff;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
}
.del{
  display: flex;
  float: right;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  margin-right: 10px;
}
.del:hover{
  padding: 2px;
  background: #f5aaaa;
}
`
//이 위로는 스타일//






const P_Pay = (location) => {


  const [sum, setSum] = useState(0);
  const [addList, setAddList] = useState([]);
  const [number, setNumber] = useState(1);
  const [cost, setCost] = useState([]);
  const [costTest, setCostTest] = useState(Array.from((v, i) => i));
  const [wishTab, setWishTab] = useState(Array.from({length: 9}, () => 1));

  const info = useLocation().state; //카트 정보를 받아옴

  useEffect(()=>{
    console.log(info);
  }, [info]);
  
  console.log('info: ', info);


  const plus = (e, price) => {
    console.log(e);
    console.log(price);
    let arr = [...wishTab];
    arr[e] = arr[e] +1;
    cost[e] = cost[e] + price;
    setWishTab(arr);
    setSum(sum + price);
   
  }

  console.log('sum:', sum);
  const minus = (t, price) => {
    let arr = [...wishTab];
    arr[t] = arr[t] -1;
    setWishTab(arr);
    cost[t] = cost[t] - price;
    setSum(sum - price);
    
  }
    //버튼 클릭시 아이템 삭제
 
    console.log('wish:', wishTab);

    const remove = (r,price,index)=>{
      let arr = [...info];
      let arr2 = [...wishTab];
      arr2[r] = price * arr2[r]
      arr.splice(r,1, '');
      setAddList(arr);
      setSum(sum - arr2[r])
    
    }
 
    console.log('wish:',wishTab);

  
const PayList = () => {
  let arr = [];
  info.map((i, index)=>{
    console.log('map 실행');
    if(i !== ''){
   arr.push(
            <ListBox key={index}>
            <button className='del' onClick={()=>remove(index, i.Price)}  ><i className="fa-solid fa-xmark"/></button>
            {/* <span style={{display:"none"}}>{dd[i]}</span> */}
            <div className='subListBox'>
            <span className='listTitle'>{i.title}</span>
            <img src={i.url}/>
            </div>
            <span className='pmbtn'>
            <button onClick={()=>plus(index, i.Price)}><i className="fa-solid fa-plus"/></button>
            {wishTab[index]}
            <button onClick={()=>minus(index, i.Price)}><i className="fa-solid fa-minus"/></button>
            </span>
            <span className='listPrice'>금액 : {i.Price} 원</span>
            </ListBox>
    )
   }

   })
  
  return arr;

 }

  console.log('wish:', wishTab);


  
 


  return (
    <>
    <PayTop>
      <h3>구매하기</h3>
    </PayTop>
    <PayContainer>
    <h3>🎁 Wish List 🎁</h3>
    <PayListBox>
      <PayList />
    </PayListBox>
    </PayContainer>
    </>
  )
}

export default P_Pay