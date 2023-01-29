import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./ReduxStore/index";
import classes from "./Counter.module.css";

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter);
	const toggleCounter = useSelector((state) => state.counter.showCounter);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
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
