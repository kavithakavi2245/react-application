import React, { useState } from 'react';
import './atmpage.css'
import { useNavigate } from 'react-router-dom';
function Atmtask() {
  const [value, setValue] = useState('');
  const[money,setMoney]=useState(false)
  const navigate=useNavigate()

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const thousand= parseInt(value/1000)
  const fiveHundred= parseInt((value- thousand*1000 )/500)
  const hundred= parseInt((value-(thousand*1000 + fiveHundred *500))/ 100)
  const fifty = parseInt((value-(thousand*1000 + fiveHundred *500 + hundred* 100))/50)
  const twenty =parseInt ((value-(thousand*1000 + fiveHundred *500 + hundred* 100+ fifty*50))/20)
  const ten= parseInt ((value-(thousand*1000 + fiveHundred *500 + hundred* 100+ fifty*50 + twenty* 20))/10)

  const a=1000* (thousand)
  const b=500 *(fiveHundred)
  const c=100 *(hundred)
  const d=50 *(fifty)
  const e=20*(twenty)
  const f=10 *(ten)
  
  const handleClick=()=>{

   if(value < 100){
        alert('Invalid Amount')
    }
    setMoney(true)
  }
  const handleHide=()=>{
    setMoney(false)
    setValue('')
  }
  const logout=()=>{
    navigate('/')
  }
  return (
    <>
    <div className='logout'><button onClick={logout} className='lgbtn'>Log Out</button></div>
    <div style={{textAlign:'center'}} className='form'>
      <p><b>Amount: {value}</b></p>
      <input type="text" value={value} onChange={handleChange} style={{padding:'5px'}}/>
      <button onClick={handleClick} className='atmbtn'>Submit</button>
      <button onClick={handleHide} className='atmbtn' >Reset</button>
      {money ? 
         <div>
         {value <100 ? setMoney(false):null}
         {value % 10 == 0? null:setMoney(false)}
         {value % 10 == 0 ?null :alert('Invalid Amount')}
         {thousand > 0 ? <p>1000 *{thousand} ={a}</p>:null }
         {fiveHundred > 0 ? <p>500 *{fiveHundred}={b}</p>:null }
         {hundred > 0 ? <p>100 *{hundred}={c}</p>:null }
         {fifty > 0 ? <p>50 *{fifty}={d}</p>:null }
         {twenty > 0 ? <p>20 *{twenty}={e}</p>:null }
         {ten > 0 ? <p>10 *{ten}={f}</p>:null }
         <p><b>Total : {value}</b></p>
         </div> :  null }
         </div>
    </>
  );
}
export default Atmtask;