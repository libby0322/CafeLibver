import React from 'react'
import $ from 'jquery'

const JwCart = ({modal,setModal,addList}) => {
  //결제페이지 넘어가기
  const goPayment =  () => {
    alert('죄송합니다. 지금은 서버폭주로 주문이 어렵습니다. 잠시 후 다시 시도 바랍니다^_^');
  }

  // 창 닫기
  const xmark = () => {
    if ($('#jwCart').is(":visible")) {
      $('#jwCart').hide();
    }
  }

  //모두 비우기
  const allDel = () => {
    $('.h_pick').empty();
    $('.j_total').text(0);
    return;
  }



  return (
    <>
     <div id="jwCart" style={{ display: modal ? "flex" : "none" }}>
      <div className='h-cart'>
        <div className="h_box">
          <div className="h_box-top">
            <span>장바구니에 담기</span>
            <span className="h_xmark" onClick={xmark}><i class="fa-solid fa-xmark"></i></span>
          </div>
          <div className="h_box-in">

            <div className="h_pick">
            
            </div>

          </div>
          <div className="h_box-footer">
            <p>총합 : <span className='j_total'></span> \</p>
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