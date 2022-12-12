import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	const yearlyExpensesArr = props.dataPoints.map((dataPoint) => dataPoint.value);

	const yearlyExpenses = yearlyExpensesArr.reduce((sum, curr) => (sum += curr), 0);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} yearlySum={yearlyExpenses} label={dataPoint.label} />
			))}
		</div>
	);
}

export default Chart;
