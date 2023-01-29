import React, { useState } from "react";
import styles from "./AddItemForm.module.css";

// -------------------------------------------------------

const AddItemForm = () => {
	const [amount, setAmount] = useState();

	// handle amount change
	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};

	// handle submition
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className={styles.add_item__form} onSubmit={handleSubmit}>
			<div>
				<label>Amount: </label>
				<input className={styles.add_item__input} onChange={handleAmountChange} type="number" name="amount" />
			</div>

			<div>
				<input className={styles.add_item__button} type="submit" value="+ Add" />
			</div>
		</form>
	);
};

export default AddItemForm;
