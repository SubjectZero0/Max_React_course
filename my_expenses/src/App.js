//imports
import ExpenseItem from "./Components/ExpenseComponents/ExpenseItem";
import NewExpense from "./Components/NewExpenseComponents/NewExpense";
//------------------------

export class ExpenseItems {
	//creates class for Expense Items

	price;
	item;
	description;
	date;

	constructor(price, item, description) {
		this.price = price;
		this.item = item;
		this.description = description;
		this.date = new Date();
	}
}
//create test Expense
const testExpense = new ExpenseItems(10, "Water Bill", "Bill for having water");

function App() {
	//render the page
	return (
		<div className="App">
			<NewExpense />

			<ExpenseItem
				item={testExpense.item}
				description={testExpense.description}
				price={testExpense.price}
				date={testExpense.date}
			></ExpenseItem>
		</div>
	);
}

export default App;
