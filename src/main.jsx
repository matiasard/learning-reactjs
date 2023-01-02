import React from "react";
import ReactDOM from "react-dom/client";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<MultipleCustomHooks />
	</React.StrictMode>
);
