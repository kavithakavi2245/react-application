import React, { useState } from 'react';
import Atm from './atm';
import Moneydispenser from './moneydispenser';

const denominations = [2000,500,100,50,20,10]; 

export default function WithdrawMoney() {
  const [dispensedMoney, setDispensedMoney] = useState([]);

  const withdrawMoney = (amount) => {
    let remainingAmount = amount;
    const dispensed = [];

    for (let items of denominations) {
      const notesCount = Math.floor(remainingAmount / items);
      if (notesCount > 0) {
        dispensed.push(...Array(notesCount).fill(items));
        remainingAmount %= items;
      }
    }
    if (remainingAmount === 0) {
      setDispensedMoney(dispensed);
    } else {
      alert('Please Enter a valid Amount');
    }
  };
  return (
    <div>
      <h1>ATM Machine</h1>

      <Atm withdrawMoney={withdrawMoney}/>
      <Moneydispenser denominations={dispensedMoney} />
    </div>
  );
};

