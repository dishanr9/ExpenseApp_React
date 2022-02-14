import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitleEntered] = useState("");
  const [enteredAmount, setAmountEntered] = useState("");
  const [enteredDate, setDateEntered] = useState("");

  //   const [userInput, setUserInput] = useState({
  //       enteredTitle:'',
  //       enteredAmount:'',
  //       enteredDate: ''
  //   });

  const titleChangeHandler = (event) => {
    // If status depends on the previous state,
    // use the  anonymous arrow function with
    // a 'previousstate' parameter as React only
    // 'SCHEDULES' state change, so, you may be
    // updating an obsolete version of userInput obj
    // instead of the latest one. So, use previous state
    // as a parameter.

    setTitleEntered(event.target.value);

    // setUserInput((previousState) => {
    //     return{
    //         ...previousState,
    //         enteredTitle: event.target.value
    //     }
    // });
  };

  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);

    // setUserInput((previousState) => {
    //     return{
    //         ...previousState,
    //         enteredAmount: event.target.value
    //     }
    // });
  };

  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);

    // setUserInput((previousState) => {
    //     return{
    //         ...previousState,
    //         enteredDate: event.target.value
    //     }
    // });
  };

  const submitHandler = (event) => {
    // prevents the browser from reloading full page.
    event.preventDefault();
    const expenseData = {
      // title: userInput['enteredTitle'],
      // amount:userInput['enteredAmount'],
      // date:new Date(userInput['enteredDate'])
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");

    props.onSaveExpenseData(expenseData);
  };

  const expenseCancelHandler = (event) => {
    props.onCancel();
  };

  //value = userInput['enteredDate'] value = {userInput['enteredAmount']}  value={userInput['enteredDate']}
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={expenseCancelHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
