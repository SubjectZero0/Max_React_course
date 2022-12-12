import "./ChartBar.css";

function ChartBar(props) {
	let barFillHeight = "0%";

	if (props.yearlySum > 0) {
		barFillHeight = (props.value / props.yearlySum) * 100 + "%";
	}

	return (
		<div className="chart-bar">
			<div className="chart-bar__inner">
				<div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
			</div>
			<div className="chart-bar__label">{props.label}</div>
		</div>
	);
}

export default ChartBar;
