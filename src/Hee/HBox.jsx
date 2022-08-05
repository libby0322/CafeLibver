import React, { useState } from 'react'

const HBox = (props) => {
    let total;
    const [count, setCount] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

    
    const counting = (a, b)=>{
        if(a === true){
            if(count[b] < 10){
                count[b]++
                total = props.totalPay + props.price;
                props.setTotalPay(total)
            } 
        }else{
            if(count[b] > 1){
                count[b]--
                total = props.totalPay - props.price;
                props.setTotalPay(total)
            } 
        }
        setCount([...count])
    }

    let price = []
    price[props.id] = props.price * count[props.id];
    
    const del = ()=>{
        props.setTotalPay(props.totalPay - price[props.id]);
        document.getElementById(props.id).remove();
    }

  return (
    <div className='H_Busket_Box' id = {props.id}>
        <div className='H_Product_Poto'><img src={props.url} alt="" /></div>
        <div className='H_Product_Title'> 
            <div>{props.title}</div>
            <div>{props.desc}</div>
        </div>
        <div className='H_Product_Num'> 
            <button onClick={()=>counting(false, props.id)}>-</button> 
            <span id={props.id}>{count[props.id]}</span> 
            <button onClick={()=>counting(true, props.id)}>+</button>
        </div>
        <div className='H_Product_Price'>개당: {props.price}원 / 총: {price[props.id]}원 </div>
        <div className='H_Product_Cancel'><span onClick={del}> 삭제 </span></div>
    </div>
  )
}

export default HBox