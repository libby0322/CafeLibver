import React, { useRef } from 'react';
import Product from './Product';
import * as Styled from "./Style";
import Cup from './Cup';
import styled from "styled-components";
import { Link } from 'react-router-dom';


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


const ProductMain = () => {
  
 const scrollRef = useRef<HTMLElement>(<Cup/>);

 const onNewClick = () => {
   scrollRef.current?.scrollIntoView({ behavior: 'smooth'});
 };

  return (
    <div>
        <Product />
        <Styled.proMainBox>
        <Styled.mainText>
           <Styled.topText>상품</Styled.topText>
           <Styled.bText>CHK만의 색다른 매력이 담긴 새로운 상품들을 만나보세요!</Styled.bText>
          </Styled.mainText>
        <img src="image/Product/Main01.jpg" alt="proMainBox"/>
        <StyledLink to="/cup" ><button type="button" className='newProBtn' >더 많은 상품이 궁금하다면?</button></StyledLink>
        </Styled.proMainBox>
    <Styled.newProBox>
    <p className="newProduct" >이 달의 신제품</p>
    <ul className="contentBox" >
    <StyledLink to="/cup" ><img src="image/Mug/Mug_B.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    <StyledLink to="/acc" ><img src="image/Acc/Acc_Bag02.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    <StyledLink to="/acc" ><img src="image/Acc/Acc_Card01.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    <StyledLink to="/cup" ><img src="image/Mug/Mug_Classic.jpg" alt="contentBox" className="newProImg" /></StyledLink>
    </ul>

    </Styled.newProBox>

     </div>
        )

  };

export default ProductMain