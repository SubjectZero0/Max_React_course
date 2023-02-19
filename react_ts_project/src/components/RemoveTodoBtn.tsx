import React from "react";
import { Todo } from "../models/todo";

const RemoveTodoBtn: React.FC<{
	items: Todo[];
	itemId: Todo["id"];
	updateTodoHandler: (items: Todo[]) => void;
}> = (props) => {
	//
	const removeTodoHandler: React.MouseEventHandler = (e: React.MouseEvent) => {
		e.preventDefault();

		const updatedTodoItems = props.items.filter((item) => {
			return item["id"] !== props.itemId;
		});

		props.updateTodoHandler(updatedTodoItems);
	};

	return <button onClick={removeTodoHandler}>Remove Todo</button>;
};

export default RemoveTodoBtn;
