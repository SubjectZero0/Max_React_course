import React, { useContext } from "react";
import styles from "./Todos.module.css";

import RemoveTodoBtn from "./RemoveTodoBtn";
import TodoItem from "./TodoItem";
import { TodosContext } from "./store/TodosContext";

const Todos: React.FC = (props) => {
	const todoCtx = useContext(TodosContext);
	return (
		<ul>
			{todoCtx.todos.map((item) => {
				return (
					<div key={item.id}>
						<TodoItem text={item.text} />
						<RemoveTodoBtn items={todoCtx.todos} itemId={item.id} />
					</div>
				);
			})}
		</ul>
	);
};

export default Todos;
