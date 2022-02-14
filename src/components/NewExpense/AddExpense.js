import React from "react";
import "./NewExpense.css";
import NewExpense from "./NewExpense";

const AddExpense = (props) => {
  const addNewExpenseHandler = (event) => {
    console.log("In addExpense.js");
    props.onAddNewExpense();
  };
  return (
    <div className="new-expense">
      <button onClick={addNewExpenseHandler}> Add New Expense</button>
    </div>
  );
};

export default AddExpense;
