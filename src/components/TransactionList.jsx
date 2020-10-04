import React,{useContext} from 'react';
import Transaction from './Transaction';
import Zoom from '@material-ui/core/Zoom';

import {GlobalContext} from './context/GlobalState';
function TransactionList(){
    const {transactions} = useContext(GlobalContext);
    return(
        <Zoom in={true}>
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction
                    key={transaction.key}
                    id={transaction.id}
                    text={transaction.text}
                    amount={transaction.amount}
                    />
                    
                ))}
                
            </ul>
        </div>
        </Zoom>
    )
}
export default TransactionList;