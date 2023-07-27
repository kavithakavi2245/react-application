import React, { useState } from 'react'
import './atmpage.css'
import { useNavigate } from 'react-router-dom'

export default function Type3() {
    const[value,setValue]=useState('')
    const [captcha,setcaptcha]=useState('')
    const navigate=useNavigate()
    const otp='hDFc04z';
    const data=[
          {
            "name": "Jones",
            "dob" : "01-08-1989",
            "emailId" : "jones@gmail.com",
            "contact info":{
            "address": "some area some city some state",
            "mobile no" : 67893456619
            },
            "acount type": 1,
            "password": "456781230"
          },
          {
            "name": "Kani",
            "dob" : "01-07-1997",
            "emailId" : "kani@gmail.com",
            "contact info":{
            "address": "some area some city some state",
            "mobile no" : 67893456619
            },
            "acount type": 3,
            "password": "456781230"
          },
          {
            "name": "Ram",
            "dob" : "01-07-1986",
            "emailId" : "ram@gmail.com",
            "contact info":{
            "address": "some area some city some state",
            "mobile no" : 67893456619
            },
            "acount type": 1,
            "password": "456781230"
          },
          {
            "name": "Amir",
            "dob" : "08-11-1989",
            "emailId" : "amir@gmail.com",
            "contact info":{
            "address": "some area some city some state",
            "mobile no" : 67893456619
            },
            "acount type": 2,
            "password": "456781230"
          }
        ] 
        const mail=data.map((m)=>m.emailId)
        console.log(mail)
    const handleChange=(e)=>{
        setValue(e.target.value)
    }
    const handleClick=()=>{
            if (captcha == otp && value == mail[0] || value == mail[1] || value == mail[2] || value == mail[3] ){
                navigate('/withdraw')
                setValue('')
                setcaptcha('')
            } 
            else{
                alert('Invalid')
                setValue('')
                setcaptcha('')
            }
    }
     const handleCaptcha=(e)=>{
         setcaptcha(e.target.value)
     }
  return (
    <>
     <div style={{textAlign:'center' , marginTop:'240px'}} className='form'>
        <h2 style={{textDecoration:'underline'}}> E-mail Verification:</h2>
        <p>Please Enter your E-Mail: <input type='email' value={value} onChange={handleChange}></input></p>
        <p>Please Enter the captcha : <input onChange={handleCaptcha}></input></p>
        <p>Captcha : <b>{otp}</b></p>
        <button onClick={handleClick} style={{margin:'10px'}} className='btn'>SUBMIT</button>    
    </div> 
    </>
  )
}
