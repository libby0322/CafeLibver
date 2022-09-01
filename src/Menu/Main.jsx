import React,{useState,useRef} from 'react'
import CartTest from './Cart_test';
import Menu from './Menu';
import JwCart from './JwCart';


const Main = () => {
  
    // 해당 pointer로 이동
    const coffee = useRef();
    const non = useRef();
    const dessert = useRef();

    const coffeeClick = ()=>{
      coffee.current?.scrollIntoView({ behavior: 'smooth'});
    }

    const nonClick = () =>{
      non.current?.scrollIntoView({ behavior: 'smooth'});
    }
    const dessertClick = ()=>{
      dessert.current?.scrollIntoView({ behavior: 'smooth'});
    }
// cart 모달
      const [modal, setModal] = useState(false);
      const [jw,setJw] = useState(false);
// cart에 전달
      const [addList, setAddList] = useState([]);
// 보은 장바구니 모달
    const modal_test = () =>{
      setModal(!modal)
    }
// 지우 장바구니 모달
    const modal_ =()=>{
     setJw(!jw);
    }


  return (
<>
<div className='b_nav'>
<ul className='b_mNav b_Nflex'>
  <li className='nav' onClick={coffeeClick}>Coffee</li>
  <li className='nav' onClick={nonClick}>Non coffee</li>
  <li className='nav' onClick={dessertClick}>Bread</li>
  <li className='nav'><i className="fa-solid fa-basket-shopping" onClick={modal_test}></i> </li>
  <li className='nav'><i className="fa-solid fa-cart-shopping" onClick={modal_}>지우</i> </li>
</ul>
</div>
<Menu addList={addList} setAddList={setAddList} non={non} dessert={dessert} Coffee={coffee}/>
<CartTest modal={modal} setModal={setModal} addList={addList}   />
<JwCart modal={jw} setModal={setJw} addList={addList} />

</>
  )
}

export default Main