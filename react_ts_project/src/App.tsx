import React, { useState } from "react";
import styles from "./App.module.css";

import { Todo } from "./models/todo";
import Todos from "./components/Todos";
import NewTodoForm from "./components/NewTodoForm";

function App() {
	const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
	const [todosArr, setTodosArr] = useState(todos);

	const getNewTodo = (submittedTodo: string) => {
		setTodosArr((prev: Todo[]) => {
			return [...prev, new Todo(submittedTodo)];
		});
	};

	return (
		<div>
			<Todos items={todosArr} />
			<NewTodoForm NewTodo={getNewTodo} />
		</div>
	);
}

export default App;
