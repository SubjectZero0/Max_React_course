import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpenseFilterComponents/ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
	//state Hook. Initializes on 2022
	const [year, setYear] = useState("2022");

	//Gets the chosen year from child-ExpensesFilter.js
	const changeYear = (chosenYearFilter) => {
		setYear(chosenYearFilter);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter onChangeYear={changeYear} />
				{props.items.map((expense) => (
					<ExpenseItem key={expense.id} item={expense.item} description={expense.description} price={expense.price} date={expense.date} />
				))}
			</Card>
		</div>
	);
}

export default Expenses;
