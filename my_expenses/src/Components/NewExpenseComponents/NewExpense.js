import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
	//get the data from the expense form and give them an id
	const submitDataHandler = (enteredData) => {
		const savedData = {
			...enteredData,
		};

		//communicate with App.js.Then, send the final data to be rendered in Expenses.js.
		props.onAddExpenseHandler(savedData);
		return savedData;
	};

	return (
		<div className="new-expense">
			<ExpenseForm saveOnSubmitHandler={submitDataHandler} onCancelClick={props.onCancelClick} />
		</div>
	);
}

export default NewExpense;
