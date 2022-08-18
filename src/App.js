import React from 'react'
import Main from './Main/Main_page'
import Topnav from './K_cafe/Topbar'
import Coffee from './Menu/Coffee'
import Membership from './K_cafe/Member/Member_page'
import MembershipApp from './K_cafe/App/App_page'
import MembershipFaq from './K_cafe/FAQ/FAQ_page'
import Board from './K_cafe/FAQ/Board'
import FAQ from './K_cafe/FAQ/FAQ'
import View2 from './K_cafe/FAQ/View2'
import Write from './K_cafe/FAQ/Write'
import Modify from './K_cafe/FAQ/Modify'
import Product from './Product/Product'
import ProductMain from './Product/ProductMain'
import Cup from './Product/Cup'
import Acc from './Product/Acc'
import PackTea from './Product/PackTea'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import P_Cart from './Product/P_Cart';
import HPay from './Hee/HPay';
import Login from './Login/Login_page'
import SignUp from './Login/SignUp'
import P_Pay from './Product/P_Pay'



const App = () => {

  
  return (
    <BrowserRouter>
      <Topnav />
      <Routes>
        <Route path='/' element = {<Main />} />
        <Route path='/coffee' element= {<Coffee/>}/>
      
        <Route path='/membership' element={<Membership />}/>
        <Route path='/membership/app' element={<MembershipApp />}/>
        <Route path='/membership/faq' element={<MembershipFaq />}/>
        <Route path='/membership/faq/board/:id' element={<Board />}/>
        <Route path='/membership/faq/faq' element={<FAQ />}/>
        <Route path='/membership/faq/view/:id' element={<View2 />}/>  
        <Route path='/membership/faq/write' element={<Write />}/>
        <Route path='/membership/faq/modify' element={<Modify/>}/>
        <Route path='/productMain' element={<ProductMain />} />
        <Route path='/product' element={<Product />}/>
        <Route path='/ppay' element={<P_Pay />}/>
        <Route path='/cup' element={<Cup />}/>
        <Route path='/acc' element={<Acc />} />
        <Route path='/packTea' element={<PackTea />} />
        <Route path='/pay' element= {<HPay/>}/>
        <Route path="/pcart" element={<P_Cart/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App  