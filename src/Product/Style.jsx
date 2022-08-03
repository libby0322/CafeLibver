import styled from "styled-components";


//상단 바 디자인
export const productList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 20px;
`
export const topListItem = styled.li`
    display: flex;
    width: 60%;
    height: 50px;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    border-bottom: 3px solid #fa6464;
    a{
        width: 25%;
        display: flex;
        justify-content: center;
        padding: 15px 0;
        text-align: center;
        padding-bottom: 30px;
    }
    a:hover{
        color: #f5aaaa;
    }
    span{
        width: 25%;
        display: flex;
        justify-content: center;
        padding-top: 10px;
        text-align: center;
        padding-bottom: 20px;
    }
    span:hover{
        color: #f5aaaa;
    }

    @media screen and (min-width: 1000px) {
    width: 55%;
}

`
//상품 메인 페이지 디자인
export const proMainBox = styled.div`
    margin: 0 auto;
    background: #ddd;
    width: 80%;
    img{
    width: 100%;
    height: 100%;
    }
    .newProBtn{
    position:absolute;
    top:400px;
    right:560px;
    padding: 10px 10px;
    font-size: 18px;
    font-weight: 300;
    background-color: #ddd;
    border: none;
    opacity: 80%;
    }
    button:hover{
    background: #fff;
}
`
export const mainText = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    color:#fff;
    font-family: 'Sunflower', sans-serif;
`
export const topText = styled.span`
    position:absolute;
    top:250px;
    right: 690px;
    font-size: 50px;
    font-weight: 700;
    font-family: 'Sunflower', sans-serif;
`
export const bText = styled.span`
    position:absolute;
    top:350px;
    right:270px;
    font-size: 20px;
    font-weight: 500;

`
//메인페이지 하단 이미지박스

export const newProBox = styled.div`
    background-color: #fff;
    width: 80%;
    height: 400px;
    text-align: center;
    font-size: 30px;
    padding: 0;
    margin: 0px auto;
  
.newProBox{
    background-color: #ddd;
    width: 100%;
    height: 400px;
    text-align: center;
    font-size: 30px;
    padding: 15px;
}
.contentBox{
    display: flex;
    justify-content: center;
    align-items: center;
}
.contentBox>img{
    padding: 10px;
    width: 350px;
    @media screen and (min-width: 1000px) {
    width: 280px;
}
}
.newProduct{
    padding-top: 20px;
    padding-bottom: 10px;
    border-bottom: 4px solid  #fa6464;
}



`
//컵 페이지 디자인

export const ProMenu = styled.div`
    width: 1215px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .proMenuBtn{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 25%;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-bottom: 2px dashed #f29a9a;
    opacity: 80%;
    background: #fff;
}
button:hover{
    background: #fbeaea;
}

@media screen and (min-width: 1000px) {
    width: 55%;
}

`
export const ProMenu1 = styled.div`
    width: 1215px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .proMenuBtn1{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 25%;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-bottom: 2px dashed #f29a9a;
    opacity: 80%;
    background: #fff;
}
button:hover{
    background: #fbeaea;
}

@media screen and (min-width: 1000px) {
    width: 55%;
}

`
export const ProMenu2 = styled.div`
    width: 1215px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .proMenuBtn2{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 25%;
    padding: 10px 10px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-bottom: 2px dashed #f29a9a;
    opacity: 80%;
    background: #fff;
}
button:hover{
    background: #fbeaea;
}

@media screen and (min-width: 1000px) {
    width: 55%;
}

`

export const ListWrap = styled.div`
    width: 75%;
    margin: 0 auto;
.ListWrap{
    width: 75%;
    margin: 0 auto;
}
.ListImg{
    display:flex;  
    justify-content: space-between;
    text-align: center;
    margin-top: 30px;
}
.proBox{
    width: 100%;
    height: 300px;
    
}

@media screen and (min-width: 1000px) {
    width: 55%;
    margin: 0 auto;
    .ListImg img{
        width: 100%;
        display:flex;  
        justify-content: space-between;
    }
}

`
export const ListImgBox = styled.div`
    width: 1215px;
    border-bottom: 2px solid #fa6464;
    img{
    width: 300px;
    margin: 0;
    padding: 0;
    position: relative;
    }
    img:hover{
        opacity: 0.7;
    }
    span{
        text-align: center;
        padding: 0 10px;
        padding-bottom: 5px;
    }
    button{
        text-align: center;
        margin-bottom: 10px;
    }
    @media screen and (min-width: 1000px) {
    width: 55%;
    margin: 0 auto;
}

`
//장바구니 리스트 박스 디자인

