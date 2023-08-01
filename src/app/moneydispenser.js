import React, { useState } from 'react';
export default function Moneydispenser({ denominations }){ 
     console.log(denominations.length)
  return (
    <div>
      <ul style={{listStyleType:'none'}}>
        {denominations.map((denomination,index) => (
          <li key={index}>
            Rs.{denomination} 
          </li>
        ))}
      </ul> 
    </div>
  );
};

