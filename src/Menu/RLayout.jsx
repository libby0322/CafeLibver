import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './menu.css';
import $ from 'jquery';




const RLayout = ({display2, setDisplay2}) => {

  console.log(display2);
  const test = () => {
    setDisplay2(!display2);
  }
  
  return (
   <>
   <ul className='b_mNav b_Nflex '>
    <li><Link to = "/coffee">Coffee</Link></li>
    <li><Link to = "/noncoffee" >Non Coffee</Link></li>
    <li><Link to = "/desert" >Dessert</Link></li>
    {/* <li className='b-cart'><Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li> */}
    <li className='h-cart'><i class="fa-solid fa-cart-arrow-down " onClick={test}></i></li>
   </ul>
 
   </>
  )
}

export default RLayout