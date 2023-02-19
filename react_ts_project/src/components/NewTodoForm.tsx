import React, { useRef, useContext } from "react";
import styles from "./NewTodoForm.module.css";
import { TodosContext } from "./store/TodosContext";

const NewTodoForm: React.FC = () => {
	const enteredTodoText = useRef<HTMLInputElement>(null);
	const todoCtx = useContext(TodosContext);

	const onSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		const enteredText = enteredTodoText.current!.value;

		if (enteredText?.trim().length === 0) {
			return;
		} else {
			todoCtx.newTodo(enteredText);
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
