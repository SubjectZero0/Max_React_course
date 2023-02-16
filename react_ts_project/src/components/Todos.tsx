import React from "react";
import styles from "./Todos.module.css";

const Todos: React.FC<{ items: string[] }> = (props) => {
	return (
		<div>
			<ul>
				{props.items.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
		</div>
	);
};

export default Todos;
