import React from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>May 15th 2023</div>
      <div className="expense-item__description">
        <h2>Book</h2>
        <div className="expense-item__price">£ 9.99</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
