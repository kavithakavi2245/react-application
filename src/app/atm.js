import React, { useState } from 'react';

export default function Atm({ withdrawMoney }) {
  const [amount, setAmount] = useState('');

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      withdrawMoney(parseInt(amount));
      setAmount('');
      e.target.value = ''
    }
  };
  
return (
    <form onSubmit={handleSubmit}>
        <p>Amount: {amount}</p>
        Enter Amount:
        <input type="number" value={amount} onChange={handleChange}   style={{margin:'0px 20px'}}></input>
      <button type="submit">Withdraw</button>
    </form>
  );
};

