import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components";
import Cup from './Cup';

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


const Product = ({ modal, setModal, subTop, setSubTop,subTop1, setSubTop1,subTop2, setSubTop2}) => {
  const test = () => {
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
      
      <Styled.productList>
    <Styled.topListItem> 
      <StyledLink to="/cup" onMouseOver={subTopOpen}  >Cup / Bottle</StyledLink>
      <StyledLink to="/acc" onMouseOver={subTopOpen1}>Acc</StyledLink>
      <StyledLink to="/packTea" onMouseOver={subTopOpen2}>Tea Package</StyledLink>
      <span><i className="fa-solid fa-cart-shopping" onClick={test} style={{fontSize: '30px'}}></i>
      <Brrr><p className='brrr'>Click!</p></Brrr>
      </span>

       </Styled.topListItem>
</Styled.productList>
</>
  )
}

export default Product