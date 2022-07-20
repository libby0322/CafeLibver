import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./Style";
import Cart from './P_Cart';
import List from './ProList.json';
import styled from "styled-components";
import { useState } from 'react';

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
`



const Product = (props) => {
  let [modal, setModal] = useState(false);



  return (
    <div> 
      
      <Styled.productList>
    <Styled.topListItem> 
      <StyledLink to="/cup" >Cup / Bottle</StyledLink>
      <StyledLink to="/acc" >Acc</StyledLink>
      <StyledLink to="/packTea">Tea Package</StyledLink>
      <span onClick={()=>{setModal(!modal)}}><i className="fa-solid fa-cart-shopping" style={{fontSize: '30px'}}></i>
      <Cart modal={modal} />
      </span>
       </Styled.topListItem>
</Styled.productList>
</div>
  )
}

export default Product