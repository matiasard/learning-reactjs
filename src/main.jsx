import React from "react";
import ReactDOM from "react-dom/client";
import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { HooksApp } from "./HooksApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <HooksApp /> */}
		<SimpleForm />
	</React.StrictMode>
);
