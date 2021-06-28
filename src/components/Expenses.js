import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.items.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            title={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </Card>
  );
}
export default Expenses;
