import React, { useState } from 'react'
import './topbar.css';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies'

const Topbar = () => {

    let [subnav, setSubnav] = useState(0); // subbar opacity
    let [test, setTest] = useState('none'); // subbar opacity 되었을 때 click

    const subnav_display_in = () => {
        setSubnav(1)
        setTest('all');
       
    }
    const subnav_display_out = () => {
        setSubnav(0)
        setTest('none');
    }

    let id = cookies.load('loginId');
    if(id === undefined){ id = '';}
    // 쿠키값이 없을땐 ''

  return (
      <div className='k-topbar-container'>
          <div className='k-topbar-box'>
                <div className='k-topabr-box-logo'><Link to={"/"}><img src="/image/Logo/Logo.png" width="150px"></img></Link></div>
              <div className='k-topbar-box-nav'>
                  <div className='k-topbar-box-nav-top'></div>
                  <div className='k-topbar-box-nav-bottom'>
                      <div className='k-topbar-box-navbar'>
                        <Link to={'/coffee'}><div onMouseOver={subnav_display_in}>메뉴</div></Link>
                        <Link to={"/productMain"}><div onMouseOver={subnav_display_in}>상품</div></Link>
                        <Link to={"/membership"}><div onMouseOver={subnav_display_in}>멤버쉽/앱</div></Link>
                        <Link to={"/login/"}><div onMouseOver={subnav_display_in}>마이페이지</div></Link>
                      </div>
                  </div>
              </div>
          </div>
            <div className='k-topbar-subbox' style={{opacity: subnav, pointerEvents: test}}>
                <div className='k-topbar-subbox-box' onMouseLeave={subnav_display_out}>
                    <div className='k-topbar-subbox-box-left'></div>
                    <div className='k-topbar-subbox-box-right'>
                        <div className='k-topbar-subbox-box-navbar'>
                            <div className='k-topbar-subbox-box-navbar-box'>
                                <Link to={"/coffee"}><div>Coffee</div></Link>
                                <Link to={"/noncoffee"}><div>Non Coffee</div></Link> 
                                <Link to={"/desert"}><div>Dessert</div></Link> 
                            </div>
                            <div className='k-topbar-subbox-box-navbar-box'>
                                <Link to={"/cup"}><div>Cup</div></Link>
                                <Link to={"/acc"}><div>Acc</div></Link>
                                <Link to={"/packTea"}><div>Tea Pack</div></Link>
                                
                                
                            </div>
                            <div className='k-topbar-subbox-box-navbar-box'>
                                <Link to={"/membership"}><div>멤버쉽</div></Link>
                                <Link to={"/membership/app"}><div>앱</div></Link>
                                <Link to={"/membership/faq"}><div style={{fontSize: "13px"}}>FAQ/게시판</div></Link>
                    
                            </div>
                            <div className='k-topbar-subbox-box-navbar-box'>
                                <Link to={"/"}>
                                    <div>장바구니</div>
                         
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    
  )
}

export default Topbar


// 메뉴
// 상품
// 이벤트
// 마이페이지-장바구니
