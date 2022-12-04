/*
Expense Item Component
*/
//imports
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
//------------------------

function ExpenseItem(props) {
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<h2 className="expense-item__item">{props.item}</h2>
			<h2 className="expense-item__description">{props.description}</h2>
			<div className="expense-item__price">{props.price}</div>
		</div>
	);
}
export default ExpenseItem;
