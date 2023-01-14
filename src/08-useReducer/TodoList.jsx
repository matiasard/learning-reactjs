import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
	return (
		<ul className="col-7 list-group">
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					{...todo}
					onDeleteTodo={onDeleteTodo}
					onToggleTodo={onToggleTodo}
				/>
			))}
		</ul>
	);
};
