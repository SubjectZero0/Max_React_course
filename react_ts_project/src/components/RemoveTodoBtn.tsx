import React, { useContext } from "react";
import { Todo } from "../models/todo";
import { TodosContext } from "./store/TodosContext";

const RemoveTodoBtn: React.FC<{
	items: Todo[];
	itemId: Todo["id"];
}> = (props) => {
	//
	const todoCtx = useContext(TodosContext);

	const removeTodoHandler: React.MouseEventHandler = (e: React.MouseEvent) => {
		e.preventDefault();

		const updatedTodoItems = props.items.filter((item) => {
			return item["id"] !== props.itemId;
		});

		todoCtx.removeTodo(updatedTodoItems);
	};

	return <button onClick={removeTodoHandler}>Remove Todo</button>;
};

export default RemoveTodoBtn;
