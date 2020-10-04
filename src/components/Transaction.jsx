import React,{useContext} from 'react';
import {GlobalContext} from './context/GlobalState';
import DeleteIcon from '@material-ui/icons/Delete';
function Transaction(props){
    const {delTransaction} =useContext(GlobalContext)
    const sign = props.amount<0?'-':'+';
    return(
        <div>
            <li className="minus" style={{ borderRight: props.amount>0?"5px solid #2ecc71":"5px solid #c0392b"}}>
                    {props.text}<span className="">
                        {sign} $
                        {Math.abs(props.amount)}
                    </span>
                    <button onClick={()=>delTransaction(props.id)} className="delete-btn"><DeleteIcon/></button>
                </li>
        </div>
    )
}
export default Transaction;