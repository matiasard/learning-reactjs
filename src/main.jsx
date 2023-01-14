import React from "react";
import ReactDOM from "react-dom/client";
import { TodoApp } from "./08-useReducer/TodoApp";
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { MemoHook } from "./06-memos/MemoHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<TodoApp />
	</React.StrictMode>
);
