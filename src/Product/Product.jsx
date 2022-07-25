import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components";
import Cup from './Cup';
import P_Cart from './P_Cart';
import ProductMain from './ProductMain';

const StyledLink = styled(Link)`
  display: flex;
   width: 60%;
   padding: 0;
   font-size: 20px;
   span{
    display: flex;
   width: 60%;
   padding: 0;
   font-size: 20px;
   }
   p{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    margin-top:20px;
}
`
const Brrr = styled.span`
    display:block;
    font-size:15px;
    width:10px;
    height:15px;
    text-align:center;
    align-items: center;
    font-weight: bold;
    color: red;
    p{
    animation-duration:  0.5s;
    animation-name: brrr;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    @keyframes brrr {
  from {
    margin-left: 5%;
  }

  to {
    margin-left: -5%;
  }
}
}
`


const Product = ({ modal, setModal, subTop, setSubTop,subTop1, setSubTop1,subTop2, setSubTop2, cupClick, accClick, packClick, menuClick, main}) => {




  
  const test = (props) => {
    setModal(!modal);
  }

  const subTopOpen = () =>{
    setSubTop(true);
  }
  const subTopOpen1 = () =>{
    setSubTop1(true);
  }
  const subTopOpen2 = () =>{
    setSubTop2(true);
  }


  return (
    
    <> 
      <Styled.productList >
    <Styled.topListItem > 
      <span onMouseOver={subTopOpen}><i className="fa-solid fa-house" onClick={main}></i></span>
      <span onMouseOver={subTopOpen} onClick={cupClick} >Cup / Bottle</span>
      <span onMouseOver={subTopOpen1} onClick={accClick} >Acc</span>
      <span onMouseOver={subTopOpen2} onClick={packClick}>Tea Package</span>
      <span><i className="fa-solid fa-cart-shopping" onClick={test} style={{fontSize: '30px'}}></i>
      <Brrr><p className='brrr'>Click!</p></Brrr>
      </span>
       
       </Styled.topListItem>
</Styled.productList>
</>
  )
}

export default Product