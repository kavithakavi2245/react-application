import React, { useState } from 'react'
import './tictac.css'

export default function Tictac() {
    const [square,setSquare]=useState(Array(9).fill(null));
    const[number,setNumber]=useState(true)

    function Square({value,onClick}) {
        return(
            <div>
            <button className='square' onClick={onClick}>
                {value}
            </button>
            </div>
        )
    }

    const handleClick=(i)=>{

         if(calculateWinner(square)){
            return 
         }

         square[i]= number ? 'X' :'O' ;
         setSquare(square)
         setNumber(!number)
    }

    const winner = calculateWinner(square);

    function calculateWinner(square){
        const chances = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]

      for(let i=0 ;i< chances.length ;i++){
        const [a,b,c]=chances[i]

        if(square[a] && square[a] === square [b] && square [b] === square[c]){
            return square[a];
        }
      } 
      return null; 
    }

    let status 

    if (winner){
        status =`PLAYER "${winner} " Win the Game !`
    }
    else{
        status = 'PLAYER : '+ (number ? 'X' : 'O')
    }

    const restart=()=>{
         setNumber(true)
         setSquare(Array(9).fill(null))
    }

  return (
    <>
    <div className='maindiv'>
          <div className='status'><b>{status}</b></div>
    <div className='row'>
        <Square value={square[0]} onClick={() => handleClick (0)}/>
        <Square value={square[1]} onClick={() => handleClick (1)}/>
        <Square value={square[2]} onClick={() => handleClick (2)}/>   
        <Square value={square[3]} onClick={() => handleClick (3)}/>
        <Square value={square[4]} onClick={() => handleClick (4)}/>
        <Square value={square[5]} onClick={() => handleClick (5)}/>   
        <Square value={square[6]} onClick={() => handleClick (6)}/>
        <Square value={square[7]} onClick={() => handleClick (7)}/>
        <Square value={square[8]} onClick={() => handleClick (8)}/>   
    </div>
    <button className='restart' onClick={restart}>Restart</button>
    </div>
    
    </>
  )
}
