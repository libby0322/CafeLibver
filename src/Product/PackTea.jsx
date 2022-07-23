import React, { useState, useRef } from 'react';
import PackTeaList  from './ProList.json';
import PackCoffeeList from './ProList.json';
import PackCapsuleList from './ProList.json';
import Product from './Product';
import * as Styled from "./Style";
import P_Cart from './P_Cart';

const Acc = (props) => {

  const [addList, setAddList] = useState({});
  const [test, setTest] = useState(1);
  let [modal, setModal] = useState(false);
  let [subList, setSubList] = useState(false);
  let [tt, setTt] = useState(true);
  let [subTop2, setSubTop2] = useState(false);
  const add = () => {
    setSubList(true);
    setTt(false);
  }
  const subTopClose2 = (props) =>{
    setSubTop2(false);
  }

  const PackTeaAdd = (r) => {
    const arr = [];
    setTest(test+1);
    for(let i=0; i<PackTeaList.PackTeaList.length; i++){
      if(PackTeaList.PackTeaList[i].id === r){
        arr.push(PackTeaList.PackTeaList[i]);
      }
    }
    setAddList(...arr);
  }
  const PackCoffeeAdd = (r) => {
    const arr = [];
    setTest(test+1);
    for(let i=0; i<PackCoffeeList.PackCoffeeList.length; i++){
      if(PackCoffeeList.PackCoffeeList[i].id === r){
        arr.push(PackCoffeeList.PackCoffeeList[i]);
      }
    }
    setAddList(...arr);
  }
  const PackCapsuleAdd = (r) => {
    const arr = [];
    setTest(test+1);
    for(let i=0; i<PackCapsuleList.PackCapsuleList.length; i++){
      if(PackCapsuleList.PackCapsuleList[i].id === r){
        arr.push(PackCapsuleList.PackCapsuleList[i]);
      }
    }
    setAddList(...arr);
  }




     let list = PackTeaList.PackTeaList.map((PackTeaList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=>PackTeaAdd(index+1)}> 
        <img src={PackTeaList.url} />
        <p className='text-center'>{PackTeaList.title}</p>
      </Styled.ListImgBox>
    );
  });
  let list2 = PackCoffeeList.PackCoffeeList.map((PackCoffeeList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=>PackCoffeeAdd(index+1)}> 
        <img src={PackCoffeeList.url} />
        <p className='text-center'>{PackCoffeeList.title}</p>
      </Styled.ListImgBox>
    );
  });
  let list3 = PackCapsuleList.PackCapsuleList.map((PackCapsuleList, index)=>{
    return (
      <Styled.ListImgBox key={index} onClick={()=> PackCapsuleAdd(index+1)}> 
        <img src={PackCapsuleList.url} />
        <p className='text-center'>{PackCapsuleList.title}</p>
      </Styled.ListImgBox>
    );
  });



  const OneRef = useRef();
  const TwoRef = useRef();
  const ThreeRef =useRef();
  const onOneClick = () => {
    OneRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  const onTwoClick = () => {
    TwoRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
  const onThreeClick = () => {
    ThreeRef.current?.scrollIntoView({ behavior: 'smooth'});
  };
return (
  <>
  <Product modal={modal} setModal={setModal}  subTop2={subTop2} setSubTop2={setSubTop2}/>
  <Styled.ProMenu2 style={{display: subTop2? "flex" : "none"}} onMouseLeave={subTopClose2}>
    <button type='button' className='proMenuBtn2' onClick={onOneClick}>티백</button>
    <button type='button' className='proMenuBtn2' onClick={onTwoClick}>스틱커피</button>
    <button type='button' className='proMenuBtn2' onClick={onThreeClick}>캡슐커피</button>
    </Styled.ProMenu2>
  <Styled.ListWrap onClick={add}>
   <div className='ListImg' ref={OneRef} >
        {list}
      </div> 
      <div className='ListImg' ref={TwoRef}>
      {list2}
      </div> 
      <div className='ListImg'ref={ThreeRef}>
      {list3}
      </div> 
      
        </Styled.ListWrap>
        <P_Cart mug={addList} modal={modal} subList={subList} setSubList={setSubList} tt={tt} setTt={setTt}/>
    </>
  )

}

export default Acc