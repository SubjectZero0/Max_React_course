import "./ExpenseForm.css";
import { useState } from "react";

const itemState = {
	item: "",
	description: "",
	price: "",
	date: "",
};

function ExpenseForm() {
	//Hook "useState" for the entire form.
	const [formState, setFormState] = useState(itemState);

	//Handler for event => on form input. State updater.
	const formInputHandler = (e) => {
		const targetKey = e.target.id;
		setFormState((previousState) => {
			return {
				...previousState,
				[targetKey]: e.target.value,
			};
		});
	};

	//submit button event handler
	const submitHandler = (e) => {
		e.preventDefault(); //prevent page reload

		//get the latest state data and return it
		//this data will be used for form submition
		const submitData = {
			...formState,
		};

		//reset state to initial state, after form submission (clear all form fields)
		setFormState({
			...itemState,
		});
		return submitData;
	};

	//function to generate the form based on the item object properties.
	const generateDiv = (key) => {
		return (
			<div key={key} className="new-expense__control">
				<label>{`${key}`.toUpperCase()}: </label>
				<input
					id={`${key}`}
					type={`${key === "price" ? "number" : key === "date" ? "date" : "text"}`}
					value={formState[key]} //needed in order to clear form on submission
					onChange={formInputHandler}
				/>
			</div>
		);
	};
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">{Object.keys(itemState).map((key) => generateDiv(key))}</div>

			<div className="new-expense__actions">
				<button type="submit">Add Expense!</button>
			</div>
		</form>
	);
}

export default ExpenseForm;
