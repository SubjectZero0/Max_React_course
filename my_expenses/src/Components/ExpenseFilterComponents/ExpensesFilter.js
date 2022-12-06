import React, { useState } from "react";
import "./ExpensesFilter.css";

const yearOptions = ["2022", "2021", "2020", "2019"];

const ExpensesFilter = (props) => {
	//state Hook for chosen year.
	const [filterYear, setFilterYear] = useState(yearOptions[0]);

	const filterHandler = (event) => {
		//event handler. onChange of chosen year, set state and send the data to Expenses.js
		const chosenYear = event.target.value;
		setFilterYear(chosenYear);
		props.onChangeYear(chosenYear); //this function sends the year to parent component Expenses.js
	};

	//renders the year options dynamically from yearOptions array
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select onChange={filterHandler}>
					{yearOptions.map((year, index) => {
						return (
							<option key={year} value={yearOptions[index]}>
								{yearOptions[index]}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
