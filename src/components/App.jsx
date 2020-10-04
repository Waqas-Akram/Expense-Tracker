import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';
import TransactionList from './TransactionList';
import CreateInputArea from './CreateInputArea';
import {GlobalProvider} from './context/GlobalState';

function App(){
    return(
        <GlobalProvider>
            <Header
            heading="Expense Tracker"
            />
            <div className="container">
            <Balance/> 
            <IncomeExpense/>
            <TransactionList/>
            <CreateInputArea/>
            </div>
        </GlobalProvider>
    )
}
export default App;
