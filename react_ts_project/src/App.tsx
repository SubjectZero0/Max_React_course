import React from "react";
import styles from "./App.module.css";

import Todos from "./components/Todos";
import NewTodoForm from "./components/NewTodoForm";
import TodosContextProvider from "./components/store/TodosContext";

const App: React.FC = () => {
	//
	return (
		<TodosContextProvider>
			<Todos />
			<NewTodoForm />
		</TodosContextProvider>
	);
};

export default App;
