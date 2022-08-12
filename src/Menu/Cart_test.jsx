import React from 'react'
import $ from 'jquery'

const Cart_test = ({modal,setModal, addList}) => {
    
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
//   const remove = ()=>{
//     if($('.allcheck').is(':checked')){
//       $('tr#list').remove();
//       setSum(sum - sum);
//       $('.b_cimg').remove();
//       $('.b_textTotal').remove();
//     }
//   }
// addList   
    let arr = [];
    for(let i =0; i < addList.length; i++){
        
     arr.push(
        <>
        <tr key={addList[i].id}>
        <td><input type="checkbox" className='check' /></td>
        <td>
        <div className='b_cimgs'>
            <img src={addList[i].url} alt="001" style={{width:"150px"}} />
            <p key={addList[i].id}>{addList[i].title} </p>
  
        </div>
        </td>
        <td>
        <input type="button" value="-" />
         <span>1</span>
         <input type="button" value="+" />
        </td>
        <td>{addList[i].price}</td>
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
    </div>
    </>
  )
}

export default Cart_test