import React, { createContext, useState } from "react";
import { Todo, TodoContextType } from "../../models/todo";

export const TodosContext = createContext<TodoContextType>({
	todos: [],
	newTodo: () => {},
	removeTodo: () => {},
});

const TodosContextProvider: React.FC<React.PropsWithChildren> = (props) => {
	const [todosArr, setTodosArr] = useState<Todo[]>([]);

	const newTodoHandler = (enteredText: string) => {
		setTodosArr((prev: Todo[]) => {
			return [...prev, new Todo(enteredText)];
		});
	};

	const removeTodoHandler = (updatedTodos: Todo[]) => {
		setTodosArr(updatedTodos);
	};

	const contextValue: TodoContextType = {
		todos: todosArr,
		newTodo: newTodoHandler,
		removeTodo: removeTodoHandler,
	};
	return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>;
};

export default TodosContextProvider;
