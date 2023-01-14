export const TodoItem = ({
	description,
	done,
	id,
	onDeleteTodo,
	onToggleTodo,
}) => {
	return (
		<li className="list-group-item d-flex justify-content-between">
			<span
				onClick={() => onToggleTodo(id)}
				className={`align-self-center ${
					done ? "text-decoration-line-through" : ""
				}`}
			>
				{description}
			</span>
			<button onClick={() => onDeleteTodo(id)} className="btn btn-danger">
				Delete
			</button>
		</li>
	);
};
