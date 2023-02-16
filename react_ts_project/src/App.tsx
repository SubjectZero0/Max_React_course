import React from "react";
import styles from "./App.module.css";

import Todos from "./components/Todos";

function App() {
	const todos = ["Learn React", "Learn TypeScript"];
	return (
		<div>
			<Todos items={todos} />
		</div>
	);
}

export default App;
