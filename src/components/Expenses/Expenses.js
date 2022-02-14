import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react/cjs/react.development";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterSelectHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };
  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onFilterSelect={filterSelectHandler}
          selected={filteredYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* Usage of "&&" in JSX */}
        {/* {filteredExpense.length == 0 &&
          filteredExpenses.map((expensesItem) => (
            <ExpenseItem
              key={expensesItem.id}
              title={expensesItem.title}
              amount={expensesItem.amount}
              date={expensesItem.date}
            />
          ))}
        {filteredExpense.length == 0 && <p>No content found!</p>} */}

        {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
