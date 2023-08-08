import { createSlice } from "@reduxjs/toolkit"

const state={
    data:[{
        id:1,
        name:'Kavitha',
        age:21,
        place:'Coimbatore'
    }]
}

const userslice=createSlice({
    name:'User details',
    initialState:state,
    reducers:{
        add:(state,action)=>{
            if (action.payload.name === '' || action.payload.age == '' || action.payload.place == '') {
                alert('Please fill the All Details')
            } else{
                if(action.payload.age >100){
                    alert('Invalid age')
                } else {
                 state.data=[...state.data,{name:action.payload.name,age:action.payload.age,place:action.payload.place}]
                }
            }           
        },
        remove:(state,action)=>{
            state.data = state.data.filter((alt,index)=> index !== action.payload)
        },
        update:(state,action)=>{
              
           state.data.map((m)=>{
            
            if( m.name === action.payload.name || m.age === action.payload.age || m.place === action.payload.place ){   
                        m.name= action.payload.name
                        m.age= action.payload.age
                        m.place= action.payload.place
                    }
           })
        },
    }
})

 

export const {add,remove,update}=userslice.actions;
export default userslice.reducer;