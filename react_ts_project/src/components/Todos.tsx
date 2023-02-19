import React from "react";
import styles from "./Todos.module.css";

import RemoveTodoBtn from "./RemoveTodoBtn";

import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[]; getUpdatedTodos: (items: Todo[]) => void }> = (props) => {
	const updateTodoHandler = (items: Todo[]) => {
		props.getUpdatedTodos(items);
	};
	return (
		<ul>
			{props.items.map((item) => {
				return (
					<div key={item.id}>
						<TodoItem text={item.text} />
						<RemoveTodoBtn items={props.items} itemId={item.id} updateTodoHandler={updateTodoHandler} />
					</div>
				);
			})}
		</ul>
	);
};

export default Todos;
