import React ,{useState,useContext} from 'react';
import {GlobalContext} from './context/GlobalState';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
function CreateInputArea(){
    const {addTransaction} =useContext(GlobalContext)
    const[text,addText]=useState('');
    const[amount,addAmount]=useState(0);
    const [isMousedOver, setMouseOver] = useState(false);
    function handleTextChange(event){
        addText(event.target.value);
    }
    function handleAmountChange(event){
        addAmount(event.target.value);
    }
   function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }
  function onSubmit(event){
      event.preventDefault();
      const newTrasaction ={
          id:Math.floor(Math.random() *10000000),
          text,
          amount:+amount
      }
      addTransaction(newTrasaction);
      event.preventDefault();
  }
return (
    <Zoom in={true}>
<div>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" onChange={handleTextChange} placeholder="Enter text..." />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" onChange={handleAmountChange}  placeholder="Enter amount..."
            />
        </div>
        
        <button onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} style={{ backgroundColor: isMousedOver ? "black" : "#9c88ff" }} className="btn" variant="contained" color="secondary">Add transaction</button>
        
  
    </form>
</div>
</Zoom>
)
}
export default CreateInputArea;