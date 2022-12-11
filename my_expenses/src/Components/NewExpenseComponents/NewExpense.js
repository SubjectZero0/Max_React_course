import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
	const submitDataHandler = (enteredData) => {
		//get the data from the expense form
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
