import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    const { addTransaction } = useContext(GlobalContext);


//Function for adding Income

    const addIncome = e => {
      e.preventDefault();

      // Validation for amount restriction to unsigned numbers and whole numbers
      if (Number(amount) === 0 || Number(amount) < 0 || amount.toString().length > 15) {
        alert(`Please enter value greater than 0 without + or - sign.
Please do not input more than 15 digits.
Currently it is ${amount.toString().length} digits.`);
        return false;
      }
      else if (Number(amount) !== Math.floor(amount) ) {
        alert(`Please enter whole numbers only.
The nearest whole numbers are ${Math.floor(amount)} and ${Math.ceil(amount)}.`);
        return false;
      }

      //validation for minimum text
      if (text === "" || text.length < 3 || text.length > 20) {
        alert(`Please enter text in between 3 to 20 characters.
Currently it is ${text.length} characters long.`);
        return false;
      }

      const newTransaction = {

        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount

      }

      addTransaction(newTransaction);
      //Clearing previously submitted fields
      setText('');
      setAmount('');
    }


// Function for adding Expense item

    const addExpense = e => {
      e.preventDefault();

      // Validation for amount restriction to unsigned numbers and whole numbers
      if (Number(amount) === 0 || Number(amount) < 0 || amount.toString().length > 15) {
        alert(`Please enter value greater than 0 without + or - sign.
Please do not input more than 15 digits.
Currently it is ${amount.toString().length} digits.`);
        return false;
      }
      else if (Number(amount) !== Math.floor(amount) ) {
        alert(`Please enter whole numbers only.
The nearest whole numbers are ${Math.floor(amount)} and ${Math.ceil(amount)}.`);
        return false;
      }


      //validation for minimum text
      if (text === "" || text.length < 3 || text.length > 20) {
        alert(`Please enter text in between 3 to 20 characters.
Currently it is ${text.length} characters long.`);
        return false;
      }


      const newTransaction = {

        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount * -1

      }

      addTransaction(newTransaction);
      //Clearing previously submitted fields
      setText('');
      setAmount('');

    }


    return (
        <>
          <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Enter description of transaction</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            </label>
          <input type="number"  placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />

        </div>
        <div className="btn-main"><button className="btn-inc" onClick={addIncome}>Add Income</button> <button className="btn-exp" onClick={addExpense}>Add Expense</button></div>
      </form>  
        </>
    )
}
