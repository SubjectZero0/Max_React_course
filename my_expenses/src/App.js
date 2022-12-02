//imports
import ExpenseItem from "./Components/ExpenseComponents/ExpenseItem";
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
console.log(testExpense.date);

function App() {
	//render the page
	return (
		<div className="App">
			<div /*classname = "Card"*/>
				<ExpenseItem
					price={testExpense.price}
					description={testExpense.description}
					item={testExpense.item}
					date={testExpense.date}
				></ExpenseItem>
			</div>
		</div>
	);
}

export default App;
