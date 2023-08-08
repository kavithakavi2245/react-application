export const Increment =()=>{
    return {type :'Increment'}
}

export const Decrement =()=>{
    return {type :'Decrement'}
}

export const GetProducts = (payload)=>{
    return {type :"GetProducts" ,payload}
}