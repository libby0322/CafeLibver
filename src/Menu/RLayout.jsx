import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './menu.css';
import Coffee from './Coffee'
import $ from 'jquery';
import { useEffect } from 'react';




const RLayout = ({display2, setDisplay2}) => {
  
  useEffect(()=> {
    <Coffee style={{display: "none"}} info={kwon}/>
  }, [])

  const [kwon, setKwon] = useState(3);


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