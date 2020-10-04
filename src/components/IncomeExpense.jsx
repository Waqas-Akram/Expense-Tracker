import React,{useContext} from 'react';
import {GlobalContext} from './context/GlobalState';
import Zoom from '@material-ui/core/Zoom';
function IncomeExpense(){
    const {transactions} = useContext(GlobalContext);
    const amounts =transactions.map(transaction=>transaction.amount);
    const total = amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const income =amounts.filter(item=>item>0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense =(amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*1).toFixed(2);
    return(
        <Zoom in={true}>
        <div className="inc-exp-container">
            
            <div>
            
            <h4>
                Income
            </h4>
    <p id="money-plus" className="money plus">{income}</p>
            
            </div>
            <div>
                <h4>Expense</h4>
    <p id="money-minus" className="money minus">{expense}</p>
            </div>
           
        </div>
        </Zoom>
        
    )
}
export default IncomeExpense;