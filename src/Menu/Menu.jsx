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
  width: 200px;
  height: 100px;
  background-color : rgba(0,0,0,0.1);
`

const Menu = ({addList,setAddList,non,dessert}) => {

//하트 버튼
 const [likeArr, setLikeArr] = useState(Array.from({length: 14}, () => 296)); // likeArr 배열 선언 ( 배열에 들어있는 변수들의 초기값은 296 으로 )
  
 const plusLike = (i) => {
   let _likeArr = [...likeArr];    //[296, 296, 296, 296, 296, 296...]
   let element = document.getElementsByClassName('fa-heart');
   
   if(_likeArr[i] === 296){   // 배열에서 인덱스 i인 제품의 좋아요의 값이 296이니까 +1
     _likeArr[i] += 1;    
     setLikeArr(_likeArr);
     element[i].className = 'fa-solid fa-heart'; //클래스 이름 수정
 
   }else{                  // 배열에서 인덱스 i인 제품의 좋아요의 값이 297이니까 -1
     _likeArr[i] -= 1;
     setLikeArr(_likeArr);   
     element[i].className = 'fa-regular fa-heart'; //클래스 이름 수정
   }  
 }



 // cart 버튼 클릭 시 장바구니에 추가 + 알림멘트
   const add = (e) => {  
      let arr = [...addList];
      arr.push(e);
      setAddList(arr);

     alert('장바구니에 추가되었습니다!')
   }
 
   const coffee = [];
   for(let i=0;i<coffeeList.coffeeList.length;i++){
  
    
       coffee.push(
           <>
           <li className='b_flexList' key={coffeeList.coffeeList[i].idd}>
         
             <img src={coffeeList.coffeeList[i].url} alt={coffeeList.coffeeList[i].id} className="img" />
              <div className="clickMe">
               <i class="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
              <li className='b_icon'>
             <i class="fa-regular fa-heart" style={{color:"#fa6464", cursor:"pointer"}} ></i>
             <i class="fa-solid fa-cart-arrow-down" id={coffeeList.coffeeList[i].id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>add({id : coffeeList.coffeeList[i].id,title :coffeeList.coffeeList[i].title,price : coffeeList.coffeeList[i].price ,url : coffeeList.coffeeList[i].url})}></i>
             </li>
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
               <li className='b_flexList'  key={tea.Beverage[i].id}>
                 <img src={tea.Beverage[i].url} alt={tea.Beverage[i].id}  />
                 <div className="clickMe">
               <i class="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
                 <li className='b_icon'>
                 <i class="fa-regular fa-heart" style={{color:"#fa6464", cursor:"pointer"}}></i>
                 <i class="fa-solid fa-cart-arrow-down" key={tea.Beverage.id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>add({id : tea.Beverage.id,title :tea.Beverage[i].title,price : tea.Beverage[i].price ,url : tea.Beverage[i].url})}></i>
                 </li>
                 <p className='text-center'>{tea.Beverage[i].title}</p>
               </li>  
           </>
       )
   }
   // juice 음료 추가
   for(let i=0; i< juice.fruit.length;i++){
     nonCoffee.push(
         <>
             <li className='b_flexList' key={juice.fruit[i].idd}>
               <img src={juice.fruit[i].url} alt={juice.fruit[i].id}  />
               <div className="clickMe">
               <i class="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
               <li className='b_icon'>
                 <i class="fa-regular fa-heart" style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
               <i class="fa-solid fa-cart-arrow-down" id={juice.fruit.id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>add({id : juice.fruit.id ,title :juice.fruit[i].title,price : juice.fruit[i].price ,url : juice.fruit[i].url})}></i>
              </li>
               <p className='text-center'>{juice.fruit[i].title}</p>
             </li>  
         </>
     )
   }
// bread, cake, mini추가
const breadList = [];

for(let i=0; i< desert.desert.length;i++){
  breadList.push(
      <>
          <li className='b_flexList'   key={desert.desert[i].idd}>
            <img src={desert.desert[i].url} alt={desert.desert[i].id}  />
            <div className="clickMe">
               <i class="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
            <li className='b_icon'>
              <i class="fa-regular fa-heart"style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
            <i class="fa-solid fa-cart-arrow-down" id={desert.desert.id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>add({id : desert.desert.id ,title :desert.desert[i].title,price : desert.desert[i].price ,url : desert.desert[i].url})}></i>
           </li>
            <p className='text-center'>{desert.desert[i].title}</p>
          </li>  
 
      </>
  )
}
for(let i=0; i< bread.bread.length;i++){
  breadList.push(
      <>
          <li className='b_flexList' key={bread.bread[i].idd}>
            <img src={bread.bread[i].url} alt={bread.bread[i].id}  />
            <div className="clickMe">
               <i class="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
            <li className='b_icon'>
              <i class="fa-regular fa-heart"  style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
            <i class="fa-solid fa-cart-arrow-down" id={bread.bread.id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>add({id : bread.bread.id ,title :bread.bread[i].title,price : bread.bread[i].price ,url : bread.bread[i].url})}></i>
           </li>
            <p className='text-center'>{bread.bread[i].title}</p>
          </li>  
      </>
  )
}
for(let i=0; i< mini.mini.length;i++){
  breadList.push(
      <>
          <li className='b_flexList' key={mini.mini[i].idd}>
            <img src={mini.mini[i].url} alt={mini.mini[i].id}  />
            <div className="clickMe">
               <i class="fa-regular fa-hand-pointer">  ClickMe!</i>
              </div>
            <li className='b_icon'>
              <i class="fa-regular fa-heart"  style={{color:"#fa6464", cursor:"pointer"}}><span style={{color:"black",display:"inline-block", paddingLeft:"5px"}}></span></i>
            <i class="fa-solid fa-cart-arrow-down" id={mini.mini.id} style={{color:"skyblue", cursor:"pointer"}} onClick={()=>add({id :mini.mini.id ,title :mini.mini[i].title,price : mini.mini[i].price ,url : mini.mini[i].url})}></i>
           </li>
            <p className='text-center'>{mini.mini[i].title}</p>
          </li>  
      </>
  )
}
    
  return (
<>
<div className='b_imgbox'> 
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
<Show>
  <p>안녕하셍?</p>
</Show>
<GoTop/>
<Footer/>
</>
  )
}

export default Menu