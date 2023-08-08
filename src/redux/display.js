import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment,GetProducts } from './action';

export default function Display() {

    const dispatch=useDispatch();

    const State =useSelector(state=>state)

    const value= State.count
    const Data=State.data
    
    const handleIncrement =()=>{
          dispatch(Increment())
    }
    const handleDecrement =()=>{
        dispatch(Decrement())
    }
    
    const getProductsData =()=>{
        fetch('https://api.spacexdata.com/v3/capsules').then((res)=>res.json()).then((res)=>dispatch(GetProducts(res)))
    }

    useEffect (()=>{
        getProductsData();
    },[])
    
  return (
    <div style={{textAlign:'center'}}>
        <h1>Count Value : {value}</h1>
        <button onClick={handleIncrement} style={{margin:'10px'}}>Increment</button>
        <button onClick={handleDecrement} style={{margin:'10px'}}>Decrement</button>

        {Data && Data.length > 0 && Data.map ((alt,index)=>{
            return(
                <div key={index}>
                    <p>capsule_serial : {alt.capsule_serial} - capsule_id{alt.capsule_id} </p>
                </div>
            )
        })}
    </div>
  )
}

// import React, { Component } from 'react'
// import { Decrement, Increment } from './action'
// import { connect } from 'react-redux'

// class Display extends Component {
//     constructor(props){
//         super(props)
//     }
//   render() {
    
//     const{Increment , Decrement ,value}=this.props
//     const currentValue=this.props.count

//     return (
//       <div>
//         <h1>Count : {currentValue}</h1>
//         <button onClick={Increment}>Increment</button>
//         <button onClick={Decrement}>Decrement</button>
//       </div>
//     )
//   }
// }
//  const mapStateToProps =(state)=>{
//   return state;
// }
// const mapDispatchToProps =(dispatch)=>{
//     return{
//     Increment : ()=> dispatch(Increment ()),
//     Decrement : ()=> dispatch(Decrement ())
// }
// }
// export default connect(mapStateToProps,mapDispatchToProps) (Display)
