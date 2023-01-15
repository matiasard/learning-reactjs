import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
	return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	useEffect(() => {
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
		const action = { type: "[TODO] Toggle Todo", payload: id };
		dispatch(action);
	};
	return {
		todos,
		handleNewTodo,
		handleDeleteTodo,
		handleClickTodo,
		todosCount: todos.length,
		pendingTodosCount: todos.filter((todo) => !todo.done).length,
	};
};
