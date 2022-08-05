import React, { useState } from 'react'
import HList from './HList'
import './Hee.css'
const H_Pay = () => {
  const [totalPay, setTotalPay] = useState(0);
  return (
    <div className='H_Flex_Center'>
      <div className='H_Pay'>
        <div className='H_Product_Box'>
          <div className='H_Product_Poto'> 상 품 사 진 </div>
          <div className='H_Product_Title'> 상 품 이 름 </div>
          <div className='H_Product_Num'> 상 품 수 량 </div>
          <div className='H_Product_Price'> 상 품 가 격 </div>
          <div className='H_Product_Cancel'></div>
        </div>
        <HList totalPay={totalPay} setTotalPay={setTotalPay} />
        <div className='H_Product_Total'><h3>총 가격: {totalPay}원</h3></div>
      </div>
    </div>
  )
}

export default H_Pay