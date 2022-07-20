import React from 'react'
import styled from "styled-components"

const GoGO = styled.div`
button{
    color: rgba(250, 250, 100);
    border: 3px solid #fa6464;
    background-color: #fa6464;
    width: 70px;
    height: 70px;
    text-align: center;
    vertical-align: middle;
    position: fixed; 
    bottom: 100px;
    right: 70px; 
    z-index: 99;
}
button:hover{
    color: #fa6464;
    border: 3px solid #fa6464;
    background-color: rgba(250, 250, 100);
}
button>i{
    font-size: 30px;
}
    
`
const GoTop = () => {
    const up =()=>{
        window.scrollTo(0,0);
    }
  return (
    <GoGO>
        <button onClick={up}>
            <i class="fa-solid fa-angle-up"></i>
            <p>GoTop</p>
        </button>
    </GoGO>
  )
}

export default GoTop