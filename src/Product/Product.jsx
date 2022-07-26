import React,{ useState }  from 'react';
import { Link } from 'react-router-dom';
import * as Styled from "./Style";
import styled from "styled-components";
import P_Cart from './P_Cart';
import ProductMain from './ProductMain';
import Cup from './Cup';
import Acc from './Acc';
import PackTea from './PackTea';
import Footer from '../Menu/Footer';

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
const PageWrap = styled.div`


`


const Product = () => {

  
let [menu, setMenu] = useState(true);
let [menu1, setMenu1] = useState(true);
let [menu2, setMenu2] = useState(false);
let [menuCup, setMenuCup] = useState(false);
let [menuAcc, setMenuAcc] = useState(false);
let [menuPack, setMenuPack] = useState(false);
let [subTop, setSubTop] = useState(false);
let [subTop1, setSubTop1] = useState(false);
let [subTop2, setSubTop2] = useState(false);
let [modal, setModal] = useState(false);
const [addList, setAddList] = useState([]);

console.log('mainmodal: ' , modal);
console.log('mainadd: ' , addList);


const main = (props) => {
  setMenu(true);
  setMenu1(true);
  setMenuCup(false);
  setMenuAcc(false);
  setMenuPack(false);
}

const cupClick = (props) => {
  setMenu(false);
  setMenu1(false);
  setMenuCup(true);
  setMenuAcc(false);
  setMenuPack(false);
  
}
const accClick = (props) => {
  setMenu(false);
  setMenuCup(false);
  setMenuAcc(true);
  setMenuPack(false);
  setMenu1(false);
}
const packClick = (props) => {
  setMenu(false);
  setMenuCup(false);
  setMenuAcc(false);
  setMenuPack(true);
  setMenu1(false);
}



  
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
      <Styled.productList >
    <Styled.topListItem > 
      <span ><i className="fa-solid fa-house" onClick={main}></i></span>
      <span onMouseOver={subTopOpen} onClick={cupClick} >Cup / Bottle</span>
      <span onMouseOver={subTopOpen1} onClick={accClick} >Acc</span>
      <span onMouseOver={subTopOpen2} onClick={packClick}>Tea Package</span>
      <span><i className="fa-solid fa-cart-shopping" onClick={test} style={{fontSize: '30px'}}></i>
      <Brrr><p className='brrr'>Click!</p></Brrr>
      </span>
       </Styled.topListItem>
    </Styled.productList>
    
      <PageWrap>
      <div className='111' style={{display: menuCup? "block" : "none"}}>
        <Cup  subTop={subTop} setSubTop={setSubTop}  addList={addList} setAddList={setAddList}  />
        </div>
        <div className='222' style={{display: menuAcc? "block" : "none"}}>
        <Acc subTop={subTop1} setSubTop={setSubTop1} addList={addList} setAddList={setAddList} />
        </div>
        <div className='333' style={{display: menuPack? "block" : "none"}}>
        <PackTea subTop={subTop2} setSubTop={setSubTop2} addList={addList} setAddList={setAddList} />
        </div>
        <div className='444' style={{display: menu? "block" : "none"}}>
        <ProductMain menu={menu} setMenu={setMenu}  menu1={menu1} setMenu1={setMenu1} cupClick={cupClick} />
        </div>
        
        </PageWrap>
        <P_Cart modal={modal} addList={addList}/>
  
</>
  )
}

export default Product