import React,{useState} from 'react'
import coffeeList from './MenuList.json';
import tea from './MenuList.json'
import juice from './MenuList.json';
import bread from './MenuList.json';
import desert from './MenuList.json';
import mini from './MenuList.json';
import Footer from './Footer';
import GoTop from './GoTop';
import $ from 'jquery'
import styled from 'styled-components';


const Show = styled.div`
  width: 300px;
  height: 150px;
  background-color : #ffd8d89e;
  position: fixed;
  z-index : 1;
  left : 700px;
  top: 200px;
  display : flex;
  justify-content: center;
  align-items:center;

`

const Menu = ({addList,setAddList,non,dessert,Coffee}) => {


 // cart 버튼 클릭 시 장바구니에 추가 + 알림멘트
   const add = (e) => {  
      let arr = [...addList];
      arr.push(e);
      setAddList(arr);

     if(e){
      setTimeout($('.popup').fadeIn(2000,function(){
        $('.popup').fadeOut(2000);
      }),1000);
     }
   }
 
   const coffee = [];
   for(let i=0;i<coffeeList.coffeeList.length;i++){
  
    
       coffee.push(
           <>
           <li className='b_flexList' key={coffeeList.coffeeList[i].idd} onClick={()=>add({id : coffeeList.coffeeList[i].id,title :coffeeList.coffeeList[i].title,price : coffeeList.coffeeList[i].price ,url : coffeeList.coffeeList[i].url})}>
         
             <img src={coffeeList.coffeeList[i].url} alt={coffeeList.coffeeList[i].id} className="img" />
              <div className="clickMe">
               <i className="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
         
             <p className='text-center'>{coffeeList.coffeeList[i].title}</p>
           </li>  
         <div className='b_descBox'>
             <ul className='b_desc' >
               <li>{coffeeList.coffeeList[i].title}</li>
               <li className="w_li">{coffeeList.coffeeList[i].desc}</li>
               <li className="w_li2">매장 상황에 따라 판매하지 않을 수도 있습니다.</li>
             </ul>
         </div>
        </>

       )
   }
   // non coffee 음료 추가
   const nonCoffee = [];
   for(let i=0; i< tea.Beverage.length;i++){
     nonCoffee.push(
           <>
               <li className='b_flexList'  key={tea.Beverage[i].id} onClick={()=>add({id : tea.Beverage.id,title :tea.Beverage[i].title,price : tea.Beverage[i].price ,url : tea.Beverage[i].url})} >
                 <img src={tea.Beverage[i].url} alt={tea.Beverage[i].id}  />
                 <div className="clickMe">
               <i className="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
                 <p className='text-center'>{tea.Beverage[i].title}</p>
               </li>  
           </>
       )
   }
   // juice 음료 추가
   for(let i=0; i< juice.fruit.length;i++){
     nonCoffee.push(
         <>
             <li className='b_flexList' key={juice.fruit[i].idd}  onClick={()=>add({id : juice.fruit.id ,title :juice.fruit[i].title,price : juice.fruit[i].price ,url : juice.fruit[i].url})}> 
               <img src={juice.fruit[i].url} alt={juice.fruit[i].id}  />
               <div className="clickMe">
               <i className="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
               <p classNameName='text-center'>{juice.fruit[i].title}</p>
             </li>  
         </>
     )
   }
// bread, cake, mini추가
const breadList = [];

for(let i=0; i< desert.desert.length;i++){
  breadList.push(
      <>
          <li className='b_flexList'   key={desert.desert[i].idd} onClick={()=>add({id : desert.desert.id ,title :desert.desert[i].title,price : desert.desert[i].price ,url : desert.desert[i].url})}>
            <img src={desert.desert[i].url} alt={desert.desert[i].id}  />
            <div className="clickMe">
               <i className="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>

            <p className='text-center'>{desert.desert[i].title}</p>
          </li>  
 
      </>
  )
}
for(let i=0; i< bread.bread.length;i++){
  breadList.push(
      <>
          <li className='b_flexList' key={bread.bread[i].idd}  onClick={()=>add({id : bread.bread.id ,title :bread.bread[i].title,price : bread.bread[i].price ,url : bread.bread[i].url})}> 
            <img src={bread.bread[i].url} alt={bread.bread[i].id}  />
            <div className="clickMe">
               <i className="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
            <p className='text-center'>{bread.bread[i].title}</p>
          </li>  
      </>
  )
}
for(let i=0; i< mini.mini.length;i++){
  breadList.push(
      <>
          <li className='b_flexList' key={mini.mini[i].idd} onClick={()=>add({id :mini.mini.id ,title :mini.mini[i].title,price : mini.mini[i].price ,url : mini.mini[i].url})}>
            <img src={mini.mini[i].url} alt={mini.mini[i].id}  />
            <div className="clickMe">
               <i className="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
            <p className='text-center'>{mini.mini[i].title}</p>
          </li>  
      </>
  )
}
    
  return (
<>
<div className='b_imgbox' ref={Coffee}> 
        <img src="image/banner_coffee.jpg" className="banner-img"alt="banner_coffee" />
        <span className="banner_coffee_text">CHK Cafe만의 특별한 로스팅으로<br/><br/> 신선한 커피를 즐겨보세요.</span>
</div>
<div className='b_container'>
        <ul className='b_flex mt-5'>
                {coffee}
        </ul> 
</div>
{/* non coffee */}
<div className='b_imgbox' ref={non}> 
    <img src="image/tea.png" alt="001" />
    <span className="banner_tea_text">Non Coffee 음료도 CHK Cafe에서!</span>
</div>
<div className="b_container">
    <ul className='b_flex mt-5'>
            {nonCoffee}
    </ul> 
</div>
{/* bread */}
<div className='b_imgbox' ref={dessert} > 
    <img src="image/dessetImg.png" alt="001" />
    <span className='banner_dessert_text'>엄선된 최고의 재료만을 사용해서 만든 <br></br><br></br>CHK만의 케이크를 드셔보세요!</span>
</div>
<div className='b_container'>
<ul className='b_flex mt-5'>
        {breadList}
    </ul> 
</div>
<Show className='popup' style={{display:"none"}}>
  <p>고객님! 장바구니에 추가되었습니다!!</p>
</Show>
<GoTop/>
<Footer/>
</>
  )
}

export default Menu