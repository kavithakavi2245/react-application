import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { add, update, remove } from './userreducer';
import './main.css'

export default function Main() {
    const dispatch=useDispatch();
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [place,setPlace]=useState('')
    const state=useSelector((state)=>state)
    const [value,setValue]=useState(true)
    const dataValue=state.user.data

    const handleClick =(e)=>{
        e.preventDefault();
        dispatch(add({name:name,age:age,place:place}))
        setName('') 
        setAge('')
        setPlace('')
    }
    const updatedata =(e)=>{
        e.preventDefault();
        dispatch(update({name:name,age:age,place:place}))
        setName('')
        setAge('')
        setPlace('')
        setValue(!value)
    }
    const Edit=(index)=>{
        setValue(false)
        setName(dataValue[index].name)
        setAge(dataValue[index].age)
        setPlace(dataValue[index].place)
    }
    
  return (
    <>
    <div className='tableform'>
    <h2>CRUD Operations using Redux-toolkit</h2>
        <div className='tableinput'>
            <form>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>:</td>
                            <td><input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>:</td>
                            <td><input type='number' value={age} onChange={(e)=>{setAge(e.target.value)}}></input></td>
                        </tr>
                        <tr>
                            <td>Place</td>
                            <td>:</td>
                            <td><input type='text' value={place} onChange={(e)=>{setPlace(e.target.value)}}></input></td>
                        </tr>
                    </thead>
                </table>
                {value ? <button onClick={handleClick} className='button'>Add User</button> : <button onClick={updatedata}   className='button'>UpdateData</button>} 

            </form>
     </div>
    <div className='tabledata'>
     <table border={2} cellPadding={5} width='80%' className='data'>
        <thead style={{backgroundColor:'gray'}}>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>PLACE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
        </thead>
        <tbody>
            {dataValue && dataValue.length > 0 && dataValue.map ((alt,index)=>{
                return(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{alt.name}</td>
                        <td>{alt.age}</td>
                        <td>{alt.place}</td>

                        <td><button onClick={(e)=>{Edit(index)}} className='button'>Edit</button></td>

                        <td><button onClick={()=> dispatch(remove(index))} className='button'>Delete</button></td>
                    </tr>
                )
            })}
        </tbody>
     </table>
     </div>
</div>
</>
)
}
