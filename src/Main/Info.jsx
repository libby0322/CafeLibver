import React, {useState, useEffect} from 'react'
import Kwon from './Kwon'
import Choi from './Choi'
import Hong from './Hong'
import Lim from './Lim'

const Info = ({active1, setActive1, name}) => {

    const [arr, setArr] = useState(Array.from({ length: 4 }, () => { return "none" }));

    useEffect(()=> {
        let arr2 = Array.from({ length: 4 }, () => { return "none" });
        arr2[name] = 'block';
        setArr(arr2);
    }, [name]);

  return (
    <>
        <Kwon active1={active1} setActive1={setActive1} name={name} arr={arr}/>
        <Choi active1={active1} setActive1={setActive1} name={name} arr={arr}/>
        <Hong active1={active1} setActive1={setActive1} name={name} arr={arr}/>
        <Lim active1={active1} setActive1={setActive1} name={name} arr={arr}/>
    </>
  )
}

export default Info