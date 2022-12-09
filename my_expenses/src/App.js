//imports
import { useState } from "react";
//--------------------------------
import NewExpense from "./Components/NewExpenseComponents/NewExpense";
import Expenses from "./Components/ExpenseComponents/Expenses";
import RenderForm from "./Components/NewExpenseComponents/RenderForm";
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
//create expense array of objects
const expenses = [];

function App() {
	const [expensesAll, setExpensesAll] = useState(expenses);
	const [newExpenseContent, setnewExpenseContent] = useState("renderButton");

	//Adds handler on Add expense event
	const addExpense = (savedExpenseData) => {
		//gets the saved data from the form and creates a new object with the constructor.
		const addedExpense = new Expense(savedExpenseData.price, savedExpenseData.item, savedExpenseData.description, savedExpenseData.date);
		console.log(addedExpense);
		setExpensesAll((prevExpenses) => {
			return [addedExpense, ...prevExpenses];
		});
	};

	const renderForm = () => {
		setnewExpenseContent("renderForm");
	};

	const renderButton = () => {
		setnewExpenseContent("renderButton");
	};

	let newExpenseContentRendered = <RenderForm onClickHandler={renderForm} />;
	if (newExpenseContent === "renderForm") {
		newExpenseContentRendered = <NewExpense onAddExpenseHandler={addExpense} onCancelClick={renderButton} />;
	}

	//render the page
	return (
		<div className="App">
			{/*NewExpense component contains the ExpenseForm component and gets the data entered, through state changes.   */}
			{newExpenseContentRendered}
			<Expenses items={expensesAll} />
		</div>
	);
}

export default App;
