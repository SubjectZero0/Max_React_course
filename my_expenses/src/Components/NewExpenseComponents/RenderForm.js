import React from "react";
//--------------------------------------
import "../NewExpenseComponents/NewExpense.css";
//--------------------------------------

function RenderForm(props) {
	const renderForm = () => {
		props.onClickHandler();
	};

	return (
		<div className="new-expense">
			<div className="new-expense__actions">
				<button type="button" onClick={renderForm}>
					Add an Expense!
				</button>
			</div>
		</div>
	);
}

export default RenderForm;
