import React, {useEffect} from 'react'
import Slider from "react-slick"
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {Row, Col} from 'reactstrap'
import AOS from "aos";
import "aos/dist/aos.css"
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import PopUp1 from './PopUp1'

const Container = styled.div`
  height: 2000px;
`
const StyledSlider = styled(Slider)`
  .slick-list{
  }
  .slick-prev {
    top: 640px;
    left: 77.5%;
    z-index: 1000;
  }
  .slick-prev:before {
    content: "<i className="fa-solid fa-left"></i>";
    font-size: 40px;
    color: white;
  }
  .slick-next{
    right: 12%;
    top: 640px;
    z-index: 1000;
  }
  .slick-next:before {
    content: "<i className="fa-solid fa-left"></i>";
    font-size: 40px;
    color: white;
  }
  .slick-dots {
    width: 200px;
    bottom: 30px;
    right: 10%;
    button {
        &::before {
            content: "";
            height: 10px;
            color: white;
            background-color: white;
        }
    }
}
`

const Main = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <Container>
      <PopUp1 />
      <Row>
      <StyledSlider {...settings}> {/* 기본 display가 inline-block로 상속, color 등등도 안먹는다 그래서 다른 컴포넌트에서 불러옴 */}
        <Slide2></Slide2>
        <Slide1></Slide1>
        <Slide3></Slide3>
      </StyledSlider>
      </Row>

    <Row>
      <Box1 />
    </Row>
    <Row>
      <Box2 />
    </Row>
    <Row>
      <Box3 />
    </Row>
  
    </Container>
  )
}

export default Main