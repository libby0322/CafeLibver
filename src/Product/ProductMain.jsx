import React, { useRef, useState } from 'react';
import Product from './Product';
import * as Styled from "./Style";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Cup from './Cup';
import Acc from './Acc';
import PackTea from './PackTea';
import Footer from '../Menu/Footer';


const StyledLink = styled(Link)`
  display: flex;
   width: 60%;
   padding: 0;
   font-size: 20px;
   img{
    padding: 10px;
    width: 350px;
    @media screen and (min-width: 1000px) {
    width: 280px;
}
   }
   img:hover{
    opacity: 0.7;
   }

`
  const PageWrap = styled.div`


`




const ProductMain = (menu, setMenu, menu1,setMenu1, main , cupClick) => {



// const subTopClose = (props) =>{
//   setSubTop(false);
// } 
// const subTopClose1 = (props) =>{
//   setSubTop1(false);
// } 
// const subTopClose2 = (props) =>{
//   setSubTop2(false);
// } 




//  const scrollRef = useRef<HTMLElement>(<Cup/>);

//  const onNewClick = () => {
//    scrollRef.current?.scrollIntoView({ behavior: 'smooth'});
//  };

const ProRef = useRef();
const refClick = () => {
  ProRef.current?.scrollIntoView({ behavior: 'smooth'});
};
  return (
    <>
        
        <Styled.proMainBox style={{display: menu? "block" : "none"}}>
        <Styled.mainText >
           <Styled.topText>상품</Styled.topText>
           <Styled.bText>CHK만의 색다른 매력이 담긴 새로운 상품들을 만나보세요!</Styled.bText>
          </Styled.mainText>
        <img src="image/Product/Main01.jpg" alt="proMainBox"/>
        <span ><button type="button" className='newProBtn' onClick={refClick}>찾아오시는 길 / 상품문의 안내</button></span>
        </Styled.proMainBox>
    <Styled.newProBox style={{display: menu? "block" : "none"}}>
    <p className="newProduct" >이 달의 신제품</p>
    <ul className="contentBox" >
    <StyledLink to="/cup" ><img src="image/Mug/Mug_B.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    <StyledLink to="/acc" ><img src="image/Acc/Acc_Bag02.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    <StyledLink to="/acc" ><img src="image/Acc/Acc_Card01.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    <StyledLink to="/cup" ><img src="image/Mug/Mug_Classic.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    </ul>

    </Styled.newProBox>
    <div ref={ProRef}>
    <Footer />
    </div>
     </>
        )

  };

export default ProductMain