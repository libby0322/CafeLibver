import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components"
import Cup from './Cup';
import Data from './ProList.json';
import P_Pay from './P_Pay';





const CartList = styled.div`
width: 300px;
height: 1000px;
display: inline-block;
margin: 0;
padding: 0;
top: 300px;
right: 50px;
position: absolute;
background: #fff;
border: 3px solid #fa6464;
border-radius: 10px;
p{
  display: block;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
  font-size: large;
}
h3{
  text-align: center;
  margin-top: 30px;
  color: #fc5252;
  font-weight: bold;
}



`
const ListBox = styled.div`
display: block;
width: 250px;
height: 100px;
background: #fff;
border: 2px dashed #f5aaaa;
margin: 20px auto;
margin-top: 30px;
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
const Cost = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  display: flex;
  font-size: 30px;
`
const StyledLink = styled(Link)`
  span{
    display: flex;
  width: 100px;
  left: 60%;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: #fabfbf;
  font-weight: bold;
  color: #222;
  border-radius: 5px;    
  }
  span:hover{
    background: #f8dbdb;

  }
  .payT{
    margin-top: 10px;
    background: #fff;
    text-align: center;
    display: none;
    border: 1px dashed #fabfbf;
}
  :hover{
    .payT{
      display: block;
    }
  }
`


const P_Cart = (props) => {

  console.log(props.libby);


  //상품 클릭시 장바구니에 리스트업
  const {mug, setMug} = props;
  const {subList, setSubList} = props; 

  const [aa, setaa] = useState([]);
  const [bb, setbb] = useState([]);
  const [cc, setcc] = useState([]);
  const [dd, setdd] = useState([]);

  let arr = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];

  if(mug.modal === aa){

  }else{
    arr.push(mug.title);
    arr2.push(mug.url);
    arr3.push(mug.Price);
    arr4.push(mug.modal);
    aa.push(arr[0]);
    bb.push(arr2[0]);
    cc.push(arr3[0]);
    dd.push(arr4[1]);
    mug.modal = aa;
  }

  
  


  //장바구니 제품 수량 관련

  const [sum, setSum] = useState(0);
  const [addList, setAddList] = useState([]);
  const [number, setNumber] = useState(1);
  const [cost, setCost] = useState([]);
  const [costTest, setCostTest] = useState(Array.from((v, i) => i));
  const [wishTab, setWishTab] = useState(Array.from({length: 9}, () => 1));
 
 
  
  useEffect(()=> {
    console.log('useEffect');
    addList.push(mug);
    cost.push(mug.Price);
    setCostTest(cc);
    for(let i=0; i<cc.length; i++){
      if(cc[i] !== undefined){
        setSum(sum + cc[i]);
      }
    }
    console.log('use끝');
  }, [mug]);


  useEffect(()=>{
    console.log('useEffect2');
    addList.shift();
    cost.shift();
  }, [])

  const plus = (e, price) => {
    console.log(e);
    console.log(price);
    let arr = [...wishTab];
    arr[e] = arr[e] +1;
    cost[e] = cost[e] + price;
    setWishTab(arr);
    setSum(sum + price);
   
  }

  const minus = (t, price) => {
    let arr = [...wishTab];
    arr[t] = arr[t] -1;
    setWishTab(arr);
    cost[t] = cost[t] - price;
    setSum(sum - price);
    
  }
    //버튼 클릭시 아이템 삭제
 

    const ll = cost.map(item => item.index).reduce((prev, curr) => prev + curr, 0);
      console.log('ll',ll)
    const remove = (r,price,index)=>{
      let arr = [...addList];
      arr.splice(r,1, '');
      cost.splice(r,1);
     
      console.log('cost', cost);
      setAddList(arr);
      setSum(cost);
    
      // setSum(sum - costTest[i]);
      // // test2[r] = test2[r]-aa[i];
      // setTest(aa.splice(aa[i], i));
      // setTest(bb.splice(bb[i], i));
      // aa[i].filter(remove);
      // bb[i].filter(remove);
      // console.log('del addList: ', addList );    
      // console.log('del i: ', i);
    }
 

  console.log('addList: ', addList);
  console.log('sum: ', sum);
  console.log('cost: ', cost);
  console.log('wish: ', wishTab);
  console.log('dd: ', dd);





 const List1 = () => {
  let arr = [];
  addList.map((i, index)=>{
    console.log('map 실행');
    if(i !== ''){
   arr.push(
            <ListBox style={{display: props.subList? "block" : "none"}} key={index}>
            <button className='del' onClick={()=>remove(index, i.Price)}  ><i className="fa-solid fa-xmark"/></button>
            <span style={{display:"none"}}>{dd[i]}</span>
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

 const k = ()=>{
  console.log('k');
  props.setLibby(2);
 }
  

   
 
  
    




  return (
    <>
  <CartList style={{display: props.modal? "inline-block" : "none"}}>
    <button onClick={k}>button</button>
    <h3>🎁 Wish List 🎁</h3>
  <p style={{display: props.subList? "none" : "flex"}}>선택한 상품이 없습니다. <br/> 상품을 클릭해 담아보세요😊</p>
    <List1 />
    <Cost>
     Total: {sum} 원
    </Cost>
    <StyledLink to="/ppay" state={addList} ><span>구매하기</span>
    <div className='payT'>결제페이지로 이동할게요😊</div> 
    </StyledLink> 
  </CartList>
  
 
 
 
    </>
  )
}

export default P_Cart