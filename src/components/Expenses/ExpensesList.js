import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  let expenseContent = <p>No content found!</p>;

  if (props.items.length == 0) {
    return <h2 className="expenses-list__fallback"> No expenses found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expensesItem) => (
        <ExpenseItem
          key={expensesItem.id}
          title={expensesItem.title}
          amount={expensesItem.amount}
          date={expensesItem.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
