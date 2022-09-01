import React,{useState,useEffect} from 'react'
import $ from 'jquery'

const JwCart = ({modal,setModal,addList}) => {


const [number,setNumber] = useState(Array.from({ length: 14 }, () => 1));
const [price,setPrice] = useState(Array.from({ length: 14 }, () => 1));
const [total, setTotal] = useState(0);  //총합의 기본 값=0



  //결제페이지 넘어가기
  const goPayment =  () => {
    alert('죄송합니다. 지금은 서버폭주로 주문이 어렵습니다. 잠시 후 다시 시도 바랍니다^_^');
  }

  // 창 닫기
  const xmark = () => {
    if ($('#jw_Cart').is(":visible")) {
      $('#jw_Cart').hide();
    }
  }

  //모두 비우기
  const allDel = () => {
    $('.h_pick').empty();
    $('.j_total').text(0);
    return;
  }


// 장바구니에 추가 된 목록

let arr = [];  
let _number = [...number];  //수량 복사한거
let _price = [...price];   //가격복사한거
let addListPrice = []; // addList의 가격만 받아오기위해서 만드는 빈 배열

for(let i =0; i<addList.length;i++){
  
  let cost = addList[i].price;
  addListPrice[i] = addList[i].price * number[i];

  addListPrice.push(addList[i].price); //빈 배열에 누른 메뉴의 가격을 삽입


 // + 버튼 누르면 증가

 const onIncrease = () => {  

  _number[i] += 1;
  setNumber(_number);
  _price[i] = cost * _number[i];
  setPrice(_price); 
  setTotal(total + cost);
}


// - 버튼 누르면 감소

const onDecrease = () => {
  if (number[i] === 1) {   //수량이 1일때
    alert('최소 주문수량은 1개입니다. 주문을 완전 취소하시려면 "삭제"를 눌러주세욧!');
    return;
  }
  _number[i] -= 1;
  setNumber(_number);
  _price[i] = cost * _number[i];
  setPrice(_price); 
  setTotal(total - cost);
}


// 삭제버튼
const del = (proNum, title) => {   //proNum은 아이디, title은 제목
  if(window.confirm("장바구니에서 정말 삭제하시겠습니까?") == true){    //확인
        const test = number[i.idd];
        const proPri = $('.j_total').text();
        const totalVal= parseInt(proPri)-(proNum*test);  
        $('.j_total').text(totalVal);
        
         const delPro = document.getElementById(title);
         delPro.remove();
         setTotal(total - _price[i]);
      }else{   //취소
          return false;
      }
}

  arr.push(
    <>
    <ul className="h_pick-pd" id={addList[i].title}>
            <li><img src={addList[i].url} alt="product" /></li>
            <li className='proTitle'>{addList[i].title}</li>
            <li className='pprice'>{price[i]} \</li>  
            <li>수량: <button className="uuu" onClick={() => onIncrease()}>+</button> {number[i]} <button onClick={() => onDecrease()}>-</button></li>
            <li><button className="h_cancle" onClick={() => del(addList[i].id, addList[i].title)} > 삭 제 </button></li>
          </ul>
    </>
  )
}

// addList에 들어간 메뉴의 기본값 설정을 위한 useEffect
useEffect(()=>{
  setPrice(addListPrice); 
},[addList]);

useEffect(()=>{
  addListPrice.pop();
  let aa = 0;
  for (let i = 0; i < addListPrice.length; i++) {
    console.log("이거 왜 개", addListPrice);
    aa += addListPrice[i];
    console.log(aa);
    setTotal(aa);
  }
},[addList]);


  return (
    <>
     <div id="jw_Cart" style={{ display: modal ? "flex" : "none" }}>
      <div className='h-cart'>
        <div className="h_box">
          <div className="h_box-top">
            <span>장바구니에 담기</span>
            <span className="h_xmark" onClick={xmark}><i class="fa-solid fa-xmark"></i></span>
          </div>
          <div className="h_box-in">
            <div className="h_pick">
                {arr}
            </div>

          </div>
          <div className="h_box-footer">
            <p>총합 : <span className='j_total'>{total}</span> \</p>
            <button className="h_box-footer_bt" onClick={goPayment} style={{ backgroundColor: "#fa6464", marginRight: "1%" }}>바로 결제하기</button>
            <button className="h_box-footer_bt" onClick={xmark} style={{ backgroundColor: "rgba(250, 250, 100)" }}>계속 주문하기</button>
            <button className="h_box-footer_bt" onClick={allDel} style={{ backgroundColor: "rgba(250, 250, 100)" }}>모두 비우기</button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default JwCart