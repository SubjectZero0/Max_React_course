import "./ExpenseDate.css";

function ExpenseDate(props) {
	const date = {
		month: props.date.toLocaleDateString("en-US", { month: "long" }),
		day: props.date.toLocaleDateString("en-US", { day: "numeric" }),
		year: props.date.toLocaleDateString("en-US", { year: "numeric" }),
	};

	return (
		<div className="expense-date">
			<h2 className="expense-date__month">{date.month}</h2>
			<h2 className="expense-date__day">{date.day}</h2>
			<h2 className="expense-date__year">{date.year}</h2>
		</div>
	);
}

export default ExpenseDate;
