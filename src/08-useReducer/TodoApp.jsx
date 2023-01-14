import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
	// {
	// 	id: new Date().getTime(),
	// 	description: "Recolectar la gema del alma",
	// 	done: false,
	// },
];
const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	const effect = useEffect(() => {
		console.log(todos);
		localStorage.setItem("todos", JSON.stringify(todos) || []);
	}, [todos]);

	//* 🔥 HANDLE TODO ACTION 👇
	const handleNewTodo = (todo) => {
		const action = { type: "[TODO] Add Todo", payload: todo };
		dispatch(action);
	};

	const handleDeleteTodo = (id) => {
		const action = { type: "[TODO] Remove Todo", payload: id };
		dispatch(action);
	};

	const handleClickTodo = (id) => {
		console.log("Click: ", id);
		const action = { type: "[TODO] Toggle Todo", payload: id };
		dispatch(action);
	};

	return (
		<>
			<h1 className="mt-4">
				TodoApp: 1<small>pendientes: 1</small>
			</h1>
			<hr />

			<div className="row">
				<TodoList
					todos={todos}
					onDeleteTodo={handleDeleteTodo}
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
