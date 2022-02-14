import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const expenses = props.expenses;

  const dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (var expense of expenses) {
    const expenseMonth = expense.date.getMonth(); // month starts from 0, jan = 0.
    dataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={dataPoints}/>;
};

export default ExpensesChart;
