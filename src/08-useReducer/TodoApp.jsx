import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
	const {
		todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleClickTodo,
	} = useTodo();

	return (
		<>
			<h1 className="mt-4 fw-bold">📝 TodoApp</h1>
			<hr />

			<div className="row">
				<div className="col-7 d-flex justify-content-between ps-0 mb-3">
					<div className="fw-bold fs-5">
						To Do:
						<span className="badge text-bg-primary">{todosCount}</span>
					</div>
					<div className="fw-bold fs-5">
						Done:
						<span className="badge text-bg-success">{pendingTodosCount}</span>
					</div>
				</div>
			</div>
			<div className="row">
				<TodoList
					todos={todos}
					onDeleteTodo={(id) => handleDeleteTodo(id)}
					onToggleTodo={handleClickTodo}
				/>

				<div className="col-5">
					<h2>Agregar Todo</h2>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
