import React, { useEffect, useState } from 'react'
import './atmpage.css'
import { useNavigate } from 'react-router-dom'

export default function Loginpage() {
    const navigate=useNavigate();
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')


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
    const username=[]
    const userpassword=[]
        data.map((a)=>{username.push(a.name)})
        data.map((b)=>{userpassword.push(b.password)})

        const handleName=(e)=>{
            setName(e.target.value)
        }
        const handlePassword=(e)=>{
            setPassword(e.target.value)
        }
    const HandleClick=()=>{    
            if(name == username[0] && password == userpassword [0] ){
              setTimeout(() => {
                navigate('/withdraw')
             }, 5000)    
             navigate('/form')
            } else if(name == username[1] && password == userpassword [1]){
              setTimeout(() => {
                navigate('/captcha')
              }, 5000)    
              navigate('/form')
            }else if(name == username[2] && password == userpassword [2]){
              setTimeout(() => {
               navigate('/withdraw')
              }, 5000)    
              navigate('/form')
            }else if(name == username[3] && password == userpassword [3]){
              setTimeout(() => {
               navigate('/email')
              }, 5000)    
              navigate('/form')
            }else{
              alert('invalid')
            }
    }
  return (
    <>
     <div style={{textAlign:'center' , marginTop:'240px'}} className='form'>
        <h2 style={{textDecoration:'underline'}}> Login Page:</h2>
        <p>Enter your Name: <input type='text' defaultValue='Kavitha' onChange={handleName}></input></p>
        <p>Enter your password: <input type='password' defaultValue='123456789'onChange={handlePassword}></input></p>
        <button onClick={HandleClick} style={{margin:'10px'}} className='btn'>SUBMIT</button>    
    </div> 
    </>
  )
}
