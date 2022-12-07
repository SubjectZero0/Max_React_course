import "./ExpenseDate.css";

function ExpenseDate(props) {
	const date = {
		month: props.date.toLocaleDateString("en-GR", { month: "long" }),
		day: props.date.toLocaleDateString("en-GR", { day: "numeric" }),
		year: props.date.toLocaleDateString("en-GR", { year: "numeric" }),
	};

	return (
		<div className="expense-date">
			<div className="expense-date__month">{date.month}</div>
			<div className="expense-date__day">{date.day}</div>
			<div className="expense-date__year">{date.year}</div>
		</div>
	);
}

export default ExpenseDate;
