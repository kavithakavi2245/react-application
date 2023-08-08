import React from 'react'

import './atmpage.css'

export default function Login() {
  let data=JSON.parse(localStorage.getItem('Username'));
  let password=JSON.parse(localStorage.getItem('password'));

  localStorage.setItem('E-mail','@gmail.com')


  return (
    <>
    <h2 style={{textAlign:'center'}}>Welcome {data} !</h2>
    <p style={{textAlign:'center'}}>{data}{localStorage.getItem('E-mail')}</p>
    <div className='form'>
      <h2 style={{textAlign:'center',textDecoration:'underline'}}>Login Form</h2>
        <form>
             <table>
              <tbody>
              <tr>
                <td>Name</td>
                <td>:</td>
                <td><input type='text' required className='input' value={data}></input></td>
              </tr>
              <tr>
                <td>D.O.B</td>
                <td>:</td>
                <td><input type='date' required className='input'></input></td>
              </tr>
              <tr>
                <td>E-mail</td>
                <td>:</td>
                <td><input type='email' defaultValue='1234@gmail.com' required className='input'></input></td>
              </tr>
              <tr>
                <td>Address</td>
                <td>:</td>
                <td><textarea defaultValue='Home Address' className='input'></textarea></td>
              </tr>
              <tr>
                <td>Mobile no</td>
                <td>:</td>
                <td><input type='number' defaultValue='8940848455' required className='input'></input></td>
              </tr>
              <tr>
                <td>Password</td>
                <td>:</td>
                <td><input type='password' value={password} required className='input'></input></td>
              </tr>
              <tr>
                <td>Account Type</td>
                <td>:</td>
                <td><input type='number' defaultValue='1' className='input'></input></td>
              </tr>
              </tbody>
             </table>
        </form>
    </div>
    </>
  )
}
 