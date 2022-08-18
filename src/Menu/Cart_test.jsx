import React,{useState} from 'react'
import $ from 'jquery'

const Cart_test = ({modal, addList}) => {
  const [add,setAdd] = useState(Array.from({length : 14},()=> 0));
  const [price,setPrice] = useState(Array.from({length : 58}));
  const [sum,setSum] = useState(0);


// 장바구니 닫기   
    const hide =()=>{
        $('.b_total').css('display','none');
        $('.b_cart').css('opacity','1');
      }  
// 체크박스 전체 선택
const check = () =>{
    let checked = $('.allcheck').is(':checked');
    if(checked){
    $('input:checkbox').prop('checked',true)
  }else $('input:checkbox').prop('checked',false)
  }
  // 전체 삭제 버튼
  const remove = ()=>{
      $('tr#list').remove();
      setSum(sum - sum);
      $('.b_cimg').remove();
      $('.b_textTotal').remove();
  }
 

const sumConfirm = ()=>{

  if(!window.confirm('주문하시는 매장은 '+ $("select[name=store] option:selected").text() +'이며, 총 결제 금액은 '+ sum +'원 맞으십니까?')){
    alert("결제 취소");
  }else if(!window.confirm == false){
    $('tr#list').remove();
    setSum(sum - sum);
    $('.total').remove()
    $('.b_cimg').remove();
    $('.b_textTotal').remove();
      alert("결제 완료");
  }
}




// 장바구니에 추가된 것
let arr = []; //prop으로 받아온 addList를 뿌려줄 빈 배열
let add_ = [...add]; // useState로 설정한 배열 복사
let _price = [...price]; //금액 복사

for(let i =0; i < addList.length; i++){
let cost = addList[i].price;

  



// 수량 및 가격 증가

const plus = ()=>{
  add_[i] +=1
  setAdd(add_);
  _price[i] = cost * add_[i];
  setPrice(_price); 
  setSum(sum + cost);

}  

// 수량 및 가격 빼기
const minus = ()=>{
  if(add[i] < 1){
    alert('최소 주문 수량은 1개 이상입니다!')
  }else{
      add_[i] -=1
  setAdd(add_);
  _price[i] = price[i] - cost;
  setPrice(_price);
  setSum(sum - cost);  
  }

}

     arr.push(
        <>
        <tr key={addList[i].id} id="list">
        <td><input type="checkbox" className='check' key={addList[i].id} /></td>
        <td>
        <div className='b_cimgs'>
            <img src={addList[i].url} alt="001" style={{width:"150px"}} />
            <p key={addList[i].id}>{addList[i].title} </p>
        </div>
        </td>
        <td>
        <input type="button" value="-" onClick={minus}/> 
         <span> {add[i]} </span>
         <input type="button" value="+" onClick={plus} />
        </td>
        <td>{price[i]}</td>
        </tr>


        </>
     )
     
    }

  return (
    <>
<div className='b_total overflow-scroll' style={{display : modal ? "block" : "none"}}>
<div className='d-flex justify-content-between align-item-center' >
        <h3 className='b_name m-3 '>🌹 님의 장바구니 🌹</h3>
        <p className='hide' onClick={hide}> X </p>
       </div>
        <table className='b_cartListBox'>
          <tr className='cartNames'>
            <td><input type="checkbox" className='allcheck' onClick={check}></input></td>
            <td>상품</td>
            <td>수량</td>
            <td>가격</td>
          </tr>
          {arr}
          </table>
          <form action="/" className='text-center pt-3'>
          <span className='text-center mx-5'>총 가격 : {sum}원</span>
            <select name="store" id="store" className='text-center mx-5' >
              <option value="default">-----매장을 선택하세요-----</option>  
              <option value="김포 장기점">김포 장기점</option>
              <option value="김포 걸포점">김포 걸포점</option>
              <option value="일신 대화점">일산 대화점</option>
              <option value="일산 정발산점">일산 정발산점</option>
              <option value="서울역점">서울역점</option>
              <option value="홍대입구역점">홍대입구역점</option>
            </select>  
          </form>  
  
          <div className='d-flex justify-content-around mt-5'>
          <span className='btn btn-warning'onClick={remove} >전체 삭제</span>  
         
            <span className='btn btn-warning' onClick={sumConfirm}>주문하기</span>
          </div> 
    </div>
    </>
  )
}

export default Cart_test