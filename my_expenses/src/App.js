import ExpenseItem from "./Components/ExpenseItem";
//------------------------
export class ExpenseItems {
	price;
	item;
	description;

	constructor(price, item, description) {
		this.price = price;
		this.item = item;
		this.description = description;
	}
}
//create test Expense
const testExpense = new ExpenseItems(10, "Water Bill", "Bill for having water");
console.log(testExpense);

function App() {
	return (
		<div className="App">
			<ExpenseItem price={testExpense.price} description={testExpense.description} item={testExpense.item}></ExpenseItem>
		</div>
	);
}

export default App;
