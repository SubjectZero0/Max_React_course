export class Todo {
	// model for Todos

	id: string;
	text: string;

	constructor(text: string) {
		this.text = text;
		this.id = new Date().toISOString();
	}
}

export type TodoContextType = {
	todos: Todo[];
	newTodo: (submittedTodo: string) => void;
	removeTodo: (updatedTodos: Todo[]) => void;
};
