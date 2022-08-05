import React, { useEffect } from 'react'
import HBox from './HBox';
import List from '../Menu/MenuList.json';

const HList = (props) => {
    let pay = [];
    let list = [];
    let j = 0;
    list.push(List.TeaList[0])
    list.push(List.coffeeList[0])
    list.push(List.desert[0])
    for(let i in list){
        pay[i] = <HBox 
            id = {i}
            title = {list[i].title}
            url = {list[i].url}
            price = {list[i].price}
            totalPay={props.totalPay} 
            setTotalPay={props.setTotalPay}
            desc = {list[i].desc}
        />   
        j += list[i].price;
    }
    useEffect(()=>{
        props.setTotalPay(j)
    },[])

  return pay
}

export default HList