import React, { useState } from "react";
import styles from "./App.module.css";

import { Todo } from "./models/todo";
import Todos from "./components/Todos";
import NewTodoForm from "./components/NewTodoForm";

function App() {
	//
	const [todosArr, setTodosArr] = useState<Todo[]>([]);

	const getNewTodo = (submittedTodo: string) => {
		setTodosArr((prev: Todo[]) => {
			return [...prev, new Todo(submittedTodo)];
		});
	};

	const getUpdatedTodos = (updatedTodos: Todo[]) => {
		setTodosArr(updatedTodos);
	};

	return (
		<div>
			<Todos items={todosArr} getUpdatedTodos={getUpdatedTodos} />
			<NewTodoForm NewTodo={getNewTodo} />
		</div>
	);
}

export default App;
