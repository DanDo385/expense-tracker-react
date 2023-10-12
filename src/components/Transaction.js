import React from 'react'

const Transaction = ({ transaction }) => {
  return (
    <li className={transaction.text < 0 ? 'minus' : 'plus'}>
    {transaction.text} 
    <span>{transaction.text}</span>
    <button className="delete-btn">X</button>
    </li>
  );
}

export default Transaction;