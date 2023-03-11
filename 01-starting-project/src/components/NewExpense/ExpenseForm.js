import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    // const myTitle = event.target.value;
    // setEnteredTitle(myTitle);
    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = (event) => {
    // const myAmount = event.target.value;
    // setEnteredAmount(myAmount);
    setEnteredAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    // const myDate = event.target.value;
    // setEnteredDate(myDate);
    setEnteredDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Expense Data Object that will be changed when the form is submitted

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Allow to communicate with parent Component (New Expense)
    props.onSaveExpenseData(expenseData);

    // After submmiting the form, clean the form (restore the values to empty)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate(""); 
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
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
