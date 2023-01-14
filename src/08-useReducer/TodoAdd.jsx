import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onInputChange, onResetFrom } = useForm({
		description: "",
	});

	const newTodo = (e) => {
		e.preventDefault();

		if (description.length <= 1) return;

		const todo = {
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		// Si la funcion es opcional, podria usar el ( && )
		// onNewTodo && onNewTodo()
		onNewTodo(todo);
		onResetFrom();
	};

	return (
		<form onSubmit={newTodo}>
			<input
				type="text"
				placeholder="¿Que hay que hacer?"
				className="form-control"
				name="description"
				value={description}
				onChange={onInputChange}
			/>
			<button type="submit" className="btn btn-outline-primary mt-3">
				Agregar
			</button>
		</form>
	);
};
