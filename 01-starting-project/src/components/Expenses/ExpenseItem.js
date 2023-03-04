import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card"
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [ buttonText,setHeadingText] = useState("Press Me");
  const handleClick = () => {
    setHeadingText("State Changed")
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£ {props.amount}</div>
      </div>
      <button onClick={handleClick}>{buttonText}</button>
    </Card>
  );
}

export default ExpenseItem;
