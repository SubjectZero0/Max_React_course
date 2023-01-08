import React from "react";
import styles from "./AddButton.module.css";
const AddButton = () => {
	return (
		<form>
			<label>Amount: </label>
			<input type="number" name="amount" />
			<input className={styles.add_button__button} type="submit" value="+Add" />
		</form>
	);
};

export default AddButton;
