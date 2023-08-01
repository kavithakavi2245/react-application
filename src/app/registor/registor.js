import React, { useState } from 'react'
import './registor.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registor() {
    const initialValue = [{
      name:'',
      age:'',
      place:'',
      mobileno:''
    }]
    const [input,setInput]=useState([])
    const [data,setData]=useState(initialValue)
    const [index,setIndex]=useState()
    const [value,setValue]=useState(false)
    let {name,age,place,mobileno}= data;
  

    const handleChange=(e)=>{
         setData({...data,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
      e.preventDefault()
      console.log("resch");
      if(name ==undefined && age == undefined && place == undefined && mobileno == undefined){
               toast.info('Please fill the All details !')
      } 
        else{
              if(name == undefined || name ==''){
               toast.info("Please fill the name !") 
         }
          else {
              if(age == undefined || age >100){
                toast.error("Invalid age !")
               } 
          else{
               if(place == undefined || place ==''){
                  toast.info("Please Fill the place !")
              }
          else{ 
               if(mobileno == undefined || mobileno.length != 10) {
                   toast.error("Invalid Mobile number !")
                }
           else{
                    setInput([...input,{name,age,place,mobileno}])
                    setData({name:'',age:'',place:'',mobileno:''})
                }
             }
          }
        }
       }
     }
    
    const handleDelete = (I) => {
        const deleteItems = input.filter((alt, index) => index !== I);
        setInput(deleteItems);
    };
    
    const handleEdit=(I)=>{
        const {name,age,place,mobileno}=input[I]  
        setData({name,age,place,mobileno})
        setValue(true)
        setIndex(I)
    }

    const handleupdate=(e)=>{
      e.preventDefault()
       const total=[...input]
       total.splice(index,1,{name,age,place,mobileno})
       setInput(total)
       setValue(false)
       setData({name:'',age:'',place:'',mobileno:''})
    }
  
  return (
    <>
    <div className='tableform'>
        <div className='tableinput'>  
        <form>
          <table>
            <thead>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td><input type='text' name='name' value={data.name} onChange={handleChange}></input></td>
          </tr>  
          <tr>
            <td>Age</td>
            <td>:</td>
            <td><input type='number' name='age' value={data.age} onChange={handleChange}></input></td>
          </tr>
          <tr>
            <td>Place</td>
            <td>:</td>
            <td><input type='text' name='place' value={data.place} onChange={handleChange}></input></td>
          </tr>
          <tr>
            <td>Mobile No</td>
            <td>:</td>
            <td><input type='number' name='mobileno' value={data.mobileno} onChange={handleChange}></input></td>
          </tr>
          </thead>
          </table>
          <button className='button' onClick={!value ? handleClick : handleupdate}>{!value?'Add user' : 'Update Data'}</button> 
        </form>
      </div>
  
    <div className='tabledata'>
        <table border={2} cellPadding={10} width='70%' className='data'>
          <thead>
            <tr style={{backgroundColor: 'gray'}}>
              <th>NAME </th>
              <th>AGE </th>
              <th>PLACE </th>
              <th>MOBILE NO </th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {input && input.length>0 && input.map((q,I)=>{
             return( <tr key={I}>
                      <td>{q?.name}</td>
                      <td>{q?.age}</td>
                      <td>{q?.place}</td>
                      <td>{q?.mobileno}</td>
                      <td><button onClick={()=> handleEdit(I)} className='button '>Edit</button></td>
                      <td><button onClick={() => handleDelete(I)} className='button'>Delete</button></td>
              </tr>)
             })}
          </tbody>
        </table>
     </div>
</div>
      <ToastContainer
         position="top-center"
         autoClose={5000}
         theme="dark"
       />
    </>
  )
}
