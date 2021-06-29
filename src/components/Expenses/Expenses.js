import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onSelectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('In Expenses.js')
    console.log(selectedYear);
  };

  return (
      <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectYear={onSelectYearHandler} />
        {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      </Card>
  );
};

export default Expenses;

/*
return (
    <Card className="expenses">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
*/
