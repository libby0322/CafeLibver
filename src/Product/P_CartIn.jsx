// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import MugList from './ProList.json'
// import TumbList from './ProList.json';
// import GlaList from './ProList.json';
// // import Product from './Product';
// import P_Cart from './P_Cart';
// import * as Styled from "./Style";
// import styled from "styled-components";

// //상단 탑바 디자인//

// const StyledLink = styled(Link)`
//   display: flex;
//    width: 60%;
//    padding: 0;
//    font-size: 20px;
//    span{
//     display: flex;
//    width: 60%;
//    padding: 0;
//    font-size: 20px;
//    }
//    p{
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content:center;
//     margin-top:20px;
// }
// `
// const Brrr = styled.span`
//     display:block;
//     font-size:15px;
//     width:10px;
//     height:15px;
//     text-align:center;
//     align-items: center;
//     font-weight: bold;
//     color: red;
//     p{
//     animation-duration:  0.5s;
//     animation-name: brrr;
//     animation-iteration-count: infinite;
//     animation-direction: alternate;
//     @keyframes brrr {
//   from {
//     margin-left: 5%;
//   }

//   to {
//     margin-left: -5%;
//   }
// }
// }
// `

// //상단 탑바 디자인 끝 //



// const Cup = (props) => {

    
      

//   const [addList, setAddList] = useState({});
//   const [test, setTest] = useState(1);
//   let [modal, setModal] = useState(false);
//   let [subList, setSubList] = useState(false);
//   let [tt, setTt] = useState(true);
//   let [subTop, setSubTop] = useState(false);
//   let [subTop1, setSubTop1] = useState(false);
//   let [subTop2, setSubTop2] = useState(false);

//   let [libby, setLibby] = useState(1);

//   const add = () => {
//     setSubList(true);
//     setTt(false);
//   }
//   const subTopClose = (props) =>{
//     setSubTop(false);
//   }
 
//   //탑바//

//     const test1 = () => {
//       setModal(!modal);
//     }
  
//     const subTopOpen = () =>{
//       setSubTop(true);
//     }
//     const subTopOpen1 = () =>{
//       setSubTop1(true);
//     }
//     const subTopOpen2 = () =>{
//       setSubTop2(true);
//     }
  



  

//   const mugAdd = (r) => {
//     const arr = [];
//     setTest(test+1);
//     for(let i=0; i<MugList.MugList.length; i++){
//       if(MugList.MugList[i].id === r){
//         arr.push(MugList.MugList[i]);
//       }
//     }
//     setAddList(...arr);
    
//   }
//   console.log('cupaddList: ', addList);

//   const tumbAdd = (r) => {
//     const arr = [];
//     setTest(test+1);
//     for(let i=0; i<TumbList.TumbList.length; i++){
//       if(TumbList.TumbList[i].id === r){
//         arr.push(TumbList.TumbList[i]);
//       }
//     }
//     setAddList(...arr);
//   }

//   const glaAdd = (r) => {
//     const arr = [];
//     setTest(test+1);
//     for(let i=0; i<GlaList.GlaList.length; i++){
//       if(GlaList.GlaList[i].id === r){
//         arr.push(GlaList.GlaList[i]);
//       }
//     }
//     setAddList(...arr);
//   }




//   let list = MugList.MugList.map((MugList, index)=>{
//     return (
//       <Styled.ListImgBox key={index} onClick={()=>mugAdd(index+1)}>
//         <img src={MugList.url} />
//         <p className='text-center'>{MugList.title}</p>
     
       
//       </Styled.ListImgBox>
//     );
//   });
//   let list2 = TumbList.TumbList.map(( TumbList, index)=>{

//     return (
//       <Styled.ListImgBox key={index} onClick={()=>tumbAdd(index+1)}>
//         <img src={ TumbList.url}  />
//         <p className='text-center'>{ TumbList.title}</p>

//       </Styled.ListImgBox>
//     );
//   });
//   let list3 = GlaList.GlaList.map(( GlaList, index)=>{

//     return (
//       <Styled.ListImgBox key={index} onClick={()=>glaAdd(index+1)}>
//         <img src={ GlaList.url} />
//         <p className='text-center'>{ GlaList.title}</p>

//       </Styled.ListImgBox>
//     );
//   });


//     const OneRef = useRef();
//     const TwoRef = useRef();
//     const ThreeRef =useRef();
//     const onOneClick = () => {
//       OneRef.current?.scrollIntoView({ behavior: 'smooth'});
//     };
//     const onTwoClick = () => {
//       TwoRef.current?.scrollIntoView({ behavior: 'smooth'});
//     };
//     const onThreeClick = () => {
//       ThreeRef.current?.scrollIntoView({ behavior: 'smooth'});
//     };
//   return (
//     <>
//     {/* <Product modal={modal} setModal={setModal} subTop={subTop} setSubTop={setSubTop} /> */}
//     {/* 탑바 */}
          
//     <Styled.productList>
//     <Styled.topListItem> 
//       <StyledLink to="/cup" onMouseOver={subTopOpen}  >Cup / Bottle</StyledLink>
//       <StyledLink to="/acc" onMouseOver={subTopOpen1}>Acc</StyledLink>
//       <StyledLink to="/packTea" onMouseOver={subTopOpen2}>Tea Package</StyledLink>
//       <span><i className="fa-solid fa-cart-shopping" onClick={test1} style={{fontSize: '30px'}}></i>
//       <Brrr><p className='brrr'>Click!</p></Brrr>
//       </span>

//        </Styled.topListItem>
//       </Styled.productList>
//  {/* 탑바 */}

//     <P_Cart mug={addList} setMug={setAddList} modal={modal} subList={subList} setSubList={setSubList} tt={tt} setTt={setTt} />
//     <Styled.ProMenu style={{display: subTop? "flex" : "none"}} onMouseLeave={subTopClose}>
//       <button type='button' className='proMenuBtn' onClick={onOneClick}>머그</button>
//       <button type='button' className='proMenuBtn' onClick={onTwoClick}>텀블러</button>
//       <button type='button' className='proMenuBtn' onClick={onThreeClick}>글라스</button>
//       </Styled.ProMenu>
      
//     <Styled.ListWrap onClick={add}>
//      <div className='ListImg' ref={OneRef} >
//           {list}
//         </div> 
//         <div className='ListImg' ref={TwoRef}>
//         {list2}
//         </div> 
//         <div className='ListImg'ref={ThreeRef}>
//         {list3}
//         </div> 
//         </Styled.ListWrap>
     

        
       
//     </>
//   )

// }
// export default Cup