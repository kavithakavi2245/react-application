import React, { Suspense } from 'react'
import{BrowserRouter as Router, Routes, Route,Link, BrowserRouter} from 'react-router-dom' 
import Login from './app/atmtask/details'
//import WithdrawMoney from './app/withdraw'
//import Atmtask from './app/atmtask/task1'
import Type2 from './app/atmtask/type2'
import Type3 from './app/atmtask/type3'
import Atmtask from './app/atmtask/atmwithdrawpage'
import Loginpage from './app/atmtask/loginpage'
import Registor from './app/registor/registor'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Loginpage/>}></Route>
         <Route path='/form' element={<Login/>}></Route>
         <Route path='/captcha' element={<Type2/>}></Route>
         <Route path='/email' element={<Type3/>}></Route>
         <Route path='/withdraw' element={<Atmtask/>}></Route>
         <Route path='/registor' element={<Registor/>}></Route>
      </Routes>
    </Router>
  </>
  )
}
