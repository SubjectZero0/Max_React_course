import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
	console.log(props);
	return (
		<div>
			<Card className="expenses">
				{props.items.map((expense) => (
					<ExpenseItem key={expense.item} item={expense.item} description={expense.description} price={expense.price} date={expense.date} />
				))}
			</Card>
		</div>
	);
}

export default Expenses;
