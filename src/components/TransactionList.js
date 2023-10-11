

import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <li className={transaction.text < 0 ? 'minus' : 'plus'}>
                        {transaction.text} 
                        <span>{transaction.text}</span>
                        <button className="delete-btn">X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default TransactionList;
