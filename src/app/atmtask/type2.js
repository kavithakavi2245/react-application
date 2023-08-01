import React, { useState } from 'react'
import{useNavigate} from 'react-router-dom'
import './atmpage.css'

export default function Type2() {
    
    const [value,setValue]=useState('')
    const navigate=useNavigate();
    const otp='hDFc04z';
    
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    
    const handleClick=()=>{
        if(value == otp){
            navigate("/withdraw")
            setValue('')
        } else{
            alert('Invalid')
            setValue('')
        }
    }

  return (
    <>
     <div style={{textAlign:'center' , marginTop:'250px'}} className='form'>
        <h2>Please Enter the Captcha *</h2>
        <input type='text' value={value} onChange={handleChange}></input>
        <button onClick={handleClick} style={{margin:'10px'}}>SUBMIT</button>
        <p>Captcha : <b>{otp}</b></p>        
    </div> 
    </>
  )
}
