import "./Expenses.css";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilterComponents/ExpensesFilter";
import { useState } from "react";

//--------------------------------------------------------------------

function Expenses(props) {
	//state Hook. Initializes on 2022
	const [year, setYear] = useState("2022");

	//Gets the chosen year from child-ExpensesFilter.js
	const changeYear = (chosenYearFilter) => {
		setYear(chosenYearFilter);
	};

	//filters all the expenses to the chosen year
	const filterExpenses = props.items.filter((expense) => String(expense.date.getFullYear()) === year);

	//set a default text for non existing expenses
	let expenseItemContent = <h2 className="expense-item">No available Items</h2>;

	if (filterExpenses.length > 0) {
		//when an expense is added, render it dynamically
		expenseItemContent = filterExpenses.map((expense) => (
			<ExpenseItem key={expense.id} item={expense.item} description={expense.description} price={expense.price} date={expense.date} />
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onChangeYear={changeYear} />
				{expenseItemContent}
			</Card>
		</div>
	);
}

export default Expenses;
