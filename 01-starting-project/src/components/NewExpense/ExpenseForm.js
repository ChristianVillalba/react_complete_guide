import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    const myTitle = event.target.value;
    setEnteredTitle(myTitle);
    // or setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = (event) => {
    const myAmount = event.target.value;
    setEnteredAmount(myAmount);
    // or setEnteredAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    const myDate = event.target.value;
    setEnteredDate(myDate);
    // or setEnteredDate/(event.target.value)
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={titleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2020-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
