import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const toggleCounter = useSelector((state) => state.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch({
			type: "toggle",
		});
	};

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};
	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>-- {toggleCounter && counter} --</div>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
