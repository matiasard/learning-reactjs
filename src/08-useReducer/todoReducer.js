export const todoReducer = (initialState = [], action) => {
	console.log(action.type);

	switch (action.type) {
		case "[TODO] Add Todo":
			// throw new Error("action.type = ABC no esta implementada");
			return [...initialState, action.payload];

		case "[TODO] Remove Todo":
			return initialState.filter((todo) => todo.id !== action.payload);

		case "[TODO] Toggle Todo":
			return initialState.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		default:
			return initialState;
	}
};
