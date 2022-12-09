import "./ExpenseForm.css";
import { useState } from "react";

//----------------------------------------------

const item = {
	item: "",
	description: "",
	price: "",
	date: "",
};

function ExpenseForm(props) {
	// State Hook for the entire form.
	const [form, setForm] = useState(item);

	const formInputHandler = (e) => {
		//Handler for event => on form input save the input. State updater.
		const targetedKey = e.target.id;

		setForm((previousState) => {
			return {
				...previousState,
				[targetedKey]: e.target.value,
			};
		});
	};

	const submitHandler = (e) => {
		//submit button event handler
		e.preventDefault(); //prevent page reload

		//get the latest state data and return it
		//this data will be used for form submition
		const submitData = {
			...form,
		};

		//Perform form validation. Items cannot have empty values.
		if (Object.values(submitData).includes("")) {
			alert("Item cannot have empty values.");
		} else {
			//communicate with parent component (NewExpense) and transfer the entered data.
			props.saveOnSubmitHandler(submitData);
			//reset state to initial state, after form submission (clear all form fields)
			setForm({
				...item,
			});
			return submitData;
		}
	};

	const generateForm = (key) => {
		//function to generate the form based on the Expense class properties.
		return (
			<div key={key} className="new-expense__control">
				<label>{`${key}`.toUpperCase()}: </label>
				<input
					id={`${key}`}
					type={`${key === "price" ? "number" : key === "date" ? "date" : "text"}`}
					value={form[key]} //needed in order to clear form on submission
					onChange={formInputHandler}
				/>
			</div>
		);
	};

	const renderButton = () => {
		props.onCancelClick();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">{Object.keys(item).map((key) => generateForm(key))}</div>

			<div className="new-expense__actions">
				<button type="submit">Add Expense!</button>
				<button type="button" onClick={renderButton}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
