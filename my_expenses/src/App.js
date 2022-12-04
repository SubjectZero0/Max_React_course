//imports
import NewExpense from "./Components/NewExpenseComponents/NewExpense";
import Expenses from "./Components/ExpenseComponents/Expenses";
import { useState } from "react";
//------------------------

export class Expense {
	//creates class for Expense Items

	price;
	item;
	description;
	date;

	constructor(price, item, description) {
		this.price = price;
		this.item = item;
		this.description = description;
		this.date = new Date();
	}
}
//create test Expense
const expenses = [new Expense(10, "Water Bill", "Bill for having water")];

function App() {
	const [expenseState, setExpenseState] = useState(expenses);

	//Adds handler on Add expense event
	const addExpense = (savedExpenseData) => {
		const addedExpense = new Expense(
			savedExpenseData.price,
			savedExpenseData.item,
			savedExpenseData.description,
			new Date(savedExpenseData.date)
		);
		setExpenseState((prevExpenses) => {
			return [addedExpense, ...prevExpenses];
		});
	};

	//render the page
	return (
		<div className="App">
			{/*NewExpense component contains the ExpenseForm component and gets the data entered, through state changes.   */}
			<NewExpense onAddExpenseHandler={addExpense} />

			<Expenses items={expenseState} />
		</div>
	);
}

export default App;
