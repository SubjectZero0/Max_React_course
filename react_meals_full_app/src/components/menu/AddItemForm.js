import React from "react";
import styles from "./AddItemForm.module.css";
const AddItemForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className={styles.add_item__form} onSubmit={handleSubmit}>
			<div>
				<label>Amount: </label>
				<input className={styles.add_item__input} type="number" name="amount" />
			</div>

			<div>
				<input className={styles.add_item__button} type="submit" value="+ Add" />
			</div>
		</form>
	);
};

export default AddItemForm;
