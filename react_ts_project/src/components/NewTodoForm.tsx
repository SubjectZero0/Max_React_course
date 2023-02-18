import React, { useRef } from "react";
import styles from "./NewTodoForm.module.css";

const NewTodoForm: React.FC<{ NewTodo: Function }> = (props) => {
	const enteredTodoText = useRef<HTMLInputElement>(null);

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = enteredTodoText.current?.value;

		if (enteredText?.trim().length === 0) {
			return;
		} else {
			props.NewTodo(enteredText);
		}
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor="todo">Todo Item</label>
				<input id="todo" type="text" ref={enteredTodoText} />
				<button type="submit">Add Todo!</button>
			</form>
		</div>
	);
};

export default NewTodoForm;
