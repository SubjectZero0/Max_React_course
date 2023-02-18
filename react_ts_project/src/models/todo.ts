export class Todo {
	// model for Todos

	id: string;
	text: string;

	constructor(text: string) {
		this.text = text;
		this.id = new Date().toISOString();
	}
}
