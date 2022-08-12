import React from 'react'

export const JwCart = () => {
  return (
    <>
     <div id="jwCart" style={{ display: props.display2 ? "flex" : "none" }}>
      <div className='h-cart'>
        <div className="h_box">
          <div className="h_box-top">
            <span>장바구니에 담기</span>
            <span className="h_xmark" onClick={xmark}><i class="fa-solid fa-xmark"></i></span>
          </div>
          <div className="h_box-in">

            <div className="h_pick">
              <List />
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
