//------------------------

/*
Expense Item Component
*/
//imports
import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<div>
			<h2 className="expense-item__price">{props.price}</h2>
			<h2 className="expense-item__description">{props.description}</h2>
			<h2 className="expense-item">{props.item}</h2>
		</div>
	);
}
export default ExpenseItem;
