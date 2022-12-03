//------------------------

/*
Expense Item Component
*/
//imports
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<h2 className="expense-item__price">{props.price}</h2>
			<h2 className="expense-item">{props.item}</h2>
			<h2 className="expense-item__description">{props.description}</h2>
		</Card>
	);
}
export default ExpenseItem;
