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
	id;

	constructor(price, item, description, date) {
		this.price = price;
		this.item = item;
		this.description = description;
		this.id = Math.random();
		this.date = new Date(date);
	}
}
//create test Expense
const expenses = [];

function App() {
	const [expensesAll, setExpensesAll] = useState(expenses);

	//Adds handler on Add expense event
	const addExpense = (savedExpenseData) => {
		//gets the saved data from the form and creates a new object with the constructor.
		const addedExpense = new Expense(savedExpenseData.price, savedExpenseData.item, savedExpenseData.description, savedExpenseData.date);
		console.log(addedExpense);
		setExpensesAll((prevExpenses) => {
			return [addedExpense, ...prevExpenses];
		});
	};

	//render the page
	return (
		<div className="App">
			{/*NewExpense component contains the ExpenseForm component and gets the data entered, through state changes.   */}
			<NewExpense onAddExpenseHandler={addExpense} />

			<Expenses items={expensesAll} />
		</div>
	);
}

export default App;
