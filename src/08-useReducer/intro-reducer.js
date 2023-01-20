console.log("hola");

const initialState = [
	{
		id: 1,
		todo: "Recolectar la gema del alma",
		done: false,
	},
];

const todoReducer = (state = initialState, action = {}) => {
	console.log(action.type);
	if (action.type === "add") {
		return [...state, action.payload];
	}

	return state;
};

let todos = todoReducer();
console.log(todos);

const newTodo = {
	id: 2,
	todo: "Recolectar la gema del poder",
	done: false,
};
const addTodoAction = {
	type: "add",
	payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);
console.log(todos);
