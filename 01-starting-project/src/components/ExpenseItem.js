import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {

  const expenseDate = new Date(2023 , 2 , 25);
  const expenseTitle = "Beers";
  const expenseAmount = 99.99;


  return (
    <div className="expense-item">
      <div>May 15th 2023</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">£ {expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
